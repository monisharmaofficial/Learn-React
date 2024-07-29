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
//       <title/>
//         <h1>Namaste React Functional Component</h1>
//     </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />);


// koi bhi function jo react element ya jsx element return karega , functional component kahlayega --------------------------------------------------------------

// you can use any javascript thing in functional component inside { anything like var, function }

const Title = () => (
    <h3>This is title component</h3>
    );

const Para = () => (
    <p>this is para</p>
    );

    const Amann =() =>(
        <div className="ClassName">
            <div id="box">b1</div>
            <div id="box">b2</div>
            <div id="box">b3</div>
            <div id="box">b4</div>
            <div id="box">b5</div>
        </div>
    )

const HeadingComponent = () => (
    
    <div id="container">
    
        <h1>Namaste React Another component</h1>
        <Title/>
        <Para/>
         <Amann></Amann>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
  
  