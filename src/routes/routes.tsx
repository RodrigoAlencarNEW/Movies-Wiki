import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import MoviePage from "../pages/MoviePage";
import ErrorPage from "../pages/errorPage/ErrorPage";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/search", element: <SearchPage /> },
      { path: "/movies/:id", element: <MoviePage /> },
      { path: "/rank", element: <ErrorPage /> },
    ],
  },
]);
