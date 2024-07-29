import React from "react";
import ReactDOM from "react-dom/client"

 
// this code is now written in jsx

// const jsxHeading = (<h1 className="jsxHeading">This is JSX Heading</h1>);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// --------------------------------------------------------------

// React functional component

// const Title = () =>(
//     <h1>This is title component</h1>
//     );


// const HeadingComponent = () => (
//     <div id="container">
//         < Title />
//         {/* this is component composition */}
//         <h1>Namaste React Functional Component</h1>
//     </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />);


// koi bhi function jo react element ya jsx element return karega , functional component kahlayega --------------------------------------------------------------

// you can use any javascript thing in functional component inside { anything like var, function }

const Title = () => (
    <h1>This is title component</h1>
    );

const Para = () => (
    <p>this is para</p>
    );

const HeadingComponent = () => (
    
    <div id="container">
        {Title}
        {Para}
        <h1>Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
  
  