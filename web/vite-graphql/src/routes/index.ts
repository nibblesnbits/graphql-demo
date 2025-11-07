import LoadingScreen from "../LoadingScreen";
import createRouterFactory from "../Router/createRouterFactory";
import withRelay from "../Router/withRelay";
import HomeRoute from "./Home/route";
import BooksRoute from "./Books/route";
import AuthorsRoute from "./Authors/route";
import BookRoute from "./Book/route";

export const routes = [HomeRoute, BooksRoute, AuthorsRoute, BookRoute];

const router = withRelay(createRouterFactory(true), routes, LoadingScreen);

export default router;
