import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface StoreState {
  items: string[]; // General items
  filters: string[]; // Selected filters
  searchQuery: string; // Search query string
  setItems: (newItems: string[]) => void;
  setFilters: (newFilters: string[]) => void;
  setSearchQuery: (query: string) => void;
  addItem: (item: string) => void;
  removeItem: (item: string) => void;
  addFilter: (filter: string) => void;
  removeFilter: (filter: string) => void;
}

const useStore = create<StoreState>()(
  persist(
    (set) => ({
      items: [],
      filters: [],
      searchQuery: "",

      setItems: (newItems) => set({ items: newItems }),
      setFilters: (newFilters) => set({ filters: newFilters }),
      setSearchQuery: (query) => set({ searchQuery: query }),

      addItem: (item) =>
        set((state) => ({
          items: [...state.items, item],
        })),

      removeItem: (item) =>
        set((state) => ({
          items: state.items.filter((i) => i !== item),
        })),

      addFilter: (filter) =>
        set((state) => ({
          filters: [...state.filters, filter],
        })),

      removeFilter: (filter) =>
        set((state) => ({
          filters: state.filters.filter((f) => f !== filter),
        })),
    }),
    {
      name: "items-storage", // Name of the storage in localStorage
      storage: createJSONStorage(() => localStorage), // Use JSONStorage for proper handling
    }
  )
);

export default useStore;
