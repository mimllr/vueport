---
name: "Halletts Point"
type: "development"
description: "Web application for the Halletts Point project in Astoria, NY. Design by Conway + Partners."
order: 3
logo: "/images/halletts-point-hero.jpg"
liveDemoUrl: "https://www.hallettspoint.com/"
---

## Overview

I was contracted to build a landing page for the new Halletts Point project in Astoria, NY. Conway + Partners did the design of the site and handed off mobile, tablet, and desktop mockups with all assets. I built the site with Bootstrap v4, Google Maps Javascript API, and AWS on Ruby on Rails 5 deployed via Heroku.

![halletts-point-hero-shot](/images/halletts-point-hero.jpg)

## Requirements

I was given very few requirements, other than the mockup designs, and a few tweaks during development. This was a time-sensitive project, and the homepage needed to be deployed about 3 days after the assignment.
- Match designs from agency
- Collect inquiries through a form
- Upload/edit apartment listings
- Upload/edit press mentions

## Process

After assessing the initial requirements, I felt a Ruby on Rails application with Bootstrap would get the website up quickly and allow for additional features to be added later.

I built the entire homepage as a static page to start, making sure all content was populated before adding in dynamic components. Once all content and responsiveness was complete, I built a couple of quick scripts that would submit forms to a Google Sheet the client had access to.

Eventually, I added a PostgreSQL database and built a small CMS/Admin Panel to access form submissions and upload apartment listings and press content. Assets are uploaded to an Amazon S3 bucket.

## Results

The final website was deployed via Heroku pipelines, and eventually moved to a 3rd party host.

[Live Demo](https://www.hallettspoint.com/)
