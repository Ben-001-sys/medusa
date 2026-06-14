"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20260613210836 = void 0;
const migrations_1 = require("@medusajs/framework/mikro-orm/migrations");
class Migration20260613210836 extends migrations_1.Migration {
    async up() {
        this.addSql(`create table if not exists "post" ("id" text not null, "title" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "post_pkey" primary key ("id"));`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_post_deleted_at" ON "post" ("deleted_at") WHERE deleted_at IS NULL;`);
    }
    async down() {
        this.addSql(`drop table if exists "post" cascade;`);
    }
}
exports.Migration20260613210836 = Migration20260613210836;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNjA2MTMyMTA4MzYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9ibG9nL21pZ3JhdGlvbnMvTWlncmF0aW9uMjAyNjA2MTMyMTA4MzYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUVBQXFFO0FBRXJFLE1BQWEsdUJBQXdCLFNBQVEsc0JBQVM7SUFFM0MsS0FBSyxDQUFDLEVBQUU7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLDRQQUE0UCxDQUFDLENBQUM7UUFDMVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxR0FBcUcsQ0FBQyxDQUFDO0lBQ3JILENBQUM7SUFFUSxLQUFLLENBQUMsSUFBSTtRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLHNDQUFzQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztDQUVGO0FBWEQsMERBV0MifQ==