# SOLAR Mobile Delivery Standard

## User constraint

The user works primarily from a phone with limited clipboard capacity. Final deliverables must be structured for reliable mobile copying without requiring repeated reminders.

## Locked handoffs

Unless the user requests another format, every final locked handoff must be returned as exactly four sequentially labeled plain-text code blocks.

Requirements:

- Put `PASTE SNIPPET 1 OF 4` through `PASTE SNIPPET 4 OF 4` inside the blocks.
- State that all four snippets form one controlling handoff.
- Balance content reasonably across the four blocks.
- Preserve exact order and continuity.
- Do not omit or duplicate content at boundaries.
- Do not place substantive commentary between blocks.

The content division may vary by length, but a normal blog handoff should separate metadata and architecture, sources and production notes, and approved prose across the four blocks.

## Full TSX files

Unless the user requests another format, return every full TSX page as exactly four sequentially labeled, concatenation-safe `tsx` code blocks.

Requirements:

- Put the snippet label in a harmless code comment inside each block.
- Include the target repository path in snippet 1.
- Split only at safe line boundaries.
- Never split a token, string literal, URL, JSX tag, JSX expression, or comment across blocks.
- Pasting snippets 1–4 consecutively without modification must produce the exact complete file.
- Validate the combined file as the syntactically complete unit.
- Never use placeholders such as `rest unchanged`, `continue existing code`, or omitted sections.

The individual snippets are source segments, not independently compilable files.

## Companion snippets

After the four main-file snippets, return smaller companion items separately, including imports, routes, metadata objects, collection-definition changes, and a short checklist.
