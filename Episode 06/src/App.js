import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";

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
    return(
        <div className="app">
            <Header/>
           <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
  
  