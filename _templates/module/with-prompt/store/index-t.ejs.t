---
to: src/modules/<%= h.changeCase.camel(moduleName) %>/store/index.ts
unless_exists: true
---

export * from './use<%= h.changeCase.pascalCase(moduleName) %>Store';
