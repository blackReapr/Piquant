import { create } from "zustand";

const useSidebar = create((set) => ({
  isSidebarActive: false,
  setIsSidebarActive: () =>
    set((state) => ({ isSidebarActive: !state.isSidebarActive })),
  disableSidebar: () => set((state) => ({ isSidebarActive: false })),
}));

export default useSidebar;
