const fs = require("node:fs");
const path = require("node:path");

const dimensions = [
  ["Governance", "policyCoverage", 0.22],
  ["Reliability", "sloCoverage", 0.2],
  ["Resilience", "drValidated", 0.18],
  ["FinOps", "costAllocationCoverage", 0.15],
  ["Observability", "observabilityCoverage", 0.13],
  ["Compliance", "complianceCoverage", 0.12],
];

function score(value) {
  return typeof value === "boolean" ? (value ? 100 : 0) : Number(value || 0);
}

function assessEstate(estate) {
  const providers = estate.environments.flatMap((environment) =>
    environment.providers.map((provider) => ({ ...provider, environment: environment.name })),
  );
  if (!providers.length) throw new Error("At least one provider is required.");

  const results = providers.map((provider) => {
    const controls = dimensions.map(([name, property, weight]) => ({
      name,
      score: score(provider[property]),
      weight,
      status: score(provider[property]) >= 85 ? "on-track" : "needs-attention",
    }));
    const overallScore = Math.round(controls.reduce((total, control) => total + control.score * control.weight, 0));
    return { provider: provider.name, environment: provider.environment, accounts: provider.accounts || 0, overallScore, controls };
  });

  const average = Math.round(results.reduce((total, result) => total + result.overallScore, 0) / results.length);
  const actions = results.flatMap((result) => result.controls
    .filter((control) => control.status === "needs-attention")
    .map((control) => `${result.environment}/${result.provider}: improve ${control.name} (${control.score}%).`));

  return {
    organization: estate.organization || "Unnamed organization",
    generatedAt: new Date().toISOString(),
    portfolioScore: average,
    maturity: average >= 85 ? "Managed" : average >= 70 ? "Defined" : "Developing",
    providers: results,
    priorityActions: actions,
  };
}

function run(inputPath) {
  const estate = JSON.parse(fs.readFileSync(inputPath, "utf8"));
  const report = assessEstate(estate);
  const outputPath = path.resolve(path.dirname(inputPath), "../reports/mcgr-assessment.json");
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, `${JSON.stringify(report, null, 2)}\n`);
  console.log(`MCGR portfolio score: ${report.portfolioScore}/100 (${report.maturity})`);
  console.log(`Report written to ${outputPath}`);
  return report;
}

if (require.main === module) run(process.argv[2] || "config/cloud-estate.json");
module.exports = { assessEstate, score };
