---
to: src/modules/<%= h.changeCase.camel(moduleName) %>/hooks/index.ts
unless_exists: true
---

export * from './use<%= h.changeCase.pascalCase(moduleName) %>';
