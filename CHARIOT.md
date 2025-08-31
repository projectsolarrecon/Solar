```markdown
# Project Overview
- **Project**: The SOLAR Project Advocacy Blog - An advocacy blog site providing relevant, accurate, and timely information for sex offenders and their loved ones, advocating for their rights, and publishing a legal directory focused on their unique needs.
- **Tech Stack**: Not specified
- **Environment**: Not specified

# Theme, Style, and Vibe
- **Theme**: Professional
- **Style**: Clean, accessible layouts with a darker navy blue color scheme (slate-800/slate-900)
- **Vibe**: Supportive, informative, dignified, and respectful

# Conversation Context
- **Last Topic**: Not specified
- **Key Decisions**: Removed the "Financial Support" donate card from the advocacy page per user request, but saving it for potential future use.
- **User Context**:
  - Technical Level: Not specified
  - Preferences: Not specified
  - Communication: Not specified

# Implementation Status
## Current State
- **Active Feature**: Updated homepage with a "Get Involved" button linking to the new advocacy page
- **Progress**: Not specified
- **Blockers**: Not specified

## Code Evolution
- **Recent Changes**: 
  - Advocacy page includes ways to get involved, current campaigns, and calls to action for supporting the mission.
  - Created a condensed, user-friendly Federal Sex-Crime Process Guide covering all 8 stages from investigation to registration/supervised release, including family tips, checklists, and official resources. 
  - Updated the Resources page to link to this new guide format instead of the blog post. The guide includes print functionality, SEO optimization, and follows the established design system.

# Requirements
- **Implemented**: Not specified
- **In Progress**: Not specified
- **Pending**: Not specified
- **Technical Constraints**: Not specified

# Critical Memory
- **Must Preserve**: 
  - Individual bio format from the About page for future use, including:
    - Name
    - Role
    - Bio description
    - Image
    - Example structure:
      ```json
      {
        "name": "Sarah Johnson",
        "role": "Executive Director", 
        "bio": "Former public defender with 15+ years experience in criminal law and advocacy.",
        "image": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
      }
      ```
  - Legal Directory page format for future use, including:
    1. Header section with gradient background and description
    2. Search and filter section with white card containing:
       - Search by name/firm input
       - State dropdown filter
       - Specialty dropdown filter
       - Search button
    3. Attorney listings section with grid layout showing attorney cards containing:
       - Name, firm, location
       - Rating and reviews
       - Experience years
       - Description
       - Specialties as colored badges
       - Contact info (phone/email)
       - Contact and View Profile buttons
    4. Load More button
    5. Important Notice section with yellow warning styling
    6. Call to Action section for attorneys to join

    Attorney card structure includes: id, name, firm, location, phone, email, specialties array, experience, description, rating, reviews.
  - Contact method buttons format for later use, including:
    1. Email contact panel with:
       - Icon: 📧
       - Title: "Email Us"
       - Description: "General inquiries and information requests"
       - Contact: "info@solarproject.org"
       - Note: "We respond within 24-48 hours"
    2. Phone contact panel with:
       - Icon: 📞
       - Title: "Phone Support"
       - Description: "Speak with our support team"
       - Contact: "(555) 123-SOLAR"
       - Note: "Monday-Friday, 9 AM - 5 PM EST"
    Both panels used the same styling: text-center p-6 bg-gray-50 rounded-lg with consistent layout structure.
  - All form submissions throughout the site should send to projectsolarrecon@gmail.com with the originating page in the subject line.
  - Team Members Array Format for later use, including:
    - name: string
    - role: string  
    - bio: string
    - image: string (Pexels URL)

    Example team members:
    1. Sarah Johnson - Executive Director - "Former public defender with 15+ years experience in criminal law and advocacy." - https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400
    2. Michael Chen - Legal Director - "Constitutional law expert specializing in registry reform and civil rights." - https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400  
    3. Dr. Lisa Rodriguez - Research Director - "Criminologist and researcher focused on rehabilitation and recidivism prevention." - https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400

    The team section would typically display as a grid with individual bio cards showing photos, names, roles, and descriptions.
  - **Our Team** section format for later use, including:
    - Header: "Our Team" with subtitle "United by purpose, driven by compassion"
    - Two-column layout (lg:grid-cols-2) with text on left, image on right
    - Left column content:
      - H3: "A Team Built on Experience and Heart"
      - Multiple paragraphs describing team background, experience, and values
      - Content about former public defenders, researchers, advocates
      - Emphasis on combining legal expertise with lived experience
      - Focus on dignity, accurate information, and access to justice
    - Right column: Team collaboration image from Pexels
    - Background: bg-gray-50 py-16
    - Image: https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800
- **User Requirements**: Legal directory for specialized attorneys, resources for sex offenders and their loved ones
- **Known Issues**: Not specified

# Next Actions
- **Immediate**: Not specified
- **Future**: Not specified
```