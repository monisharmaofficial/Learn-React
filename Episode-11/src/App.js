import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
// import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
// import Grocery from "./component/Grocery";


const Grocery = lazy(()=> import("./component/Grocery"));

const About = lazy(()=> import("./component/About"));

// * Header
//   -logo
//   -Nav items
// * Body
//   -search
//   -RestaurantContainer
//   -RestaurantCard
//        -img
//        -cousine
//        -res-name
//        -res-rating
// * Footer
//   -Copyright
//   -Links
//   -Address
//   -Contact

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element:(<Suspense fallback={<h1>Loading About Page....</h1>}> <About /></Suspense>),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (<Suspense fallback={<h1>Loading Grocery Page....</h1>}><Grocery /></Suspense>),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
