import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Studio } from "./Studio";
import { Button } from "@/components/ui/button";
import { isSanityConfigured } from "@/lib/cms";

export const dynamic = "force-static";
export { metadata } from "next-sanity/studio/metadata";
export { viewport } from "next-sanity/studio/viewport";

function StudioSetupState() {
  return (
    <div className="min-h-screen bg-background px-4 py-16 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 rounded-3xl border border-border/50 bg-card/60 p-8 shadow-sm backdrop-blur sm:p-10">
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary/80">Sanity Studio</p>
          <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            后台已接入，但还没有绑定真实 Sanity 项目
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            当前代码和 Studio 路由已经可用，但本地还缺少真实的 Sanity project id / token 配置。先完成
            Sanity 账户侧的 organization 与 project 创建，再把项目凭据写入本地环境即可进入可编辑后台。
          </p>
        </div>

        <div className="rounded-2xl border border-border/50 bg-background/70 p-5">
          <p className="mb-3 text-sm font-medium text-foreground">下一步</p>
          <ol className="space-y-2 text-sm leading-6 text-muted-foreground">
            <li>1. 在 Sanity 后台创建一个 organization 与 project</li>
            <li>2. 在本地 `.env.local` 写入 `NEXT_PUBLIC_SANITY_PROJECT_ID`</li>
            <li>3. 补上 `SANITY_API_WRITE_TOKEN` 用于内容迁移</li>
            <li>4. 把 `http://localhost:3001` 加到项目 CORS 后重新打开 `/studio`</li>
          </ol>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            className="w-full sm:w-auto"
            render={
              <a href="https://www.sanity.io/manage" target="_blank" rel="noreferrer" />
            }
            nativeButton={false}
          >
            打开 Sanity Manage
            <ExternalLink className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto" render={<Link href="/" />} nativeButton={false}>
            返回前台首页
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function StudioPage() {
  if (!isSanityConfigured) {
    return <StudioSetupState />;
  }

  return <Studio />;
}
