import React from "react";
import ReactDOM from "react-dom/client"

  
  const parent = React.createElement(
      "div",
      {id:"parent"},
      [ React.createElement("div",{id:"child1"},
              [ React.createElement("h1",{},"i am an nested h1 element"),
                  React.createElement("h2",{},"i am an nested h2 element")
              ]),
          React.createElement("div",{id:"child2"},
              [ React.createElement("h1",{},"i am an nested h1 element"),
                  React.createElement("h2",{},"i am an nested h2 element")
              ])
      ]
  );
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(parent);
  
  