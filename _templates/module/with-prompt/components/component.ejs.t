---
to: src/modules/<%= h.changeCase.camel(moduleName) %>/components/<%= h.changeCase.pascalCase(moduleName) %>/<%= h.changeCase.pascalCase(moduleName) %>.tsx
unless_exists: true
---

type <%= h.changeCase.pascalCase(moduleName) %>Props = Record<string, unknown>;

export const <%= h.changeCase.pascalCase(moduleName) %>= (props: <%= h.changeCase.pascalCase(moduleName) %>Props) => {
  return (
    <div {...props}>
      <h1><%= h.changeCase.pascalCase(moduleName) %></h1>
    </div>
  );
};




