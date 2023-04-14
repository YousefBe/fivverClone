import { useState } from "react";
import Navbar from "./components/Globals/Navbar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./Pages/home/Home.jsx";
import Gigs from "./Pages/gigs/Gigs.jsx";
import MyGigs from "./Pages/myGigs/MyGigs";
import MyOrders from "./Pages/myOrders/MyOrders";
import Messages from "./Pages/messages/Messages";
import Message from "./Pages/message/Message";
import Add from "./Pages/gig/add/Add";
import Gig from "./Pages/gig/Gig";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/my-gigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <MyOrders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
