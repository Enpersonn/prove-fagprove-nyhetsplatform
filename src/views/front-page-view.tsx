"use client";
import { Button } from "@/components/ui/button";
import type { Article } from "@/payload-types";
import Link from "next/link";

export default function FrontPageView({ articles }: { articles: Article[] }) {
  return (
    <div>
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 px-4">
        <div className="col-start-2 col-span-10 lg:col-start-3 lg:col-span-8">
          {articles.map((article) => (
            <Button asChild key={article.id}>
              <Link
                href={`/nyhet/${article.slug}`}
                className="my-4 p-4 w-full border rounded-md"
              >
                <h2 className="text-xl font-bold">{article.title}</h2>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
