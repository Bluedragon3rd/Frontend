import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage"; // 페이지 불러오기
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import TestPage from "./pages/TestPage";
import ResultPage from "./pages/ResultPage";
import SimulationPage from "./pages/SimulationPage";
import HonestChoice from "./pages/HonestChoice";
import MinigamePage from "./pages/MinigamePage";
import GamePage from "./pages/GamePage";
import GameResultPage from "./pages/GameResultPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "first-step",
    element: <FirstPage />,
  },
  {
    path: "second-step",
    element: <SecondPage />,
  },
  {
    path: "test",
    element: <TestPage />,
  },
  {
    path: "result",
    element: <ResultPage />,
  },
  {
    path: "simulation",
    element: <SimulationPage />,
  },
  {
    path: "honest",
    element: <HonestChoice />,
  },
  {
    path: "minigame",
    element: <MinigamePage />,
  },
  {
    path: "game",
    element: <GamePage />,
  },
  {
    path: "game-result",
    element: <GameResultPage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
