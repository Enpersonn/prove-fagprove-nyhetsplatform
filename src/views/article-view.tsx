import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import ContentWrapper from "@/wrapper/content-wrapper";
import type { Article, Media } from "@/payload-types";
import ContentBlock from "@/components/article/content-block";
export default async function ArticleView({
  article,
  hasActiveSubscription,
}: {
  article: Article;
  hasActiveSubscription: boolean;
}) {
  return (
    <ContentWrapper>
      <div className="relative">
        {article.isPremium && !hasActiveSubscription && <ContentBlock />}
        <div className="flex flex-col gap-16">
          <header className="flex flex-col gap-8">
            <h1 className="text-4xl font-anton">{article.title}</h1>
            <RichText data={article.entry} />
          </header>
          {article.mainImage && (
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={(article.mainImage as Media).url ?? ""}
                alt={(article.mainImage as Media).alt ?? ""}
                width={930}
                height={620}
                className="w-full aspect-video object-cover"
              />
            </div>
          )}
          <article>
            {/* @ts-expect-error TODO: Fix this */}
            <RichText data={article.content} />
          </article>
        </div>
      </div>
    </ContentWrapper>
  );
}
