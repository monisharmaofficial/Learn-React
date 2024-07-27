//create element using js
// const h2 = document.createElement('h2')
// h2.innerText = 'Hello JS'
// document.querySelector('#root').append(h2)

// create element using react
// const h2 = React.createElement('h2',{className:'subheading',id:'subtitle'}, 'Hello React')

// const root = ReactDOM.createRoot(document.querySelector('#root'))

// root.render(h2)



const container = React.createElement(
    'div',
    { className: "container", id: "container" },
    [
      React.createElement(
        "h3",
        { className: "heading", id: "heading" },
        "Heading Element"
      ),
      React.createElement("section", {key : 1}, [
        React.createElement("p",{}, "this is a paragraph"),
  
        React.createElement('img',{key:2, style:{width:'400px'}, src: 'https://images.pexels.com/photos/16720495/pexels-photo-16720495/free-photo-of-man-with-a-fishing-rod-on-a-shore-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'})
  
      ]),
    ]
  );
  
  const root = ReactDOM.createRoot(document.querySelector('#root'))
  
  root.render(container)
  