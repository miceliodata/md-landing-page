# Partners Section - Content Backup

**Date:** 2025-10-10
**Purpose:** Backup before rebuilding the Partners section from scratch

---

## Section Title and Subtitle

**Title:** Partnership Opportunities

**Subtitle:** We're building a comprehensive ecosystem that requires diverse expertise. Find your role in the future of supply chain transparency.

---

## Partner Features (6 Cards)

### Card 1: Sourcing Companies
- **Icon:** GlobeAltIcon (from @heroicons/vue/24/outline)
- **Bullet Icon:** BoltIcon
- **Color:** text-indigo-500
- **Title:** Sourcing Companies
- **Description:**
  - Supplier onboarding
  - Supplier selection and performance management
  - Quality assurance
  - Market intelligence

### Card 2: Tech providers
- **Icon:** CpuChipIcon (from @heroicons/vue/24/outline)
- **Bullet Icon:** BoltIcon
- **Color:** text-blue-500
- **Title:** Tech providers
- **Description:**
  - API development
  - Access to a verified data portal
  - End-to-end integration

### Card 3: Certification agencies
- **Icon:** CheckBadgeIcon (from @heroicons/vue/24/outline)
- **Bullet Icon:** BoltIcon
- **Color:** text-cyan-500
- **Title:** Certification agencies
- **Description:**
  - Live verification of data
  - Compliance
  - Audit

### Card 4: Industry associations, NGOs, universities
- **Icon:** UsersIcon (from @heroicons/vue/24/outline)
- **Bullet Icon:** BoltIcon
- **Color:** text-teal-500
- **Title:** Industry associations, NGOs, universities
- **Description:**
  - Network connections
  - Operations and sustainability research
  - Stakeholder training
  - Industrial development

### Card 5: Sustainability Consulting & ESG companies
- **Icon:** ChartBarIcon (from @heroicons/vue/24/outline)
- **Bullet Icon:** BoltIcon
- **Color:** text-emerald-500
- **Title:** Sustainability Consulting & ESG companies
- **Description:**
  - Sustainability reporting
  - ESG consulting
  - Carbon footprint analysis
  - Compliance Audit

### Card 6: Label, barcode providers
- **Icon:** QrCodeIcon (from @heroicons/vue/24/outline)
- **Bullet Icon:** BoltIcon
- **Color:** text-green-500
- **Title:** Label, barcode providers
- **Description:**
  - Integration with circularity data
  - Digital twins

---

## Component Used
- **MainCard** component (from @/components/cards/MainCard.vue)
- Cards use `hoverEffect="none"` prop

---

## Layout Details
- **Desktop:** 3-column grid (grid-cols-3)
- **Mobile:** Single column (grid-cols-1)
- Section has sticky scroll behavior with animations
- Min height: 400vh (for scroll animations)

---

## Animation Details (for reference if needed)
- Desktop: Title stays visible, cards slide in sequentially from bottom
- Mobile: Title fades in/out, then first 3 cards appear together, fade out, then second 3 cards appear
- Various opacity and translateY animations controlled by scroll progress
