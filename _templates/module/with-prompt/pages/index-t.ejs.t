---
to: src/modules/<%= h.changeCase.camel(moduleName) %>/pages/index.ts
unless_exists: true
---

export * from './<%= h.changeCase.pascalCase(moduleName) %>Page';
