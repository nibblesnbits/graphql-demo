import LoadingScreen from "../LoadingScreen";
import createRouterFactory from "../Router/createRouterFactory";
import withRelay from "../Router/withRelay";
import HomeRoute from "./Home/route";
import BookRoute from "./Book/route";

export const routes = [HomeRoute, BookRoute];

const router = withRelay(createRouterFactory(true), routes, LoadingScreen);

export default router;
