import {
  mcgrAssets,
  mcgrContactPaths,
  mcgrExecutiveSummary,
  mcgrPublications,
  mcgrRepoGroups,
  mcgrSpotlightRepos,
} from "./mcgrRegistry";

export type McgrReportSection = {
  title: string;
  count: number;
  summary: string;
};

export function buildMcgrReport() {
  const sections: McgrReportSection[] = [
    {
      title: "Hub Narrative",
      count: 1,
      summary: "The standalone MCGR path presents one flagship operating model with supporting pages for ecosystem, publications, assets, contact, and operating model.",
    },
    {
      title: "Repository Family",
      count: mcgrRepoGroups.reduce((total, group) => total + group.items.length, 0),
      summary: "The ecosystem map groups core frameworks, applied operating repos, and supporting knowledge repos under one parent view.",
    },
    {
      title: "Public Proof Points",
      count: mcgrPublications.length,
      summary: "The publication trail provides the research layer that validates the framework narrative.",
    },
    {
      title: "Reusable Assets",
      count: mcgrAssets.length,
      summary: "The asset page highlights diagrams, scorecards, templates, case studies, and publication references.",
    },
    {
      title: "Audience Entry Points",
      count: mcgrContactPaths.length + mcgrSpotlightRepos.length + mcgrExecutiveSummary.length,
      summary: "The page paths and calls to action route executives, reviewers, and collaborators to the right starting point.",
    },
  ];

  return {
    sections,
    totals: {
      repoGroups: mcgrRepoGroups.length,
      repoLinks: mcgrRepoGroups.reduce((total, group) => total + group.items.length, 0),
      publications: mcgrPublications.length,
      assets: mcgrAssets.length,
      contactPaths: mcgrContactPaths.length,
    },
  };
}
