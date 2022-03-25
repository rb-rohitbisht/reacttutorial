// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Header} from './components/Header';
import Cheader from './components/Cheader';
import Channel from './components/Channel';
import FunctionClick from './components/FunctionClick';
import CfunctionClick from './components/CfunctionClick';
// const name = <span>Bisht</span>
// const test=()=>{
//   alert("welcome babe");
// }
// const age =(a)=> {
//   if(a>18){
//   alert (' you are elgiable')}
//   else{
//     alert ('you are not elgiable ')
//   }
// }
// const newElement = React.createElement("h1",{className:'newElement'},'create tag without jsx');
// function App() {
//   return (
//     <div className="App">
      

//       <h1>Hello Rohit,{name}</h1>
//       {newElement}
//       <button onClick={test}></button>
//       <button onClick={age(87)}></button>
      
//     </div>
//   );
// }
class App extends React.Component
{
  render()
{
return ( 
<div className='App'>

<Cheader name ='suraj'/>
<Header name='rohit'/>
<Header name='ravi'>
<p>very good boy</p>
</Header>

<Header name='vinod'>
<a href="https://www.w3schools.com/react/react_props.asp">click</a>
</Header>
<Channel/>
<FunctionClick/>
<CfunctionClick/>

<h1>hello</h1>


</div>
);
}  }
  

export default App;
