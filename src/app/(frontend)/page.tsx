import { getPayload } from "payload";
import config from "@/payload.config";
import FrontPageView from "@/views/front-page-view";

export default async function HomePage() {
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });

  const articles = await payload.find({
    collection: "article",
    limit: 12,
  });

  return <FrontPageView articles={articles.docs} />;
}
