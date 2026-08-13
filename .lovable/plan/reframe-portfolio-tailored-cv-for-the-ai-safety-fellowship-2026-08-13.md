# Reframe portfolio + tailored CV for the AI safety fellowship

Goal: present the same facts already in your CV in the language this application reads for. No new claims, no invented projects, no safety experience you don't have. Every line below traces back to something already on the CV or the site.

## Principle

Your real, verifiable strengths for this role are:

- Systematically finding how systems fail (5+ years QA)
- Testing and debugging AI behaviour against expectations (Fictive Reality)
- Data quality validation at scale (Axfood 70K+ records, PySpark pipeline)
- Self-direction on unscoped work (founded and ran a company solo)

The work is to make those visible in the first ten seconds instead of buried under Selenium and SAP Fiori. Nothing is added.

## Part 1 — Portfolio website changes

**Hero summary.** Rewrite to lead with failure-finding and AI behaviour testing rather than generic "quality-first mindset". Same facts, sharper verbs.

**Skills reordering.** Move "AI in Testing" and "Testing Methods" to the top; push "Test Management & Bug Tracking" and "SDLC & STLC" lower. No skills added or removed.

**Experience bullets.** Reorder within each role so the most transferable bullet comes first:
- Fictive Reality: lead with investigating and debugging AI behaviour issues, and with exploratory testing of AI outputs across domains — currently third and second.
- PyxisPulse: lead with the PySpark data quality pipeline (concrete, published, verifiable), then the evaluate/test/deploy bullet, then operations last.
- Axfood: lead with the 70K-record validation result.
- Accenture: lead with the zero high/medium production defects result and requirements-review-catches-gaps-early bullet.

**Projects.** Keep all four. Put LLM Evaluation Suite first (already is) and describe it in the language it actually is — failure taxonomy, judge-based scoring, structured reporting — without calling it safety research.

**One removal candidate.** The "Recognition" hero stat currently reads "SheBuilds · AWS". For this audience that is neutral-to-weak; suggest changing that cell to "Published open source" (true — the Data & AI Stockholm pipeline) or leaving as-is. Your call.

## Part 2 — Tailored CV document

Generate a one-page-ish DOCX (and PDF) at `/mnt/documents/`, same content as your CV, restructured:

1. Header (unchanged contact details)
2. Summary — three lines, failure-finding first
3. Selected Projects moved **above** Work Experience (the eval suite and the DQ pipeline are the strongest signals; on the current CV they sit on page 2)
4. Work Experience with the bullet reordering above
5. Skills grouped as: Evaluation & Testing / Automation & Data / Tools / Languages
6. Education, Community & Volunteering

No new bullets. No rewording that changes meaning — only ordering, emphasis, and tightening of phrasing already present.

## What this plan deliberately does not do

- Does not claim AI safety, alignment, interpretability, or ML research experience
- Does not add PyTorch, evals frameworks, or publications you don't have
- Does not inflate scope, duration, or outcomes of any role
- Does not relabel QA work as "red-teaming" or "model evaluation"

## Technical notes

- Site edits are content-only, in `src/components/portfolio/`: `HeroSection.tsx`, `SkillsSection.tsx`, `ExperienceSection.tsx`, `ProjectsSection.tsx`. No layout, styling, or design-system changes.
- CV document generated with the `docx` library, exported to PDF via LibreOffice, and visually checked page by page before delivery.
