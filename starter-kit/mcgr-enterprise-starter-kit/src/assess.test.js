const test = require("node:test");
const assert = require("node:assert/strict");
const { assessEstate } = require("./assess");

test("assesses a multi-cloud estate and identifies weak controls", () => {
  const report = assessEstate({ organization: "Example", environments: [{ name: "prod", providers: [{ name: "aws", policyCoverage: 90, sloCoverage: 90, drValidated: true, costAllocationCoverage: 90, observabilityCoverage: 90, complianceCoverage: 90 }, { name: "gcp", policyCoverage: 60, sloCoverage: 60, drValidated: false, costAllocationCoverage: 60, observabilityCoverage: 60, complianceCoverage: 60 }] }] });
  assert.equal(report.providers.length, 2);
  assert.equal(report.portfolioScore, 71);
  assert.equal(report.maturity, "Defined");
  assert.match(report.priorityActions.join(" "), /prod\/gcp: improve Governance/);
});
