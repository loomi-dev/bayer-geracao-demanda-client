---
to: src/modules/<%= h.changeCase.camel(moduleName) %>/pages/<%= h.changeCase.pascalCase(moduleName) %>Page.tsx
unless_exists: true
---

type <%= h.changeCase.pascalCase(moduleName) %>PageProps = Record<string, unknown>;

export const <%= h.changeCase.pascalCase(moduleName) %>= (props: <%= h.changeCase.pascalCase(moduleName) %>PageProps) => {
  return (
    <div {...props}>
      <h1><%= h.changeCase.pascalCase(moduleName) %>Page</h1>
    </div>
  );
};




