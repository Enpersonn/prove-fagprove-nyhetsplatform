"use client";
import type { Article, Media } from "@/payload-types";
import ContentWrapper from "@/wrapper/content-wrapper";
import Image from "next/image";
import Link from "next/link";
export default function FrontPageView({ articles }: { articles: Article[] }) {
  return (
    <ContentWrapper>
      <div className="grid md:grid-cols-3 gap-4 pb-20">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/nyhet/${article.slug}`}
            className=" border hover:underline relative overflow-hidden"
          >
            {article.mainImage && (
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={(article.mainImage as Media).url ?? ""}
                  alt={(article.mainImage as Media).alt ?? ""}
                  width={930}
                  height={620}
                  className="object-cover"
                />
              </div>
            )}
            {article.isPremium && (
              <div className="absolute p-1 px-2 bg-muted font-bold top-1 right-0 text-sm ">
                Premium Nyhet
              </div>
            )}
            <div className="p-4">
              <h2 className="text-xl  font-anton">{article.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </ContentWrapper>
  );
}
