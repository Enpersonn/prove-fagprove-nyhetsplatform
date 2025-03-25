import { useParams } from "next/navigation";
import { getPayload } from "payload";
import config from "@/payload.config";
import payloadConfig from "@/payload.config";

export default async function NewsPage({
  params,
}: {
  params: { slug: string };
}) {
  const payload = await getPayload({ config: payloadConfig });
  const article = await payload.find({
    collection: "article",
    where: {
      slug: {
        equals: params.slug,
      },
    },
    limit: 1,
  });
  const articleData = article.docs[0];
  return (
    <div>
      <h1>{articleData.title}</h1>
    </div>
  );
}
