"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const createManagerStep = (0, workflows_sdk_1.createStep)("create-manager-step", async ({ manager: managerData }, { container }) => {
    const managerModuleService = container.resolve("manager");
    const manager = await managerModuleService.createManagers(managerData);
    return new workflows_sdk_1.StepResponse(manager);
});
const createManagerWorkflow = (0, workflows_sdk_1.createWorkflow)("create-manager", function (input) {
    const manager = createManagerStep({
        manager: input.manager,
    });
    (0, core_flows_1.setAuthAppMetadataStep)({
        authIdentityId: input.authIdentityId,
        actorType: "manager",
        value: manager.id,
    });
    return new workflows_sdk_1.WorkflowResponse(manager);
});
exports.default = createManagerWorkflow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLW1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUVBSzJDO0FBQzNDLDREQUFxRTtBQVlyRSxNQUFNLGlCQUFpQixHQUFHLElBQUEsMEJBQVUsRUFDbEMscUJBQXFCLEVBQ3JCLEtBQUssRUFDSCxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQStDLEVBQ3JFLEVBQUUsU0FBUyxFQUFFLEVBQ2IsRUFBRTtJQUNGLE1BQU0sb0JBQW9CLEdBQ3hCLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFL0IsTUFBTSxPQUFPLEdBQUcsTUFBTSxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFdkUsT0FBTyxJQUFJLDRCQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUNGLENBQUM7QUFFRixNQUFNLHFCQUFxQixHQUFHLElBQUEsOEJBQWMsRUFDMUMsZ0JBQWdCLEVBQ2hCLFVBQVUsS0FBaUM7SUFDekMsTUFBTSxPQUFPLEdBQUcsaUJBQWlCLENBQUM7UUFDaEMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO0tBQ3ZCLENBQUMsQ0FBQztJQUVILElBQUEsbUNBQXNCLEVBQUM7UUFDckIsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1FBQ3BDLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBRTtLQUNsQixDQUFDLENBQUM7SUFFSCxPQUFPLElBQUksZ0NBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdkMsQ0FBQyxDQUNGLENBQUM7QUFFRixrQkFBZSxxQkFBcUIsQ0FBQyJ9