import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { audioPracticeApi } from "../services/audioPractice";
import { visualPracticeApi } from "../services/visualPractice";
import { momentApi } from "../services/moments";

export const store = configureStore({
  reducer: {
    [audioPracticeApi.reducerPath]: audioPracticeApi.reducer,
    [visualPracticeApi.reducerPath]: visualPracticeApi.reducer,
    [momentApi.reducerPath]: momentApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(audioPracticeApi.middleware)
      .concat(visualPracticeApi.middleware)
      .concat(momentApi.middleware), // Add this line for visualPracticeApi middleware
});

setupListeners(store.dispatch);
