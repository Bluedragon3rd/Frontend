import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage"; // 페이지 불러오기
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
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
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
