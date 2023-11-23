---
to: src/modules/<%= h.changeCase.camel(moduleName) %>/index.ts
unless_exists: true
---
export * from './pages';

