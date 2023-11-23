---
to: src/modules/<%= h.changeCase.camel(moduleName) %>/components/<%= h.changeCase.pascalCase(moduleName) %>/index.ts
unless_exists: true
---

export * from './<%= h.changeCase.pascalCase(moduleName) %>';
