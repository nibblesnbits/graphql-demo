import { type RelayRoute } from "@/Router/withRelay";
import type { AuthorQuery } from "./__generated__/AuthorQuery.graphql";
import AuthorDetails from "@/components/AuthorDetails";

export default function AuthorPage({
  data: { author },
}: Readonly<RelayRoute<AuthorQuery>>) {
  return (
    <div>
      <h1>{author?.name}</h1>
      {author && <AuthorDetails author={author} />}
    </div>
  );
}
