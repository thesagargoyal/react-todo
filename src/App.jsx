import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App = () => {

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
      setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
        return [...oldItems, inputList];
    });
    setInputList("");
  };

  return (
    <>
    <div className="main_div">
        <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text" placeholder="Add Item" onChange={ itemEvent } value={ inputList } />
        <button onClick={ listOfItems }>+</button>
        <ol>
          {/* Array Name  */}
          {Items.map( (itemval, index) => {
            //return <li> {itemval} </li>
            return <ToDoList key={ index } id ={ index } text = { itemval } />
          })}
        </ol>
      </div>
    </div>
    </>
  );

};

export default App;

// <div className="main_div">
//         <div className="center_div">
//           <br />
//           <h1 className="heading">ToDo List</h1>
//           <br />
//           <div className="main">
//             <div className="adder">
//             <input type="text" placeholder="Add Items" className="input" />
//             &nbsp;
//             &nbsp;
//             <button className="btn">+</button>
//             </div>
//             <div className="content">
//               <ol>
//                 <li>Buy Apple</li>
//               </ol>
//             </div>
//           </div>
//         </div>
//       </div>
