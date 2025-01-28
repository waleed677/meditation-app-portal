import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { audioPracticeApi } from "../services/audioPractice";
import { visualPracticeApi } from "../services/visualPractice";
import { momentApi } from "../services/moments";
import { authApi } from "../services/auth";
import { practicesApi } from "../services/practices";
import { resourcesApi } from "../services/resources";
import { resourcesArticlesApi } from "../services/resourcesArticles";
import { usersApi } from "../services/users";

export const store = configureStore({
  reducer: {
    [audioPracticeApi.reducerPath]: audioPracticeApi.reducer,
    [visualPracticeApi.reducerPath]: visualPracticeApi.reducer,
    [momentApi.reducerPath]: momentApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [practicesApi.reducerPath]: practicesApi.reducer,
    [resourcesApi.reducerPath]: resourcesApi.reducer,
    [resourcesArticlesApi.reducerPath]: resourcesArticlesApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(audioPracticeApi.middleware)
      .concat(visualPracticeApi.middleware)
      .concat(momentApi.middleware) // Add this line for visualPracticeApi middleware
      .concat(authApi.middleware)
      .concat(practicesApi.middleware)
      .concat(resourcesApi.middleware)
      .concat(resourcesArticlesApi.middleware)
      .concat(usersApi.middleware),
});

setupListeners(store.dispatch);
