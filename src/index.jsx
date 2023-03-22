import React from 'react'
import ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client'
/*
//ReactDOM.render(<h1>Testing</h1>, document.getElementById('root'));

//with jsx

const var1 = <h1>I LOVE JSX</h1>;

const root1 = createRoot(document.getElementById('root'));
root1.render(var1);

//without jsx

const myElement = React.createElement('h6', {}, 'I do not use JSX!');

const root2 = ReactDOM.createRoot(document.getElementById('root'));
root2.render(myElement);

//expressions

const myElement1 = <h1>React is {5 + 5} times better with JSX</h1>;

const root3 = createRoot(document.getElementById('root'));
root3.render(myElement1);

//block of HTML

const myElement3 = (
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>
  );
  
  const root4 = ReactDOM.createRoot(document.getElementById('root'));
  root4.render(myElement3);

//parent element or one top level

const elements = (
    <body>
<div>
        <p> P1 </p>
        <p> p2 </p>
    </div>
    <div>

    </div>
    </body>
    
);

const root5 = ReactDOM.createRoot(document.getElementById('root'));
  root5.render(elements);

//fragments

const el = (
    <>
        <h1>Hello</h1>
        <h3>world</h3>
    </>
);

const root6 = ReactDOM.createRoot(document.getElementById('root'));
root6.render(el);

//elements must be closed

const emt = <input type="text" />

const root7 = ReactDOM.createRoot(document.getElementById('root'));
root7.render(emt);

//class name

const classel = <h1 className="myclass">Hello World</h1>;

const root8 = ReactDOM.createRoot(document.getElementById('root'));
root8.render(classel);

//id name

const idel = <h1 id="hel">hi there</h1>;

const root9 = ReactDOM.createRoot(document.getElementById('root'));
root9.render(idel);

//if statement

const x = 5;
let text = "Greater than 10";
if (x < 10) {
  text = "Less than 10";
}

const ifel = <h1>{text}</h1>;

const root10 = ReactDOM.createRoot(document.getElementById('root'));
root10.render(ifel);


//ternary operator

const y = 6;

// const var2 = <h1>{ (x) < 5 ? "less than ten" : "the value is ten" }</h1>;
// const root11 = ReactDOM.createRoot(document.getElementById('root'));
// root11.render(var2);

//loops

function Apple() {
  const products = ['orange', 'apple', 'watermelon', 'Banana'];

  const list = []

  for (const [i, product] of products.entries()) {
    list.push(<li>{product}</li>)
  }

  return (
    <div>
      {list}
    </div>
  )
}

function App() {
  const seasons = ["Spring", "Summer", "Autumn", "Winter"];

  let seasonsList = [];

  seasons.forEach((season, index) => {
    seasonsList.push(<li key={index}>{season}</li>);
  });

  return (
    <div>
      <h2>Seasons of the year</h2>
      <ul>{seasonsList}</ul>
    </div>
  );
}


function App2() {
  const seasons = ["Springs", "Summers", "Autumns", "Winters"];

  return (
    <div>
      <h2>Seasons of the year</h2>
      <ul>
        {seasons.map((season) => (
          <li key={season.id}>{season}</li>
        ))}
      </ul>
    </div>
  );
}


const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];


function getFullName(item) {
  return [item.firstname,item.lastname].join(" ");
}
persons.map(getFullName);

// const loope = <h1>{text}</h1>;

*/
/*
function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
  return (
    <>
	    <h1>Who lives in my garage?</h1>
	    <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}*/

function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = ['Toyota', 'Volks', 'Nissan'];
  return (
    <>
	    <h1>Who lives in my garage?</h1>
	    <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
      <My />
    </>
  );
}

function My () {
  const hello = this.h1("Hello there");
  return (
    <h1>{hello}</h1>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
