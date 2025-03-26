import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import ContentWrapper from "@/wrapper/content-wrapper";
import type { Article, Media } from "@/payload-types";
import ContentBlock from "@/components/article/content-block";
export default async function ArticleView({ article }: { article: Article }) {
  return (
    <ContentWrapper>
      <div className="relative">
        {article.isPremium && <ContentBlock />}

        <h1 className="text-4xl font-bold">{article.title}</h1>
        <RichText data={article.entry} />
        {article.mainImage && (
          <Image
            src={(article.mainImage as Media).url ?? ""}
            alt={(article.mainImage as Media).alt ?? ""}
            width={930}
            height={620}
          />
        )}
        {/* @ts-expect-error TODO: Fix this */}
        <RichText data={article.content} />
      </div>
    </ContentWrapper>
  );
}
