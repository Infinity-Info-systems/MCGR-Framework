MCGR Submission Package

This package contains a LaTeX-based IEEE-style manuscript and supporting submission materials.

## Files

- `mcgr_paper.tex` - Main LaTeX source file
- `references.bib` - BibTeX bibliography
- `figures/mcgr_layered_architecture.tex` - TikZ source for the layered architecture diagram
- `figures/mcgr_feedback_loop.tex` - TikZ source for the feedback loop diagram
- `ssrn_abstract.txt` - SSRN-ready title, abstract, and keywords
- `mcgr_paper.pdf` - Compiled PDF draft

## How to Compile

Run:

```bash
pdflatex mcgr_paper.tex
bibtex mcgr_paper
pdflatex mcgr_paper.tex
pdflatex mcgr_paper.tex
```

Or run:

```bash
latexmk -pdf mcgr_paper.tex
```

## Notes Before Submission

1. Replace `your.email@example.com` with the correct author email.
2. Confirm target publisher formatting rules before submission.
3. Replace practitioner case study values with final evidence-backed metrics where possible.
4. Add acknowledgments only if required.
