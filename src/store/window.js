import { INITIAL_Z_INDEX, WINDOW_CONFIG } from '#constants/index.js'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer';


const useWindowStore = create(immer ((set) => ({
  windows : WINDOW_CONFIG,
  nextZIndex: INITIAL_Z_INDEX + 1,
  openWindow: (windowKey  , data = null) => set((state) => {
      const windowToOpen = state.windows[windowKey];
      if (!windowToOpen) return;
      windowToOpen.isOpen = true;
      windowToOpen.data = data;
      windowToOpen.zIndex = state.nextZIndex;
      state.nextZIndex += 1;
  }),
  closeWindow: (windowKey) => set((state) => {
    const windowToClose = state.windows[windowKey];
      windowToClose.isOpen = false;
      windowToClose.zIndex = INITIAL_Z_INDEX
      windowToClose.data = null;
}),
  focusWindow: (windowKey) => set((state) => {
    const windowToFocus = state.windows[windowKey];
    windowToFocus.zIndex= state.nextZIndex += 1;
  })
}))
)

export default useWindowStore;