# SOLAR Agent Rules

This repository powers The SOLAR Project site. Agents working in this repo must preserve existing live publishing paths and avoid introducing duplicate systems unless explicitly instructed.

## Project priorities

1. Preserve the current live publishing system.
2. Add automation and consistency around the current system.
3. Avoid unnecessary refactors.
4. Avoid deleting legacy files unless they are clearly confirmed safe to remove.
5. Keep changes phone-friendly, low-risk, and easy to review.

## User constraints

The user is working:
- solely from an Android phone
- with no console access
- on mobile data
- without a traditional developer environment

The user is not a programmer and prefers:
- ELI5 explanations
- both the why and the how
- clear distinction between:
  - already exists / keep using
  - modify existing
  - new
  - clean up later

## Canonical publishing paths

### Blog posts
Current canonical blog workflow:
1. Create or update the page file in `src/pages/blog/`
2. Add the route in `src/App.tsx`
3. Add the metadata entry at the top of `src/data/blogPosts.ts`

Do not invent a second blog publishing system unless explicitly asked.

### Resource guides
Current canonical guide workflow:
1. Create or update the page file in `src/pages/resources/`
2. Add the route in `src/App.tsx`
3. Add the resource card entry in `src/pages/Resources.tsx`

Do not invent a second guide publishing system unless explicitly asked.

### Legislative Tracker
Current canonical tracker workflow:
1. Create or update the dated page in `src/pages/resources/legislative-tracker/`
2. Add the metadata object in `src/data/legislativeUpdates.ts`
3. Keep the existing tracker hub structure intact

### Accountability Watch
Current Accountability Watch path:
1. Create a new dated page under `src/pages/resources/accountability-watch/`
2. Keep the existing index/date route structure intact

## Routing and structure rules

- Treat `src/App.tsx` as active and canonical, even if it is messy.
- Do not perform major routing refactors unless explicitly requested.
- Do not replace existing live route patterns with new abstractions unless there is a clear reason and explicit approval.
- Prefer minimal edits over clever rewrites.

## Anti-drift rules

When helping with content or publishing:
- preserve SOLAR tone
- preserve canonical paths
- do not invent new directory structures
- do not invent alternate metadata systems
- do not silently change naming conventions midstream
- do not replace existing working systems just because a different pattern looks cleaner

When helping with repo cleanup:
- identify likely redundancy
- distinguish between:
  - harmless but unused
  - confusing and redundant
  - safe to remove now
  - leave alone until later
- default to caution

## SOLAR tone and style

SOLAR content should generally be:
- evidence-based
- readable and direct
- morally clear without being sloppy
- practical when written as a guide
- incisive when written as analysis or commentary
- strongly sourced
- internally linked to related SOLAR content where useful

Avoid:
- generic filler
- vague motivational language
- sterile institutional tone
- unsupported claims
- overcomplicated structure

## Working style for agents

When proposing changes:
- explain what is being changed
- explain why it matters
- state whether the change is:
  - existing / keep using
  - modify existing
  - new
  - clean up later

When uncertainty exists:
- say so clearly
- prefer a minimal safe change
- avoid speculative cleanup

## Current GitHub control layer

The repo now contains a GitHub control layer under `.github/` with:
- issue forms
- workflows
- content-planning automations

Agents should build on this system rather than duplicating it.

## Immediate workflow priorities

The current operating cadence is:

### Weekly
- at least 1 blog post per week
- target publishing window: weekend

### Monthly
- at least 1 evergreen guide advanced or published
- 1 Accountability Watch roundup
- 1 Legislative Tracker roundup

Agents should support this cadence.

## Safety rule for changes

Before making any substantial repo change, ask:
1. Is this using the existing live publishing path?
2. Is this adding clarity or adding duplication?
3. Is this safe for a phone-only workflow?
4. Is this necessary now, or should it be clean-up-later?

Default to the safer path.