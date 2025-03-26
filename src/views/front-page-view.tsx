"use client";
import type { Article } from "@/payload-types";
import ContentWrapper from "@/wrapper/content-wrapper";
import Image from "next/image";
import Link from "next/link";
export default function FrontPageView({ articles }: { articles: Article[] }) {
  return (
    <ContentWrapper>
      <div className="grid grid-cols-3 gap-4">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/nyhet/${article.slug}`}
            className=" border hover:underline relative overflow-hidden"
          >
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
            {article.isPremium && (
              <div className="absolute  p-1 px-2  top-1 right-0 bg-background/95 text-sm ">
                Premium Nyhet
              </div>
            )}
            <div className="p-4">
              <h2 className="text-xl font-bold">{article.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </ContentWrapper>
  );
}
