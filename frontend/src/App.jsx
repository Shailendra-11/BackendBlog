import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LoginSignup from "./pages/Login"
import Add from "./pages/Add"
import MainLouyt from "./Compnents/MainLayout";
import Update from "./pages/Update"
import List from "./pages/List";
import NotFound from "./pages/NotFound"
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLouyt />,
      children: [
        {
          index: true,
          element: <List />,
        },
        {
          index: "add",
          element: <Add/>,
        },
        {
          path: "update",
          element: <Update />,
        },

        {
          path: "*",
          element: <NotFound/>,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginSignup />,
    },


  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App