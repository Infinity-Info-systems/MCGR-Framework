# MCGR Repository Action Table

This table tracks the practical content and codebase work for each repo in the workspace, excluding `adip-core` and `infinityinfosystems`.

## Completion Status

The first-wave ecosystem work captured in this table has been implemented and pushed.

## Priority 1: Hub And Core Frameworks

| Repository | Current Role | Main Gap | Next Asset To Build | Next Codebase Step | Status |
| --- | --- | --- | --- | --- | --- |
| `MCGR-Framework` | Umbrella hub and showcase path | Was tightened with stronger ecosystem framing and repo cross-linking | Master content index, ecosystem map, repo cross-link table | Keep the standalone site as the hub and link every spoke repo back to it | Completed |
| `multi-cloud-governance-model` | Core governance model | Was expanded with a reference architecture and operating guidance | Governance control map | Added a structured README with model, layers, and implementation notes | Completed |
| `slo-driven-cloud-architecture` | Reliability framework | Was expanded with executive-ready narrative and practical examples | SLO scorecard | Added repo sections for SLOs, targets, and operating examples | Completed |
| `cloud-finops-governance` | FinOps framework | Was expanded with practical controls and review cadence | FinOps review cycle | Added lifecycle guidance for planning, monitoring, and variance handling | Completed |
| `dr-governance-framework` | Disaster recovery framework | Was expanded with recovery scenarios and validation artifacts | Recovery validation matrix | Added scenario-based recovery guidance and evidence requirements | Completed |
| `ai-driven-observability-framework` | Observability framework | Was expanded with signal taxonomy and decision flow | Predictive signal map | Added content for signal collection, analysis, and response loops | Completed |
| `cloud-risk-compliance-controls` | Risk and compliance framework | Was expanded with control library and audit evidence mapping | Control coverage map | Added a control-to-evidence repository structure | Completed |

## Priority 2: Applied Operating Repos

| Repository | Current Role | Main Gap | Next Asset To Build | Next Codebase Step | Status |
| --- | --- | --- | --- | --- | --- |
| `cloud-governance-assessment-toolkit` | Assessment toolkit | Was expanded with a usable assessment workflow | Assessment plan | Added a complete assessment flow from intake to output | Completed |
| `enterprise-resilience-maturity-model` | Maturity framework | Was expanded with maturity definitions and progression paths | Enterprise resilience scorecard | Added level-by-level artifact guidance and example outputs | Completed |
| `technical-due-diligence-cloud` | Due diligence package | Was expanded with diligence sequencing and decision criteria | Technical due diligence matrix | Added a decision-oriented due diligence structure | Completed |
| `executive-technology-roadmaps` | Executive roadmap repo | Was expanded with horizon planning and decision framing | Executive roadmap sequence | Added time-based roadmap structure with milestones | Completed |
| `platform-engineering-operating-model` | Operating model repo | Was expanded with platform team operating language and measures | Platform operating map | Added operating model sections for roles, services, and metrics | Completed |

## Priority 3: Supporting Knowledge Repos

| Repository | Current Role | Main Gap | Next Asset To Build | Next Codebase Step | Status |
| --- | --- | --- | --- | --- | --- |
| `architecture-diagrams` | Visual backbone | Was expanded with an organized diagram index | Architecture map index | Added a repository index that points to every diagram family | Completed |
| `papers-and-publications` | Publication backbone | Was expanded with citation organization and versioning | Publication registry | Added a publication registry and retrieval structure | Completed |
| `cloud-transformation-case-studies` | Evidence and narrative repo | Was expanded with a repeatable case study format | Transformation case registry | Added a case-study structure with consistent sections | Completed |
| `enterprise-architecture-blueprints` | Blueprint repository | Was expanded with clearer blueprint tiers | Blueprint index | Added a blueprint taxonomy and scope definitions | Completed |
| `predictive-reliability-models` | Predictive modeling repo | Was expanded with model documentation and outputs | Predictive reliability playbook | Added a model registry and evaluation guidance | Completed |
| `self-healing-cloud-operations` | Automation/recovery repo | Was expanded with action workflows and guardrails | Self-healing workflow map | Added runbook-style automation guidance | Completed |
| `sre-reliability-models` | Reliability model repo | Was expanded with consistent model framing | SRE reliability operations map | Added model-to-operations mapping and examples | Completed |

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
- `cloud-finops-governance`: FinOps review cycle
- `dr-governance-framework`: recovery validation matrix
- `cloud-governance-assessment-toolkit`: assessment plan
- `architecture-diagrams`: architecture map index
- `cloud-transformation-case-studies`: transformation case registry

## Notes

- Keep the hub repo public-facing and executive-friendly.
- Keep the spoke repos practical and artifact-rich.
- Use the same naming and section order so the family feels coherent.
