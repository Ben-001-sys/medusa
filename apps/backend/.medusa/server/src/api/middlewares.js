"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("@medusajs/framework/http");
exports.default = (0, http_1.defineMiddlewares)({
    routes: [
        {
            matcher: "/manager",
            method: "POST",
            middlewares: [
                (0, http_1.authenticate)("manager", ["session", "bearer"], {
                    allowUnregistered: true,
                }),
            ],
        },
        {
            matcher: "/manager/me*",
            middlewares: [
                (0, http_1.authenticate)("manager", ["session", "bearer"]),
            ],
        },
    ],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBR2lDO0FBRWpDLGtCQUFlLElBQUEsd0JBQWlCLEVBQUM7SUFDL0IsTUFBTSxFQUFFO1FBQ047WUFDRSxPQUFPLEVBQUUsVUFBVTtZQUNuQixNQUFNLEVBQUUsTUFBTTtZQUNkLFdBQVcsRUFBRTtnQkFDWCxJQUFBLG1CQUFZLEVBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxFQUFFO29CQUM3QyxpQkFBaUIsRUFBRSxJQUFJO2lCQUN4QixDQUFDO2FBQ0g7U0FDRjtRQUNEO1lBQ0UsT0FBTyxFQUFFLGNBQWM7WUFDdkIsV0FBVyxFQUFFO2dCQUNYLElBQUEsbUJBQVksRUFBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDL0M7U0FDRjtLQUNGO0NBQ0YsQ0FBQyxDQUFBIn0=