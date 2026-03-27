

## Sticky Navigation Bar

### What
A compact sticky nav bar at the top of the page with links to each portfolio section. Clicking a link smooth-scrolls to that section.

### Changes

**1. Add section IDs to each component** (`ExperienceSection.tsx`, `SkillsSection.tsx`, `ProjectsSection.tsx`, `EducationSection.tsx`, `VolunteeringSection.tsx`, `LanguagesSection.tsx`, `ContactSection.tsx`)
- Add `id` attributes to each `<section>` element (e.g., `id="experience"`, `id="skills"`, etc.)
- Add `scroll-margin-top` class (`scroll-mt-16`) so sections aren't hidden behind the nav

**2. Create `NavBar.tsx`** (`src/components/portfolio/NavBar.tsx`)
- Sticky nav bar (`sticky top-0 z-50`) with blurred background (`bg-background/80 backdrop-blur-sm border-b`)
- Horizontal scrollable list of nav links: Experience, Skills, Projects, Education, Volunteering, Languages, Contact
- Each link uses `href="#section-id"` with `scroll-behavior: smooth`
- Track active section with `IntersectionObserver` to highlight the current section
- On mobile: horizontally scrollable with `overflow-x-auto`

**3. Update `Index.tsx`**
- Import and render `<NavBar />` between `<HeroSection />` and `<ExperienceSection />`

**4. Update `index.css`**
- Add `scroll-behavior: smooth` to `html`

