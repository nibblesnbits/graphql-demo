import { type RelayRoute } from "@/Router/withRelay";
import type { BookQuery } from "./__generated__/BookQuery.graphql";
import BookDetails from "@/components/BookDetails";
import { useCharacterAddedSubscription } from "@/subscriptions/CharacterAdded";
import AddCharacterFormContainer from "@/components/AddCharacterFormContainer";

export default function BookPage({
  data: { book },
}: Readonly<RelayRoute<BookQuery>>) {
  useCharacterAddedSubscription(book!.id);

  return (
    <div>
      <h1>{book?.title}</h1>
      {book && <BookDetails book={book} />}

      <div>
        <h2>Add Character</h2>
        <AddCharacterFormContainer bookId={book!.id} />
      </div>
    </div>
  );
}
