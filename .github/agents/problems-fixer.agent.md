---
name: problems-fixer
description: "Use when: the user asks to inspect VS Code Problems/Diagnostics and apply fixes in this project."
# applyTo can be adjusted to restrict scope; this is project-wide.
applyTo:
  - "**/*.{js,jsx,ts,tsx,json,css,html,md}"
# Recommended trigger columns in the UI: "problems", "lint", "typecheck".
# This agent is optimized for the landing-page app in this workspace.

# Helpful context pointers for the assistant
mode: "repair"
summary: |
  This agent reads the diagnostics from VS Code Problems tab and fixes issues in the codebase. It prioritizes compile/lint errors, then warnings.

# Behavior hints
prompts:
  - "Review Problems tab and fix all blocking issues in src/components." 
  - "Resolve lint and type errors in the Vite React project."

# Optional constraints
toolPreferences:
  prefer:
    - "read_file"
    - "grep_search"
    - "replace_string_in_file"
    - "run_in_terminal"
  avoid:
    - "unbounded web search"
---
