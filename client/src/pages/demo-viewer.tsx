import { Link, useRoute } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useSEO } from "@/hooks/use-seo";
import { demos, getDemoBySlug } from "@/lib/demos";
import NotFound from "@/pages/not-found";

export default function DemoViewer() {
  const [, params] = useRoute("/demos/:slug");
  const slug = params?.slug ?? "";
  const demo = getDemoBySlug(slug);

  useSEO({
    title: demo ? `${demo.name} — Demo` : "Demo",
    description: demo?.description ?? "Live demo application",
  });

  if (!demo) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-[#0A0E1A]">
      <div className="flex items-center justify-between gap-4 px-6 sm:px-10 py-3 border-b border-white/[0.06] bg-[#0A0E1A]">
        <div className="flex items-center gap-4 min-w-0">
          <Link
            href="/demos"
            className="inline-flex items-center gap-1.5 text-[12px] text-white/60 hover:text-white"
            data-testid="link-back-to-demos"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All Demos
          </Link>
          <div className="hidden sm:flex flex-col min-w-0">
            <span className="text-[10px] uppercase tracking-[0.18em] text-[#C4A882]">
              {demo.company}
            </span>
            <span
              className="text-[13px] text-white truncate"
              data-testid="text-demo-viewer-name"
            >
              {demo.name}
            </span>
          </div>
        </div>
        <a
          href={demo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[12px] text-white/70 hover:text-white"
          data-testid="link-open-demo-new-tab"
        >
          Open in new tab
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
      <iframe
        src={demo.url}
        title={demo.name}
        className="flex-1 w-full border-0 bg-white"
        data-testid={`iframe-demo-${demo.slug}`}
        allow="clipboard-read; clipboard-write; fullscreen"
      />
    </div>
  );
}

export { demos };
