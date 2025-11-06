import { type RelayRoute } from "@/Router/withRelay";
import type { BookQuery } from "./__generated__/BookQuery.graphql";
import BookDetails from "@/components/BookDetails";

export default function BookPage({
  data: { node },
}: Readonly<RelayRoute<BookQuery>>) {
  return (
    <div>
      <h1>{node?.title}</h1>
      {node && <BookDetails book={node} />}
    </div>
  );
}
