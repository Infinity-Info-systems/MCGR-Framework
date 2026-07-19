# MCGR Enterprise Starter Kit

A dependency-free baseline assessment for AWS, Azure, GCP, and hybrid-cloud estates. It converts a small inventory into a portable governance report aligned to the MCGR dimensions: Governance, Reliability, Resilience, FinOps, Observability, and Compliance.

## Use it

```bash
npm run assess
npm test
```

Edit `config/cloud-estate.json` to add environments and providers. Each provider accepts percentage coverage values (0–100) for policy, SLO, cost allocation, observability, and compliance; set `drValidated` to `true` or `false`. The command writes `reports/mcgr-assessment.json`, which can be attached to an architecture review or used to prioritize remediation.

## Guardrails

This starter kit demonstrates framework alignment only. Validate weights, thresholds, data sources, and control ownership with your organization before using it for production governance decisions.
