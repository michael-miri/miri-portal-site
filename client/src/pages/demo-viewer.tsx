import { useRoute } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { getDemoBySlug } from "@/lib/demos";
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
    <iframe
      src={demo.url}
      title={demo.name}
      className="fixed inset-0 w-screen h-screen border-0 bg-white"
      data-testid={`iframe-demo-${demo.slug}`}
      allow="clipboard-read; clipboard-write; fullscreen"
    />
  );
}
