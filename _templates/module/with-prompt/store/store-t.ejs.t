---
to: src/modules/<%= h.changeCase.camel(moduleName) %>/store/use<%= h.changeCase.pascalCase(moduleName) %>Store.tsx
unless_exists: true
---
import create from 'zustand';


type use<%= h.changeCase.pascalCase(moduleName) %>StoreType = {
  bears: number;
  increasePopulation: (by: number) => void;
  removeAllBears: () => void;
}

export const use<%= h.changeCase.pascalCase(moduleName) %>Store = create<use<%= h.changeCase.pascalCase(moduleName) %>StoreType>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))




