# Fieldnote website documentation

## Page inventory

Public pages:

- `index.html` — trust and results homepage
- `home-2.html` — student experience homepage
- `about.html`
- `courses.html`
- `course-details.html`
- `grade-6-8.html`
- `grade-9-10.html`
- `grade-11-12.html`
- `tutors.html`
- `tutor-details.html`
- `fees.html`
- `results.html`
- `testimonials.html`
- `contact.html`
- `faq.html`
- `login.html`
- `register.html`
- `privacy.html`
- `terms.html`
- `404.html`

Student portal pages:

- `dashboard.html`
- `dashboard-timetable.html`
- `dashboard-attendance.html`
- `dashboard-materials.html`
- `dashboard-tests.html`
- `dashboard-profile.html`

## Design system

The interface uses a single-hue juniper/jade Academic Aurora system with neutral reading surfaces, an open-book progression mark, ruled dividers, progress tracks, subject notation, restrained grid fields, schedules, and calm CSS-only aurora motion. Brand color is reserved for actions, states, and progress—not ordinary headings or body copy. Plus Jakarta Sans handles interface text; Source Serif 4 handles display typography.

## Responsive behavior

- Mobile is the base layout.
- From 640 px, eligible carousels show two cards.
- At 768 px, the tablet compositions use balanced two-column layouts where appropriate.
- Above 1024 px, the public desktop navigation and portal sidebar appear. Eligible sliders become static grids with no arrows or autoplay.
- The public header is sticky at every size. The portal header is sticky on tablet/mobile and the sidebar is sticky on desktop.

## JavaScript behavior

`assets/js/main.js` provides public navigation/footer components, drawers, focus trapping, theme/direction controls, dropdowns, accordions, reveal effects, sliders, course filtering, form validation, and back-to-top behavior.

`assets/js/dashboard.js` provides portal chrome, local downloads, attendance switching, profile feedback, and portal actions.

No JavaScript connects to a login provider, API, database, or external account system.

## Customization

Global colors and spacing are CSS custom properties at the top of `assets/css/style.css`. Dark-mode overrides live in `dark-mode.css`, and direction-specific adjustments live in `rtl.css`.
