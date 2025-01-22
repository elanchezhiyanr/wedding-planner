# Changelog

## [0.1.1] - 2024-03-27

### Added
- New form validation dependencies:
  - @vee-validate/zod
  - @vueuse/core
  - zod
- New UI components:
  - AddGuestDialog
  - Badge
  - Dialog components suite

### Changed
- Enhanced guest management page with dynamic table view
- Improved layout responsiveness
- Updated sidebar with collapsible functionality
- Refined navigation elements

### Removed
- Supabase redirect options from nuxt.config.ts
- Disabled automatic redirects for better flow control

## [0.1.0] - 2024-01-21 19:52

### Added
- Initial project structure and setup
- Wedding planning specific components:
  - CountdownCard for event timing
  - GuestCard for managing attendees
  - TaskCard for planning checklist
- Authentication system using Supabase
- Responsive layouts for budget and event management pages
- Mobile-friendly navigation with sidebar and sheet components

### Infrastructure
- Project configuration and dependencies
- Integration of key modules:
  - @nuxtjs/supabase for authentication
  - @nuxt/icon for iconography
- Added .cursorrules for component usage guidelines

### User Interface
- Core UI components using shadcn-nuxt
- Responsive navigation structure
- Mobile-optimized layout system
- Wedding planning specific layouts and pages

### Developer Experience
- Project documentation setup
- Initial changelog structure
- Component usage guidelines
