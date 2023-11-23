---
to: src/modules/<%= h.changeCase.camel(moduleName) %>/utils/index.ts
unless_exists: true
---

export * from './onlyNumbers';
