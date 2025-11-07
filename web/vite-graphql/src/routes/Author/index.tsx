import { type RelayRoute } from "@/Router/withRelay";
import type { AuthorQuery } from "./__generated__/AuthorQuery.graphql";
import AuthorDetails from "@/components/AuthorDetails";
import AddBookFormContainer from "@/components/AddBookFormContainer";

export default function AuthorPage({
  data: { author },
}: Readonly<RelayRoute<AuthorQuery>>) {
  return (
    <div>
      <h1>{author?.name}</h1>
      {author && <AuthorDetails author={author} />}

      <hr />
      <div>
        <h3>Add Book</h3>
        <AddBookFormContainer authorId={author?.id} />
      </div>
    </div>
  );
}
