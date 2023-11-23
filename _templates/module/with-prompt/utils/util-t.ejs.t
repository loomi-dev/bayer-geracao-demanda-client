---
to: src/modules/<%= h.changeCase.camel(moduleName) %>/utils/onlyNumbers.ts
unless_exists: true
---

export const onlyNumbers = (value: string) => value.replace(/\D/g, '');







