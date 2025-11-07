import AddBookFormContainer from "../../components/AddBookFormContainer";
import AddAuthorFormContainer from "../../components/AddAuthorFormContainer";

export default function Admin() {
  return (
    <div>
      <section>
        <h1>Create a New Book</h1>
        <AddBookFormContainer />
      </section>
      <hr />
      <section>
        <h1>Create a New Author</h1>
        <AddAuthorFormContainer />
      </section>
    </div>
  );
}
