---
to: src/modules/<%= h.changeCase.camel(moduleName) %>/hooks/use<%= h.changeCase.pascalCase(moduleName) %>.ts
unless_exists: true
---
import { Dispatch, SetStateAction, useState } from 'react';

type Use<%= h.changeCase.pascalCase(moduleName) %>Props = Record<string, unknown>;

type Use<%= h.changeCase.pascalCase(moduleName) %>Returns = {
  simpleState: string;
  setSimpleState: Dispatch<SetStateAction<string>>;
} & Record<string, unknown>

export const use<%= h.changeCase.pascalCase(moduleName) %> = (props: Use<%= h.changeCase.pascalCase(moduleName) %>Props):Use<%= h.changeCase.pascalCase(moduleName) %>Returns  => {
  const [simpleState, setSimpleState] = useState('');

  return {simpleState, setSimpleState, ...props}
};




