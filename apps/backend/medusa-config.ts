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
    {
      resolve: "@medusajs/medusa/analytics",
      options: {
        providers: [
          {
            resolve: "@medusajs/analytics-posthog",
            id: "posthog",
            options: {
              posthogEventsKey: process.env.POSTHOG_EVENTS_API_KEY,
              posthogHost: process.env.POSTHOG_HOST,
            },
          },
        ],
      },
    },
    // {
    //   resolve: "@medusajs/medusa/caching",
    //   options: {
    //     providers: [
    //       {
    //         resolve: "@medusajs/caching-redis",
    //         id: "caching-redis",
    //         // Optional, makes this the default caching provider
    //         is_default: true,
    //         options: {
    //           redisUrl: process.env.CACHE_REDIS_URL,
    //           // more options...
    //         },
    //       },
    //       // other caching providers...
    //     ],
    //   },
    // },
    {
      resolve: "@medusajs/medusa/file",
      options: {
        providers: [
          {
            resolve: "@medusajs/medusa/file-s3",
            id: "s3",
            options: {
              file_url: process.env.S3_FILE_URL,
              access_key_id: process.env.S3_ACCESS_KEY_ID,
              secret_access_key: process.env.S3_SECRET_ACCESS_KEY,
              region: process.env.S3_REGION,
              bucket: process.env.S3_BUCKET,
              endpoint: process.env.S3_ENDPOINT,
            },
          },
        ],
      },
    },
    {
      resolve: "@medusajs/medusa/notification",
      options: {
        providers: [
          // ...
          {
            resolve: "@medusajs/medusa/notification-sendgrid",
            id: "sendgrid",
            options: {
              channels: ["email"],
              api_key: process.env.SENDGRID_API_KEY,
              from: process.env.SENDGRID_FROM,
            },
          },
        ],
      },
    },
  //   {
  //     resolve: "@medusajs/medusa/event-bus-redis",
  //     options: { 
  //       redisUrl: process.env.EVENTS_REDIS_URL,
  //       // suggested additional options for production use
  //       jobOptions: {
  //         removeOnComplete: {
  //           // keep jobs for 1 hour or up to 1000 jobs
  //           age: 3600,
  //           count: 1000,
  //         },
  //         removeOnFail: {
  //           // keep jobs for 1 hour or up to 1000 jobs
  //           age: 3600,
  //           count: 1000,
  //         },
  //       },
  //     },
  //   },
  //   {
  //     resolve: "@medusajs/medusa/workflow-engine-redis",
  //     options: {
  //       redis: {
  //         redisUrl: process.env.WE_REDIS_URL,
  //         // ...other Redis options
  //       },
  //     },
  //   },
  //  {
  //     resolve: "@medusajs/medusa/locking",
  //     options: {
  //       providers: [
  //         {
  //           resolve: "@medusajs/medusa/locking-redis",
  //           id: "locking-redis",
  //           // set this if you want this provider to be used by default
  //           // and you have other Locking Module Providers registered.
  //           is_default: true,
  //           options: {
  //             redisUrl: process.env.LOCKING_REDIS_URL,
  //           },
  //         },
  //       ],
  //     },
  //   },
  ],
});
