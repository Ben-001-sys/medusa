import {
  loadEnv,
  defineConfig,
  Modules,
  ContainerRegistrationKeys,
} from "@medusajs/framework/utils";

loadEnv(process.env.NODE_ENV || "development", process.cwd());

module.exports = defineConfig({
  admin: {
    disable: process.env.DISABLE_MEDUSA_ADMIN === "true",
    backendUrl: process.env.MEDUSA_BACKEND_URL,
  },
  projectConfig: {
    workerMode: process.env.MEDUSA_WORKER_MODE as "shared" | "worker" | "server",
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
  },
  plugins: [
    {
      resolve: "medusa-plugin-wishlist",
      options: {},
    },
  ],
  modules: [
    {
      resolve: "./src/modules/blog",
    },
    {
      resolve: "./src/modules/manager",
    },
    // {
    //   resolve: "@medusajs/medusa/analytics",
    //   options: {
    //     providers: [
    //       {
    //         resolve: "@medusajs/analytics-posthog",
    //         id: "posthog",
    //         options: {
    //           posthogEventsKey: process.env.POSTHOG_EVENTS_API_KEY,
    //           posthogHost: process.env.POSTHOG_HOST,
    //         },
    //       },
    //     ],
    //   },
    // },
    {
      resolve: "@medusajs/medusa/caching",
      options: {
        providers: [
          {
            resolve: "@medusajs/caching-redis",
            id: "caching-redis",
            // Optional, makes this the default caching provider
            is_default: true,
            options: {
              redisUrl: process.env.CACHE_REDIS_URL,
              // more options...
            },
          },
          // other caching providers...
        ],
      },
    },
  ],
});
