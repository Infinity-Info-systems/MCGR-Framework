# MCGR Shared Starter Kit

This starter kit defines the common structure for the MCGR repository family.

## Goal

Make every repository feel like part of one connected system:

- same document spine
- same cross-link pattern
- same artifact hierarchy
- same executive-friendly summary style

## Standard Repository Spine

Use the following order in every repository README and supporting index:

1. Overview
2. Why It Matters
3. Core Model
4. Key Artifacts
5. Implementation Guidance
6. Examples
7. References
8. Start Here

## Standard Cross-Link Pattern

Every repo should link to:

- `MCGR-Framework` as the hub
- the nearest core framework repo
- one applied operating repo, when relevant
- one supporting knowledge repo, when relevant

## Repo Types

### Hub Repo

Use this for the main ecosystem and executive narrative.

Include:

- ecosystem map
- repo index
- publishing plan
- public-facing overview

### Core Framework Repo

Use this for governing principles and reference models.

Include:

- problem statement
- framework layers
- operating model
- scorecard or control map

### Applied Operating Repo

Use this for practical execution and assessment.

Include:

- checklist or questionnaire
- scoring rubric
- evidence requirements
- summary output

### Supporting Knowledge Repo

Use this for diagrams, publications, and proof.

Include:

- index of assets
- references
- examples
- reusable visuals

## README Template Outline

```markdown
# Repository Name

## Overview

## Why It Matters

## Core Model

## Key Artifacts

## Implementation Guidance

## Examples

## References

## Start Here
```

## Starter Asset Checklist

Each repo should aim to ship at least one of these first:

- diagram
- checklist
- template
- scorecard
- case study
- publication map
- implementation roadmap

## First Build Targets

Recommended first build targets in order:

1. `MCGR-Framework`
2. `multi-cloud-governance-model`
3. `slo-driven-cloud-architecture`
4. `cloud-finops-governance`
5. `dr-governance-framework`
6. `ai-driven-observability-framework`
7. `cloud-risk-compliance-controls`

## Notes

- Keep the language executive-friendly in the hub.
- Keep repo-specific language practical and implementation-oriented in the spokes.
- Avoid repeating the full ecosystem explanation in every repo; link back to the hub instead.
