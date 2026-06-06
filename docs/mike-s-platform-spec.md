# Mike Miller — Product Leadership Platform
## Product Requirements Document

---

## Overview

This product is a personal portfolio and professional identity website for Mike Miller, a Senior Product Manager specializing in platform products, AI workflows, and developer experience. The site is targeted at hiring managers, recruiters, potential consulting clients, and the broader product and developer community. It solves the problem of presenting a PM's work, philosophy, and availability in a coherent, high-signal format — consolidating case studies, a resume, a founder project (Tinybots), long-form thinking, and direct contact information into a single navigable site.

---

## Features

### Global Navigation
A persistent sticky navigation bar appears on every page. It contains the site owner's name as a home link, four primary destination links (Work, Thinking, Tinybots, Resume), and a teal-colored "Available for roles" call-to-action link in the top-right corner. The currently active page is visually distinguished from inactive links.

### Hero Section (Homepage)
The homepage hero presents a large typographic headline, an eyebrow tag communicating the owner's current status, a brief descriptive paragraph, and a set of specialty chips (e.g., Platform PM, AI PM, Open to consulting). An identity card displayed alongside the headline surfaces key career statistics (users scaled, developers on platform, enterprise customers, countries reached) and skill badges.

### Metrics Band
A four-column band immediately below the homepage hero repeats the four key career statistics (200k+ Users Scaled, 500+ Devs on Platform, 250 Enterprise Customers, 10 Countries) as large typographic numbers with labels.

### Case Study List (Homepage and Work index)
A numbered, vertically stacked list of work items. Each row displays a sequence number, project title, categorization tags, a short description, and a "Read →" or "View →" action link. Rows are interactive and expand their visual state on hover.

### Work Index Page with Filtering
A dedicated Work page lists all projects with a filter bar of pill buttons (All, Platform, AI, Enterprise, Consumer, Founder). Selecting a filter hides non-matching projects and re-numbers the visible rows sequentially. A dark featured block at the bottom of the page highlights Tinybots with headline stats (10k+ Users, 7 Products Shipped, 6 Months to Launch).

### AI & Workflows Specialty Page
A dedicated page focused on the owner's AI product management practice. It includes a hero section with an "AI PM Philosophy" card listing four numbered principles (Trust before capability; Graceful failure > perfect success; Explainability is a feature; Humans stay in the loop), a three-card principles band (Discovery, Prioritization, Measurement), and a curated list of AI-related case studies. A dark philosophy block presents a pull quote and supporting text.

### Philosophy / Writing Section
A dark-background section on the homepage and a standalone writing band on the About page presents the owner's product philosophy in long-form prose. It links to the full writing section.

### Thinking / Writing Cards
A three-column card grid surfaces published articles. Each card shows a category label, article title, short description, publication date, and a "Read →" link. The same three articles (Platform Strategy, AI Product, Developer Experience) appear across the homepage, About page, and AI page.

### About Page
A two-column bio layout with long-form narrative text on the left and a sticky "Quick Facts" card on the right. The facts card lists Location, Focus, Current activity (with an animated availability indicator), Open-to opportunities (Senior PM, Lead PM, Consulting), and Background. Two action links below the card allow the user to download the resume or view work.

### Tinybots Page
A dedicated page for the Tinybots indie product studio. The hero uses a dark teal gradient with three product cards listing each product's name, one-line description, and live/beta/coming-soon status badge. Below the hero, a four-column values section describes the studio's principles (Privacy-first, Small surface area, Ship fast iterate honest, No VC no pressure). A numbered product list enumerates Tinybots Assistant, Notestack, and Clearview Analytics. A founder note section includes a portrait photo, narrative text, and a signature block.

### Resume Page
A two-column resume layout with a left column for experience (four role blocks with company name, date range, title, and bulleted accomplishments) and education, and a right sticky sidebar with skills (grouped into Product, Process, Technical clusters), a 2×2 highlights grid, and an "Elsewhere" section with external profile links. The page header includes a "Download PDF" primary button and a "View JSON" secondary button.

### Contact Page
A two-column contact layout. The left column contains a large "Let's talk." headline, a subheading, three contact method cards (Email, LinkedIn, Tinybots), and an availability badge. The right column shows a dark teal "Opportunities" card listing five role types the owner is open to (Senior PM, Lead PM, Platform PM, AI PM, Product Consulting), each with a checkmark indicator, plus a footer link to the resume and a last-updated timestamp. A full-width note below the grid states the expected response time.

### Footer
A four-column footer present on every page. Columns contain: a bio blurb with an animated "Open to new roles" badge; a Work link list; a Thinking link list; and a Connect link list (LinkedIn, Twitter/X, GitHub, Email). A secondary footer row contains a copyright notice and links to Privacy, Terms, and Sitemap.

### Availability Indicator
An animated pulsing dot paired with an "Open to new roles" or "Currently open to new roles" label appears in multiple locations: the navbar CTA, the About page facts card, the resume page header, the contact page, and the footer. The dot animates between full and reduced opacity on a 2-second loop.

---

## User Flows

### 1. Visitor Discovers Owner and Reviews Work
1. Visitor lands on the homepage hero. They read the headline, body copy, and status chips.
2. They scan the metrics band for high-level credibility signals.
3. They scroll to the "What I've built" case study list and review the three featured projects.
4. They click "View all work →" in the section header, navigating to the Work index page.
5. On the Work page, they optionally select a filter pill (e.g., "AI") to narrow the project list.
6. They click an individual project row, navigating to the case study detail (link target not yet defined in mockups).
7. They scroll past the project list to the featured Tinybots block and may click "Visit Tinybots →".

### 2. Recruiter Reviews Resume
1. Recruiter arrives via the navbar or homepage, clicks "Resume" in the nav.
2. They land on the Resume page header, see the Download PDF and View JSON buttons, and observe the "Open to new roles" badge.
3. They read the experience role blocks in the left column.
4. They consult the skills and highlights in the right sidebar.
5. They click "Download PDF" to retrieve the resume file.
6. Alternatively, they click an "Elsewhere" link (LinkedIn, Email) to make contact.

### 3. Visitor Explores Thinking / Writing
1. Visitor clicks "Thinking" in the navbar or a "Read my thinking →" / "All writing →" link from any page.
2. They arrive at the About/Thinking page or an equivalent writing index (visible in the footer link list as "All Writing").
3. They browse the three-card grid, identify an article of interest, and click "Read →".
4. They navigate to the full article (target not shown in mockups).

### 4. Prospective Client or Employer Initiates Contact
1. Visitor clicks "Available for roles →" in the navbar, or a "Send an email" / "Let's work together" CTA visible on the About or Contact page.
2. They land on the Contact page, read the subheading, and review the three contact method cards.
3. They click the "Direct Email" card, which opens their mail client addressed to mike@himikemiller.com.
4. Alternatively, they click the LinkedIn card to navigate to the LinkedIn profile.
5. They observe the "Opportunities" card to confirm the types of roles the owner is seeking.
6. They note the "Response time is typically 24–48 hours" notice at the bottom of the page.

### 5. Visitor Explores Tinybots
1. Visitor clicks "Tinybots" in the navbar.
2. They land on the Tinybots hero. They read the headline, subheading, and browse the three product cards on the right side of the hero.
3. They click "Explore products →" to jump to the products section, or "Read the story →" to jump to the founder note section.
4. They review the values band and product list.
5. They click a product row's "Visit →" CTA to navigate to the respective product (external link implied, target not shown).
6. They scroll to the founder note, read the narrative, and follow the "Follow the journey →" link or click the bottom CTA ("See all products →").

---

## States and Variants

### Navigation Active State
The nav link corresponding to the current page renders in a darker charcoal color, distinguishing it from inactive muted-gray links.

### Filter Pill States (Work Page)
- **Default**: gray border, muted text.
- **Hover**: teal border, teal text.
- **Active/Selected**: teal fill, white text.
- When a filter is active and a project row does not match, that row is hidden. The visible rows are re-numbered sequentially starting from 01.

### Product Status Badges (Tinybots)
Three distinct states are shown:
- **Live**: green background, green text, animated pulsing dot.
- **Beta**: amber/yellow background, yellow text, static dot.
- **Coming Soon**: light gray background, muted text, no animation.

### Availability Indicator
An animated pulsing dot present across the site in the navbar CTA, page facts cards, resume header, contact page, and footer. The dot fades between 100% and 40% opacity on a 2-second infinite loop, signaling active availability.

### Hero Card (Homepage and AI page)
Two distinct card variants appear at the top of different pages:
- **Homepage**: displays identity (avatar, name, title), career statistics, and skill badges.
- **AI page**: displays a "Philosophy" label, four numbered principles, and skill badges.

### Hover Interactions
- **Case/project rows**: background fills to light gray; left/right padding expands to create an inset effect; the "Read →" / "View →" arrow increases its gap from the label text.
- **Thinking cards**: background shifts to a slightly darker off-white.
- **Principle cards (AI page)**: card lifts with a subtle box shadow and 2px upward translation.
- **Contact method cards**: border changes to teal, card lifts 1px, light teal shadow appears.
- **Navigation logo and links**: color transitions to teal on hover.
- **Footer links**: color transitions to teal on hover.
- **Hero product cards (Tinybots)**: card shifts 4px to the right.
- **Elsewhere links (Resume sidebar)**: card shifts 2px to the right, background fills teal-light.

### Sticky Sidebar (About and Resume pages)
At viewport widths above 1200px, the right column (facts card on About; skills/highlights/elsewhere on Resume) is sticky, remaining visible as the user scrolls the left content column. Below 1200px, the sidebar becomes static and stacks below the main content.

### Responsive / Mobile State
- Navigation links (Work, Thinking, Tinybots, Resume) are hidden below 768px; only the logo and "Available for roles" CTA remain visible.
- Multi-column grids (hero, metrics band, case list, thinking grid, footer, values, products) collapse to single or two-column layouts.
- The "Read →" / "View →" CTA column in case/project rows is hidden on mobile; the row uses a two-column grid (number + content only).
- The page headline on the Resume page reduces from 64px to 44px.

### Empty / Loading
No empty or loading states are depicted in the mockups. All content areas appear populated.

---

## Acceptance Criteria

### Global Navigation
- The user can click the "Mike Miller" logo from any page and return to the homepage.
- The user can navigate to Work, Thinking, Tinybots, and Resume from the navbar on any page.
- The system displays the current page's nav link in a visually distinct color (charcoal) compared to inactive links (muted gray).
- The system displays the navbar as sticky; it remains visible at the top of the viewport while the user scrolls.
- The user can click "Available for roles →" in the navbar and be directed to the Contact page.

### Homepage Hero
- The system displays the owner's status tag, headline, body copy, and specialty chips.
- The system displays the identity card with avatar, name, title, four career statistics, and skill badges.
- Each chip displays a hover state (teal fill with white text).

### Metrics Band
- The system displays four metrics (200k+ Users Scaled, 500+ Devs on Platform, 250 Enterprise Customers, 10 Countries) in a horizontal band below the hero.

### Case Study List
- The system displays at least three case study rows, each with a sequence number, title, tags, description, and a "Read →" link.
- The user can click any case study row and navigate to the corresponding detail page.
- On hover, each row displays the light-gray background fill and the "Read →" arrow gap widens.
- The user can click "View all work →" and navigate to the Work index page.

### Work Index and Filtering
- The system displays all five projects by default with "All" filter active.
- The user can click a filter pill to show only projects tagged with the matching category.
- After filtering, projects not matching the selected category are hidden.
- After filtering, visible rows are re-numbered sequentially starting from 01.
- The system displays a featured Tinybots block at the bottom of the Work page with three stat blocks.
- The user can click "Visit Tinybots →" in the featured block and navigate to the Tinybots page.

### AI & Workflows Page
- The system displays the hero with an "AI PM Philosophy" card listing four numbered principles.
- The system displays three principle cards (Discovery, Prioritization, Measurement) in a grid below the hero.
- The system displays a numbered list of three AI-related projects with tags and descriptions.
- The system displays a dark philosophy block with a pull quote.

### About Page
- The system displays the long-form bio in the left column.
- The system displays the "Quick Facts" card with Location, Focus, Currently, Open to, and Background fields.
- The "Currently" field displays an animated pulsing dot alongside the "Building Tinybots" value.
- The user can click "Download resume →" and initiate a file download.
- The user can click "View my work →" and navigate to the Work index page.
- The system displays three writing cards in a grid, each with a category label, title, description, date, and "Read →" link.
- The system displays a CTA band with "Let's work together" headline and two buttons: "Send an email" (mailto link) and "Connect on LinkedIn."

### Tinybots Page
- The system displays the hero with three product cards showing product name, one-line description, and a status badge (Live, Beta, or Coming Soon).
- Live badges display an animated pulsing dot; Beta badges display a static dot; Coming Soon badges show no animation.
- The system displays four value blocks in a grid.
- The user can click any product row and navigate to the product's destination.
- The system displays the founder note section with a portrait image, narrative paragraphs, and a signature block.
- The system displays a CTA band with "See all products →" and "Read the story →" links.

### Resume Page
- The system displays the page header with the owner's name, subtitle, and "Open to new roles" badge.
- The user can click "Download PDF" and initiate a PDF download.
- The user can click "View JSON" and navigate to a JSON version of the resume.
- The system displays four role blocks in the experience section, each with company name, date range, title, and bulleted accomplishments.
- The system displays an education block with degree name, institution, and year.
- The sidebar displays skills grouped into Product, Process, and Technical clusters.
- The sidebar displays four career highlight statistics in a 2×2 grid.
- The sidebar displays Elsewhere links to LinkedIn, GitHub, Tinybots, and Email.
- On viewports above 1200px, the sidebar remains sticky as the user scrolls the experience column.

### Contact Page
- The system displays three contact method cards: Direct Email, LinkedIn, and Tinybots.
- The user can click the Direct Email card and have their mail client open with mike@himikemiller.com pre-filled as the recipient.
- The user can click the LinkedIn card and navigate to the LinkedIn profile.
- The system displays the "Opportunities" card listing five role types with checkmark indicators.
- The system displays a "View my resume →" link in the opportunities card footer.
- The system displays a last-updated timestamp on the opportunities card.
- The system displays a response-time note ("typically 24–48 hours") below the main grid.
- The "Currently open to new roles" availability badge displays an animated pulsing dot.

### Writing / Thinking Cards
- The system displays each article card with a category label, title, description, date, and "Read →" link.
- The user can click any card or its "Read →" link and navigate to the full article.
- On hover, the card background changes to the defined hover shade.

### Footer
- The system displays the footer on every page with four columns: bio/badge, Work links, Thinking links, and Connect links.
- The user can navigate to any linked destination from the footer.
- The "Open to new roles" badge in the footer displays an animated pulsing dot.
- The footer displays a copyright notice and Privacy, Terms, and Sitemap links in the secondary row.