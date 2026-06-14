"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = POST;
const utils_1 = require("@medusajs/framework/utils");
const create_manager_1 = __importDefault(require("../../workflows/create-manager"));
async function POST(req, res) {
    // If `actor_id` is present, the request carries 
    // authentication for an existing manager
    if (req.auth_context.actor_id) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Request already authenticated as a manager.");
    }
    const { result } = await (0, create_manager_1.default)(req.scope)
        .run({
        input: {
            manager: req.body,
            authIdentityId: req.auth_context.auth_identity_id,
        },
    });
    res.status(200).json({ manager: result });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpL21hbmFnZXIvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFhQSxvQkFzQkM7QUEvQkQscURBQXVEO0FBQ3ZELG9GQUFrRTtBQVEzRCxLQUFLLFVBQVUsSUFBSSxDQUN4QixHQUE0QyxFQUM1QyxHQUFtQjtJQUVuQixpREFBaUQ7SUFDakQseUNBQXlDO0lBQ3pDLElBQUksR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QixNQUFNLElBQUksbUJBQVcsQ0FDbkIsbUJBQVcsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUM5Qiw2Q0FBNkMsQ0FDOUMsQ0FBQTtJQUNILENBQUM7SUFFRCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxJQUFBLHdCQUFxQixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7U0FDdEQsR0FBRyxDQUFDO1FBQ0gsS0FBSyxFQUFFO1lBQ0wsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJO1lBQ2pCLGNBQWMsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLGdCQUFnQjtTQUNsRDtLQUNGLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUE7QUFDN0MsQ0FBQyJ9