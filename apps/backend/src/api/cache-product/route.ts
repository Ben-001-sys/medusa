import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { cacheProductsWorkflow } from "../../workflows/cache-products"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const { result } = await cacheProductsWorkflow(req.scope)
    .run({})

  res.status(200).json(result)
}