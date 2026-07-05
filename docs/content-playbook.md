# Content Playbook

## Purpose

This playbook defines a shared structure for the related repositories in this workspace so they can grow as a coherent content ecosystem.

## Hub and Spoke Model

- `MCGR-Framework` is the hub
- related repos are the spokes
- each spoke should explain one part of the larger operating model
- each repo should link back to the hub and adjacent spokes

## Standard README Outline

Use this outline for every repo unless a repo type requires a small variation.

1. Overview
2. Why it matters
3. Core framework or model
4. Components or layers
5. Use cases
6. Implementation guidance
7. Artifacts and templates
8. References

## Repo Type Variants

### Framework Repo

Use for:

- governance models
- operating models
- architecture models
- reliability models

Suggested sections:

- overview
- problem statement
- principles
- framework layers
- operating model
- governance model
- metrics
- references

### Assessment Repo

Use for:

- maturity models
- scorecards
- questionnaires
- checklists

Suggested sections:

- overview
- assessment scope
- scoring approach
- maturity levels
- evidence requirements
- reporting outputs
- references

### Case Study Repo

Use for:

- transformation examples
- operating outcomes
- before-and-after comparisons

Suggested sections:

- context
- baseline
- intervention
- results
- lessons learned
- references

### Visual Asset Repo

Use for:

- diagrams
- blueprint collections
- reference architectures

Suggested sections:

- overview
- taxonomy
- diagram index
- source files
- exports
- references

## Shared Naming Convention

Use consistent naming for all content types:

- `overview`
- `framework`
- `model`
- `scorecard`
- `roadmap`
- `template`
- `references`
- `evidence`

## Suggested Cross-Link Table

| Repo | Role | Links Back To |
| --- | --- | --- |
| `MCGR-Framework` | Hub | itself |
| `multi-cloud-governance-model` | governance core | `MCGR-Framework` |
| `slo-driven-cloud-architecture` | reliability core | `MCGR-Framework` |
| `cloud-finops-governance` | cost governance | `MCGR-Framework` |
| `dr-governance-framework` | resilience core | `MCGR-Framework` |
| `ai-driven-observability-framework` | observability core | `MCGR-Framework` |
| `cloud-risk-compliance-controls` | control framework | `MCGR-Framework` |
| `cloud-governance-assessment-toolkit` | assessment toolkit | `MCGR-Framework` |
| `enterprise-resilience-maturity-model` | maturity model | `MCGR-Framework` |
| `technical-due-diligence-cloud` | diligence toolkit | `MCGR-Framework` |
| `platform-engineering-operating-model` | operating model | `MCGR-Framework` |

## First Content Package To Build

The first reusable package should include:

- a canonical executive summary
- a hub-and-spoke repo map
- a framework diagram
- a standard references section
- a standard template for related READMEs

## Working Rule

Each new repo should start with a short README, then expand into structured sections, then add diagrams, examples, and templates.

