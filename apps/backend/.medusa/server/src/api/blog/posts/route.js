"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = POST;
const create_post_1 = require("../../../workflows/create-post");
async function POST(req, res) {
    const { result: post } = await (0, create_post_1.createPostWorkflow)(req.scope)
        .run({
        input: {
            title: "My Post",
        },
    });
    res.json({
        post,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2Jsb2cvcG9zdHMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFRQSxvQkFjQztBQWxCRCxnRUFFdUM7QUFFaEMsS0FBSyxVQUFVLElBQUksQ0FDeEIsR0FBa0IsRUFDbEIsR0FBbUI7SUFFbkIsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxNQUFNLElBQUEsZ0NBQWtCLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztTQUN6RCxHQUFHLENBQUM7UUFDSCxLQUFLLEVBQUU7WUFDTCxLQUFLLEVBQUUsU0FBUztTQUNqQjtLQUNGLENBQUMsQ0FBQTtJQUVKLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxJQUFJO0tBQ0wsQ0FBQyxDQUFBO0FBQ0osQ0FBQyJ9