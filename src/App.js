import React, {useState} from 'react';
import './App.css';
import Header from './header';
import Card from './createcard';
import Cards from './cards';

function App() {
  const [additem,setadditem] = useState([]);
  const addnote = (note) => {
   setadditem((olddata) => {
       return [...olddata,note];
   });
  };
  const onDelete = (id) => {
        setadditem((oldd) => 
        oldd.filter((curdata,indx) =>{
          return indx !== id;
        }) 
        )        
  };
  return (
    <>
       <Header />
       <Card passnote = {addnote}/>
       {additem.map((val,index) => {
            return  <Cards 
             key = {index}
             id = {index}
             title = {val.title}
             content = {val.content}
             deleteitem = {onDelete}
            />
       })}
       </>
       );
}
export default App;
