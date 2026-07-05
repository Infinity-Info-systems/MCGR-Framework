# MCGR Repository Action Table

This table tracks the next practical content and codebase step for each repo in the workspace, excluding `adip-core` and `infinityinfosystems`.

## Priority 1: Hub And Core Frameworks

| Repository | Current Role | Main Gap | Next Asset To Build | Next Codebase Step |
| --- | --- | --- | --- | --- |
| `MCGR-Framework` | Umbrella hub and showcase path | Needs tighter ecosystem framing and stronger repo cross-linking | Master content index, ecosystem map, repo cross-link table | Keep the standalone site as the hub and link every spoke repo back to it |
| `multi-cloud-governance-model` | Core governance model | Needs a deeper reference architecture and operating guidance | Governance model brief, policy layers, control map | Add a structured README with model, layers, and implementation notes |
| `slo-driven-cloud-architecture` | Reliability framework | Needs executive-ready narrative and practical examples | SLO model, service tier examples, reliability scorecard | Add repo sections for SLOs, targets, and operating examples |
| `cloud-finops-governance` | FinOps framework | Needs practical controls and review cadence | FinOps control model, budgeting checklist, cost review template | Add lifecycle guidance for planning, monitoring, and variance handling |
| `dr-governance-framework` | Disaster recovery framework | Needs recovery scenarios and validation artifacts | DR readiness matrix, recovery tiers, test checklist | Add scenario-based recovery guidance and evidence requirements |
| `ai-driven-observability-framework` | Observability framework | Needs signal taxonomy and decision flow | Telemetry map, alert-to-action flow, observability scorecard | Add content for signal collection, analysis, and response loops |
| `cloud-risk-compliance-controls` | Risk and compliance framework | Needs control library and audit evidence mapping | Control catalog, audit-ready evidence guide | Add a control-to-evidence repository structure |

## Priority 2: Applied Operating Repos

| Repository | Current Role | Main Gap | Next Asset To Build | Next Codebase Step |
| --- | --- | --- | --- | --- |
| `cloud-governance-assessment-toolkit` | Assessment toolkit | Needs a usable assessment workflow | Assessment questionnaire, scoring rubric, executive summary template | Add a complete assessment flow from intake to output |
| `enterprise-resilience-maturity-model` | Maturity framework | Needs maturity definitions and progression paths | Maturity levels, scoring guide, improvement roadmap | Add level-by-level artifact guidance and example outputs |
| `technical-due-diligence-cloud` | Due diligence package | Needs diligence sequencing and decision criteria | Due diligence checklist, evidence request list, findings template | Add a decision-oriented due diligence structure |
| `executive-technology-roadmaps` | Executive roadmap repo | Needs horizon planning and decision framing | Roadmap template, prioritization matrix, investment view | Add time-based roadmap structure with milestones |
| `platform-engineering-operating-model` | Operating model repo | Needs platform team operating language and measures | Platform operating model, service catalog, team charter | Add operating model sections for roles, services, and metrics |

## Priority 3: Supporting Knowledge Repos

| Repository | Current Role | Main Gap | Next Asset To Build | Next Codebase Step |
| --- | --- | --- | --- | --- |
| `architecture-diagrams` | Visual backbone | Needs an organized diagram index | Diagram catalog, naming guide, export set | Add a repository index that points to every diagram family |
| `papers-and-publications` | Publication backbone | Needs citation organization and versioning | Publication index, abstract list, references map | Add a publication registry and retrieval structure |
| `cloud-transformation-case-studies` | Evidence and narrative repo | Needs repeatable case study format | Case study template, before/after metrics, summary page | Add a case-study structure with consistent sections |
| `enterprise-architecture-blueprints` | Blueprint repository | Needs clearer blueprint tiers | Blueprint index, reference architecture set | Add a blueprint taxonomy and scope definitions |
| `predictive-reliability-models` | Predictive modeling repo | Needs model documentation and outputs | Model overview, assumptions, feature set, validation notes | Add a model registry and evaluation guidance |
| `self-healing-cloud-operations` | Automation/recovery repo | Needs action workflows and guardrails | Self-healing workflow diagrams, trigger matrix | Add runbook-style automation guidance |
| `sre-reliability-models` | Reliability model repo | Needs consistent model framing | Reliability model index, scorecard, observability linkages | Add model-to-operations mapping and examples |

## Cross-Repo Pattern To Standardize

Every repo should eventually include:

1. `Overview`
2. `Why It Matters`
3. `Core Model`
4. `Artifacts`
5. `Implementation Guidance`
6. `Examples`
7. `References`
8. `Start Here`

## Asset Build Order

1. Build the shared content starter kit in `MCGR-Framework`.
2. Add one high-value visual or template asset to each core framework repo.
3. Add one working checklist or scorecard to each applied operating repo.
4. Add one index or registry to each supporting knowledge repo.
5. Cross-link every repo back to `MCGR-Framework` and to the closest sibling repo.

## Suggested First Wave Of Real Assets

- `MCGR-Framework`: master ecosystem map and repo index
- `multi-cloud-governance-model`: governance control map
- `slo-driven-cloud-architecture`: SLO scorecard
- `cloud-finops-governance`: FinOps review template
- `dr-governance-framework`: recovery validation checklist
- `cloud-governance-assessment-toolkit`: full assessment worksheet
- `architecture-diagrams`: curated diagram index
- `cloud-transformation-case-studies`: one complete case study

## Notes

- Keep the hub repo public-facing and executive-friendly.
- Keep the spoke repos practical and artifact-rich.
- Use the same naming and section order so the family feels coherent.
