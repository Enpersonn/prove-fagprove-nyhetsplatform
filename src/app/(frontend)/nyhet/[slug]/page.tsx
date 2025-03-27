import ArticleView from "@/views/article-view";
import { headers as getHeaders } from "next/headers.js";
import config from "@/payload.config";
import type { Subscription } from "@/payload-types";
import { notFound } from "next/navigation";
import { getPayload } from "payload";

export default async function NewsPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user } = await payload.auth({ headers });
  const hasActiveSubscription = user?.subscriptions?.some(
    (subscription) => (subscription as Subscription).isActive
  );
  const article = await payload.find({
    collection: "article",
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  });

  if (!article.docs.length) {
    notFound();
  }

  const articleData = {
    ...article.docs[0],
    content: article.docs[0].isPremium
      ? hasActiveSubscription
        ? article.docs[0].content
        : null
      : article.docs[0].content,
  };
  return (
    <ArticleView
      article={articleData}
      hasActiveSubscription={!!hasActiveSubscription}
    />
  );
}
