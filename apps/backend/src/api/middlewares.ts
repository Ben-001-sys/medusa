import { 
  defineMiddlewares,
  authenticate,
} from "@medusajs/framework/http"

export default defineMiddlewares({
  routes: [
    {
      matcher: "/manager",
      method: "POST",
      middlewares: [
        authenticate("manager", ["session", "bearer"], {
          allowUnregistered: true,
        }),
      ],
    },
    {
      matcher: "/manager/me*",
      middlewares: [
        authenticate("manager", ["session", "bearer"]),
      ],
    },
  ],
})