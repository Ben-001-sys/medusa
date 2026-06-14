"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPostWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const blog_1 = require("../modules/blog");
const createPostStep = (0, workflows_sdk_1.createStep)("create-post", async ({ title }, { container }) => {
    const blogModuleService = container.resolve(blog_1.BLOG_MODULE);
    const post = await blogModuleService.createPosts({
        title,
    });
    return new workflows_sdk_1.StepResponse(post, post);
}, async (post, { container }) => {
    if (!post) {
        return;
    }
    const blogModuleService = container.resolve(blog_1.BLOG_MODULE);
    await blogModuleService.deletePosts(post.id);
});
exports.createPostWorkflow = (0, workflows_sdk_1.createWorkflow)("create-post", (postInput) => {
    const post = createPostStep(postInput);
    return new workflows_sdk_1.WorkflowResponse(post);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXBvc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS1wb3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUswQztBQUMxQywwQ0FBNkM7QUFPN0MsTUFBTSxjQUFjLEdBQUcsSUFBQSwwQkFBVSxFQUMvQixhQUFhLEVBQ2IsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUEyQixFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUMxRCxNQUFNLGlCQUFpQixHQUFzQixTQUFTLENBQUMsT0FBTyxDQUFDLGtCQUFXLENBQUMsQ0FBQTtJQUUzRSxNQUFNLElBQUksR0FBRyxNQUFNLGlCQUFpQixDQUFDLFdBQVcsQ0FBQztRQUMvQyxLQUFLO0tBQ04sQ0FBQyxDQUFBO0lBRUYsT0FBTyxJQUFJLDRCQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO0FBQ3JDLENBQUMsRUFDRCxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUM1QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDVixPQUFNO0lBQ1IsQ0FBQztJQUNELE1BQU0saUJBQWlCLEdBQXNCLFNBQVMsQ0FBQyxPQUFPLENBQUMsa0JBQVcsQ0FBQyxDQUFBO0lBRTNFLE1BQU0saUJBQWlCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUM5QyxDQUFDLENBQ0YsQ0FBQTtBQUVZLFFBQUEsa0JBQWtCLEdBQUcsSUFBQSw4QkFBYyxFQUM5QyxhQUFhLEVBQ2IsQ0FBQyxTQUFrQyxFQUFFLEVBQUU7SUFDckMsTUFBTSxJQUFJLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBRXRDLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNuQyxDQUFDLENBQ0YsQ0FBQSJ9