import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage"; // 페이지 불러오기
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
