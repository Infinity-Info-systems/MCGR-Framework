export type RepoLink = readonly [label: string, href: string];
export type RepoGroup = {
  title: string;
  items: RepoLink[];
};

export const mcgrCoreFrameworks: RepoLink[] = [
  ["Multi-Cloud Governance Model", "https://github.com/rammar876/multi-cloud-governance-model"],
  ["SLO-Driven Cloud Architecture", "https://github.com/rammar876/slo-driven-cloud-architecture"],
  ["Cloud FinOps Governance", "https://github.com/rammar876/cloud-finops-governance"],
  ["DR Governance Framework", "https://github.com/rammar876/dr-governance-framework"],
  ["AI-Driven Observability Framework", "https://github.com/rammar876/ai-driven-observability-framework"],
  ["Cloud Risk And Compliance Controls", "https://github.com/rammar876/cloud-risk-compliance-controls"],
  ["AI Governance Framework", "https://github.com/rammar876/ai-governance-framework"],
];

export const mcgrOperatingRepos: RepoLink[] = [
  ["Cloud Governance Assessment Toolkit", "https://github.com/rammar876/cloud-governance-assessment-toolkit"],
  ["Enterprise Resilience Maturity Model", "https://github.com/rammar876/enterprise-resilience-maturity-model"],
  ["Technical Due Diligence Cloud", "https://github.com/rammar876/technical-due-diligence-cloud"],
  ["Platform Engineering Operating Model", "https://github.com/rammar876/platform-engineering-operating-model"],
  ["Executive Technology Roadmaps", "https://github.com/rammar876/executive-technology-roadmaps"],
];

export const mcgrKnowledgeRepos: RepoLink[] = [
  ["Architecture Diagrams", "https://github.com/rammar876/architecture-diagrams"],
  ["Cloud Transformation Case Studies", "https://github.com/rammar876/cloud-transformation-case-studies"],
  ["Enterprise Architecture Blueprints", "https://github.com/rammar876/enterprise-architecture-blueprints"],
  ["Papers And Publications", "https://github.com/rammar876/papers-and-publications"],
  ["Predictive Reliability Models", "https://github.com/rammar876/predictive-reliability-models"],
  ["Self-Healing Cloud Operations", "https://github.com/rammar876/self-healing-cloud-operations"],
  ["SRE Reliability Models", "https://github.com/rammar876/sre-reliability-models"],
];

export const mcgrRepoGroups: RepoGroup[] = [
  { title: "Core Frameworks", items: mcgrCoreFrameworks },
  { title: "Applied Operating Repos", items: mcgrOperatingRepos },
  { title: "Supporting Knowledge Repos", items: mcgrKnowledgeRepos },
];

export const mcgrWikiLayers = [
  "Governance And Policy",
  "Observability And SRE",
  "Cost Optimization",
  "Disaster Recovery And Resilience",
  "Multi-Cloud Infrastructure",
] as const;

export const mcgrWikiMetrics = [
  ["Cloud Cost", "~35% Reduction"],
  ["Uptime", "99.9%+"],
  ["MTTR", "Reduced"],
  ["Resource Utilization", "Optimized"],
  ["DR Readiness", "Improved"],
] as const;

export const mcgrExecutiveSummary = [
  "One entry point for the flagship operating model.",
  "One ecosystem map for supporting repos, evidence, and publications.",
  "One path from strategy to assessment to execution.",
] as const;

export const mcgrSpotlightRepos: RepoLink[] = [
  ["MCGR-Framework Repo", "https://github.com/Infinity-Info-systems/MCGR-Framework"],
  ["Operating Model Index", "/mcgr-framework/operating-model"],
  ["Ecosystem Map", "/mcgr-framework/ecosystem"],
];

export const mcgrPublications: RepoLink[] = [
  ["A Multi-Cloud Governance And Site Reliability Engineering Framework For FinTech Platforms", "https://papers.ssrn.com/abstract=6663578"],
  ["AI-Driven Observability And Reliability Framework For Multi-Cloud Financial Platforms", "https://papers.ssrn.com/abstract=6557159"],
  ["A Standardized Multi-Cloud Governance Model For Policy Consistency And Drift Detection", "https://papers.ssrn.com/abstract=6713338"],
  ["Designing SLO-Driven Cloud Architectures", "https://papers.ssrn.com/abstract=6617678"],
];

export const mcgrAssets = [
  {
    title: "Architecture Diagrams",
    detail: "Visual models for governance, SRE, observability, resilience, and FinOps.",
    href: "https://github.com/rammar876/architecture-diagrams",
  },
  {
    title: "Cloud Governance Assessment Toolkit",
    detail: "Assessment checklists, scorecards, questionnaires, and remediation templates.",
    href: "https://github.com/rammar876/cloud-governance-assessment-toolkit",
  },
  {
    title: "Cloud Transformation Case Studies",
    detail: "Narrative case studies, impact metrics, and executive storytelling artifacts.",
    href: "https://github.com/rammar876/cloud-transformation-case-studies",
  },
  {
    title: "Enterprise Resilience Maturity Model",
    detail: "Maturity levels, scorecards, dashboards, and roadmap templates.",
    href: "https://github.com/rammar876/enterprise-resilience-maturity-model",
  },
  {
    title: "Papers And Publications",
    detail: "SSRN papers, citations, abstracts, LaTeX, and PDF references.",
    href: "https://github.com/rammar876/papers-and-publications",
  },
] as const;

export const mcgrOperatingLayers = [
  ["Flagship narrative", "MCGR-Framework"],
  ["Strategy", "Executive Technology Roadmaps, Enterprise Architecture Blueprints"],
  ["Governance", "Cloud Risk and Compliance Controls, AI Governance Framework, Cloud FinOps Governance, DR Governance Framework"],
  ["Assessment", "Cloud Governance Assessment Toolkit, Enterprise Resilience Maturity Model, Technical Due Diligence Cloud"],
  ["Reliability", "SLO-Driven Cloud Architecture, SRE Reliability Models, Predictive Reliability Models"],
  ["Observability", "AI-Driven Observability Framework, Self-Healing Cloud Operations"],
  ["Platform", "Platform Engineering Operating Model"],
  ["Evidence", "Cloud Transformation Case Studies, Papers and Publications"],
] as const;

export const mcgrOperatingSections = [
  {
    title: "Strategy And Roadmaps",
    items: [
      ["Executive Technology Roadmaps", "https://github.com/rammar876/executive-technology-roadmaps"],
      ["Enterprise Architecture Blueprints", "https://github.com/rammar876/enterprise-architecture-blueprints"],
      ["Cloud Transformation Case Studies", "https://github.com/rammar876/cloud-transformation-case-studies"],
    ],
  },
  {
    title: "Governance And Control",
    items: [
      ["Cloud Risk And Compliance Controls", "https://github.com/rammar876/cloud-risk-compliance-controls"],
      ["AI Governance Framework", "https://github.com/rammar876/ai-governance-framework"],
      ["Cloud FinOps Governance", "https://github.com/rammar876/cloud-finops-governance"],
      ["DR Governance Framework", "https://github.com/rammar876/dr-governance-framework"],
    ],
  },
  {
    title: "Assessment And Maturity",
    items: [
      ["Cloud Governance Assessment Toolkit", "https://github.com/rammar876/cloud-governance-assessment-toolkit"],
      ["Enterprise Resilience Maturity Model", "https://github.com/rammar876/enterprise-resilience-maturity-model"],
      ["Technical Due Diligence Cloud", "https://github.com/rammar876/technical-due-diligence-cloud"],
    ],
  },
  {
    title: "Reliability And Observability",
    items: [
      ["SLO-Driven Cloud Architecture", "https://github.com/rammar876/slo-driven-cloud-architecture"],
      ["SRE Reliability Models", "https://github.com/rammar876/sre-reliability-models"],
      ["Predictive Reliability Models", "https://github.com/rammar876/predictive-reliability-models"],
      ["AI-Driven Observability Framework", "https://github.com/rammar876/ai-driven-observability-framework"],
      ["Self-Healing Cloud Operations", "https://github.com/rammar876/self-healing-cloud-operations"],
    ],
  },
  {
    title: "Platform And Evidence",
    items: [
      ["Platform Engineering Operating Model", "https://github.com/rammar876/platform-engineering-operating-model"],
      ["Architecture Diagrams", "https://github.com/rammar876/architecture-diagrams"],
      ["Papers And Publications", "https://github.com/rammar876/papers-and-publications"],
    ],
  },
] as const;

export const mcgrContactPaths = [
  {
    title: "GitHub Repository",
    detail: "Open the MCGR-Framework repo for source, issues, and repository history.",
    href: "https://github.com/Infinity-Info-systems/MCGR-Framework",
    label: "Open Repo",
  },
  {
    title: "GitHub Wiki",
    detail: "Use the wiki for deeper technical reference, narrative notes, and supporting context.",
    href: "https://github.com/Infinity-Info-systems/MCGR-Framework/wiki",
    label: "Open Wiki",
  },
  {
    title: "Ecosystem Map",
    detail: "Review the operating model and use the ecosystem page to navigate the participating repos.",
    href: "/mcgr-framework/ecosystem",
    label: "View Ecosystem",
  },
];
