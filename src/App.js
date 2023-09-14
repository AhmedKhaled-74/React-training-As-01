import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Suspense, lazy } from "react";
import Home from "./Components/Home/Home.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import Loading from "./Components/Loading/Loading.jsx";
const About = lazy(() => import("./Components/About/About.jsx"));
const Portfolio = lazy(() => import("./Components/Portfolio/Portfolio.jsx"));
const Contact = lazy(() => import("./Components/Contact/Contact.jsx"));
const Notfound = lazy(() => import("./Components/Notfound/Notfound.jsx"));

function App() {
  const routers = createBrowserRouter([
    {
      path: "",
      element: <Layout></Layout>,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loading></Loading>}>
              <Home></Home>
            </Suspense>
          ),
        },
        {
          path: "about",
          element: (
            <Suspense fallback={<Loading></Loading>}>
              <About></About>{" "}
            </Suspense>
          ),
        },
        {
          path: "portfolio",
          element: (
            <Suspense fallback={<Loading></Loading>}>
              <Portfolio></Portfolio>{" "}
            </Suspense>
          ),
        },
        {
          path: "contact",
          element: (
            <Suspense fallback={<Loading></Loading>}>
              <Contact></Contact>{" "}
            </Suspense>
          ),
        },
        {
          path: "*",
          element: (
            <Suspense fallback={<Loading></Loading>}>
              <Notfound></Notfound>{" "}
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={routers}></RouterProvider>;
}

export default App;
