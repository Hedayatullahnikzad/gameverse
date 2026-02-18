import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import GameLayout from "./pages/GameLayout.tsx";
import GameDetailsPage from "./pages/GameDetailsPage.tsx";
import MainLayout from "./pages/MainLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <Homepage /> }],
  },
  {
    path: "/games/:slug",
    element: <GameLayout />,
    children: [{ index: true, element: <GameDetailsPage /> }],
  },
]);
export default router;
