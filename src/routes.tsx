import { createBrowserRouter } from "react-router-dom";
import GameDetailsPage from "./pages/GameDetailsPage.tsx";
import GameLayout from "./pages/GameLayout.tsx";
import HomePage from "./pages/HomePage.tsx";
import MainLayout from "./pages/MainLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "/games/:slug",
    element: <GameLayout />,
    children: [{ index: true, element: <GameDetailsPage /> }],
  },
]);
export default router;
