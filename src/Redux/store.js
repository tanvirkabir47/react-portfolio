import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { ProjectData } from '../services/ProjectData'

export const store = configureStore({
  reducer: {
    [ProjectData.reducerPath]: ProjectData.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProjectData.middleware),
})
setupListeners(store.dispatch)