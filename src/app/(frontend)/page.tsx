import { headers as getHeaders } from "next/headers.js";
import { getPayload } from "payload";

import config from "@/payload.config";
import "./styles.css";

export default async function HomePage() {
  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user } = await payload.auth({ headers });

  const articles = await payload.find({
    collection: "article",
    limit: 10,
  });

  return (
    <div>
      <div className="bg-white size-8" />
      {articles.docs.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
        </div>
      ))}
    </div>
  );
}
