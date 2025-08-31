# SOLAR Project Blog Template Guide

## Overview
All blog posts should use the standardized `BlogTemplate` component to ensure consistent formatting, styling, and SEO optimization across the entire blog.

## Basic Usage

```tsx
import BlogTemplate, { 
  BlogSection, 
  BlogParagraph, 
  BlogQuote, 
  BlogHighlight, 
  BlogLink,
  BlogList,
  BlogTable 
} from "../components/BlogTemplate";

function YourBlogPost() {
  return (
    <BlogTemplate
      title="Your Blog Post Title"
      description="A compelling description for SEO and social sharing"
      keywords="keyword1, keyword2, keyword3, relevant tags"
      publishDate="2024-12-19"
      readTime="8 min read"
      category="Policy Analysis" // Optional: defaults to "Policy Analysis"
      tags={["Tag 1", "Tag 2", "Tag 3"]} // Optional
    >
      {/* Your blog content goes here */}
      <BlogSection title="Introduction">
        <BlogParagraph>
          Your introduction paragraph with consistent styling...
        </BlogParagraph>
      </BlogSection>

      <BlogSection title="Main Content">
        <BlogParagraph>
          Regular paragraph with <BlogLink href="https://example.com">external link</BlogLink> styling.
        </BlogParagraph>

        <BlogHighlight title="Key Points" color="blue">
          <BlogList items={[
            "Important point 1",
            "Important point 2", 
            "Important point 3"
          ]} />
        </BlogHighlight>

        <BlogQuote author="Optional Author">
          "This is a highlighted quote with proper styling."
        </BlogQuote>
      </BlogSection>
    </BlogTemplate>
  );
}

export default YourBlogPost;
```

## Component Reference

### BlogTemplate (Main Wrapper)
**Props:**
- `title` (required): The blog post title
- `description` (required): SEO description
- `keywords` (required): Comma-separated keywords for SEO
- `publishDate` (required): Publication date (e.g., "December 2024")
- `readTime` (required): Estimated reading time (e.g., "8 min read")
- `category` (optional): Category badge (defaults to "Policy Analysis")
- `tags` (optional): Array of tag strings

### BlogSection
Creates a major section with consistent heading styling.
```tsx
<BlogSection title="Section Title">
  {/* Section content */}
</BlogSection>
```

### BlogParagraph
Standard paragraph with consistent typography.
```tsx
<BlogParagraph>
  Your paragraph text here...
</BlogParagraph>
```

### BlogQuote
Highlighted quote box with blue styling.
```tsx
<BlogQuote author="Optional Author Name">
  "Your quote text here"
</BlogQuote>
```

### BlogHighlight
Colored highlight boxes for important information.
```tsx
<BlogHighlight title="Box Title" color="blue|green|yellow|red">
  <BlogList items={["Item 1", "Item 2"]} />
</BlogHighlight>
```

**Color Options:**
- `blue`: General highlights, key points
- `green`: Positive information, success stories, resources
- `yellow`: Warnings, important notes, cautions
- `red`: Critical information, problems, urgent issues

### BlogLink
External links with consistent styling and proper attributes.
```tsx
<BlogLink href="https://example.com">Link text</BlogLink>
```

### BlogList
Bulleted lists with consistent spacing.
```tsx
<BlogList items={[
  "List item 1",
  "List item 2",
  "List item 3"
]} />
```

### BlogTable
Data tables with consistent styling.
```tsx
<BlogTable 
  headers={["Column 1", "Column 2", "Column 3"]}
  rows={[
    ["Row 1 Col 1", "Row 1 Col 2", "Row 1 Col 3"],
    ["Row 2 Col 1", "Row 2 Col 2", "Row 2 Col 3"]
  ]}
/>
```

## Style Guidelines

### Typography Hierarchy
- **H1**: Blog post title (handled by template)
- **H2**: Major sections (use `BlogSection`)
- **H3**: Subsections (use `BlogSubsection` or manual h3)
- **Body**: Use `BlogParagraph` for consistent spacing

### Color Usage
- **Blue**: Primary color for links, general highlights, key information
- **Green**: Positive information, resources, success stories, helpful tips
- **Yellow**: Warnings, important notes, things to be aware of
- **Red**: Critical issues, problems, urgent information

### Link Guidelines
- All external links use `BlogLink` component
- Internal links use React Router `Link` component
- All external links include `target="_blank"` and `rel="noopener noreferrer"`

### Content Structure
1. **Introduction section**: Set context and preview main points
2. **Main content sections**: Break into logical, digestible sections
3. **Conclusion**: Summarize key takeaways
4. **Resources/Sources**: When applicable, list key references

## SEO Best Practices

### Title
- Keep under 60 characters
- Include primary keyword
- Make it compelling and descriptive

### Description
- 150-160 characters optimal
- Include primary keyword naturally
- Write for humans, not just search engines

### Keywords
- 5-10 relevant keywords/phrases
- Include variations and related terms
- Separate with commas

### Content
- Use headings to structure content
- Include internal links to other SOLAR Project pages
- Cite authoritative sources with external links
- Write for readability (short paragraphs, clear language)

## Example Categories
- "Policy Analysis"
- "Legal Updates" 
- "Research Findings"
- "Personal Stories"
- "Resource Guides"
- "News & Commentary"

## Example Tags
- "Registry Reform"
- "Legal Rights"
- "Recidivism Research"
- "Constitutional Law"
- "Public Safety"
- "Human Rights"
- "Criminal Justice"
- "Evidence-Based Policy"

## File Naming Convention
- Use PascalCase for component names
- File names should match the component name
- Place in `/src/pages/blog/` directory
- Example: `RethinkingRegistry.tsx`

## Routing
Remember to add new blog posts to the blog routing in `App.tsx`:
```tsx
<Route path="/blog/your-post-slug" element={<YourBlogPost />} />
```

And update the blog listing page to include the new post.

## Final Checklist
- [ ] Uses BlogTemplate wrapper
- [ ] Includes all required props
- [ ] Uses consistent typography components
- [ ] External links use BlogLink component
- [ ] Proper color coding for highlights
- [ ] SEO-optimized title, description, keywords
- [ ] Added to routing
- [ ] Added to blog listing page
- [ ] Tested for responsive design
- [ ] Checked for accessibility