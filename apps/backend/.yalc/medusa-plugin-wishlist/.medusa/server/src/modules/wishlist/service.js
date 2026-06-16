"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const wishlist_1 = require("./models/wishlist");
const wishlist_item_1 = require("./models/wishlist-item");
class WishlistModuleService extends (0, utils_1.MedusaService)({
    Wishlist: wishlist_1.Wishlist,
    WishlistItem: wishlist_item_1.WishlistItem,
}) {
}
exports.default = WishlistModuleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3dpc2hsaXN0L3NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBeUQ7QUFDekQsZ0RBQTRDO0FBQzVDLDBEQUFxRDtBQUVyRCxNQUFxQixxQkFBc0IsU0FBUSxJQUFBLHFCQUFhLEVBQUM7SUFDL0QsUUFBUSxFQUFSLG1CQUFRO0lBQ1IsWUFBWSxFQUFaLDRCQUFZO0NBQ2IsQ0FBQztDQUFHO0FBSEwsd0NBR0sifQ==