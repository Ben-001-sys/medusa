import {
  createWorkflow,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk"
import { useQueryGraphStep } from "@medusajs/medusa/core-flows" 

export const cacheProductsWorkflow = createWorkflow(
  "cache-products",
  () => {
    const { data: products } = useQueryGraphStep({
      entity: "product",
      fields: ["id", "title"],
      options: {
        cache: {
          enable: true,
          providers: ["caching-redis"],
        },
      },
    })

    return new WorkflowResponse(products)
  }
)