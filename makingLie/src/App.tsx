import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage"; // 페이지 불러오기
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import TestPage from "./pages/TestPage";
import ResultPage from "./pages/ResultPage";
import SimulationPage from "./pages/SimulationPage";
import HonestChoice from "./pages/HonestChoice";
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
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
