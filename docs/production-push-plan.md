# MCGR Production Push Plan

## Purpose

This plan captures the final steps to promote the MCGR public site from review to production at:

- `https://mcgr.infinityinfosystems.com/mcgr-framework`

## Current Status

- MCGR landing page is built and review-ready
- ecosystem, publications, and assets pages are in place
- repo spotlight and ready-reference links are visible
- build completed successfully during review

## Pre-Production Checklist

1. Confirm the content on the landing page, ecosystem page, publications page, and assets page.
2. Verify the `MCGR-Framework` spotlight is prominent and links correctly.
3. Confirm the Start Here band and ready-reference pages render correctly on desktop and mobile.
4. Review the links to the public GitHub repositories.
5. Confirm the top navigation still works across the site.
6. Review the Next.js workspace-root warning and decide whether to clean it up before publish.

## Deployment Steps

1. Merge or copy the reviewed MCGR page updates into the production branch for `infinityinfosystems`.
2. Build the production site in the deployment environment.
3. Publish the site at `mcgr.infinityinfosystems.com/mcgr-framework`.
4. Verify all MCGR routes after deployment:
   - `/mcgr-framework`
   - `/mcgr-framework/ecosystem`
   - `/mcgr-framework/publications`
   - `/mcgr-framework/assets`

## Post-Deployment Verification

Check that:

- the homepage loads cleanly
- the featured research spotlight is visible
- the Start Here band sits in the expected location
- ecosystem links open the intended repositories
- publications and assets pages load without errors
- the URL resolves correctly on the public domain

## Rollback Plan

If any blocking issue appears after deployment:

1. revert to the last known good production version
2. disable the new MCGR route if necessary
3. fix the issue in review
4. redeploy only after confirmation

## Recommended Owner Review

Before the production push, review with:

- site owner or maintainer
- content owner for MCGR
- deployment owner for Infinity Info Systems

## Go / No-Go Gate

Green light for production when:

- all four MCGR pages render correctly
- links open correctly
- layout is approved visually
- the public URL is ready to be published

