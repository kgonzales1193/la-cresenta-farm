import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import components
import Header from "./components/Header";
import Footer from "./components/Footer";

// import pages
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";
import Custom404 from "./pages/404";
import Rooms from "./pages/Rooms";
import Spa from "./pages/Spa";
import Restaurant from "./pages/Restaurant";
import About from "./pages/About";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/room/:id",
    element: <RoomDetails />,
  },
  {
    path: "*",
    element: <Custom404 />,
  },
  {
    path: "/rooms",
    element: <Rooms />,
  },
  {
    path: "/spa",
    element: <Spa />,
  },
  {
    path: "/restaurant",
    element: <Restaurant />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
