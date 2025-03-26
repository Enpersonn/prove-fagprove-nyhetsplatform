import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import ContentWrapper from "@/wrapper/content-wrapper";
import type { Article } from "@/payload-types";
export default async function ArticleView({ article }: { article: Article }) {
  return (
    <ContentWrapper>
      <div className="relative ">
        {article.isPremium && (
          <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-background via-background/80 to-transparent z-10 flex items-center justify-center">
            <div className="text-foreground text-center text-2xl font-bold">
              Premium innhold
            </div>
          </div>
        )}

        <h1 className="text-4xl font-bold">{article.title}</h1>
        <RichText data={article.entry} />
        {article.mainImage && (
          <Image
            //@ts-expect-error TODO: Fix this
            src={article.mainImage.url}
            //@ts-expect-error TODO: Fix this
            alt={article.mainImage.alt}
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
