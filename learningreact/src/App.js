import logo from './logo.svg';
import './App.css';
import'./components/Item'
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';
import Products from './components/Products';
import NewProduct from './components/NewProduct';


const App=()=> {

  const products=[
    {
      id:"p1",
      title:"nirma",
      amount:"100",
      date:new Date(2021,7,10),
      
    },
    {
      id:"p2",
      title:"surf excel",
      amount:"200",
      date:new Date(2021,2,2),
      
    },
    {
      id:"p3",
      title:"tide",
      amount:"130",
      date:new Date(2021,12,28),
      
    },
    
  ]

  function printproductdata(data){
    console.log("i am inside app.js");
    console.log(data);
  }

  return (
    <div  className="App">
{/* <Card>
    <Item name={resp[0].itemname}>hello i am message from the custom html component tag in app.js props.children </Item>
    <ItemDate day="20" month="june" year="1998"></ItemDate>


    <Item name={resp[1].itemname}></Item>
    <ItemDate day={resp[1].itemdate} month={resp[1].itemmonth} year={resp[1].itemyear}></ItemDate>


    <Item name={resp[2].itemname}></Item>
    <ItemDate day={resp[2].itemdate} month={resp[2].itemmonth} year={resp[2].itemyear}></ItemDate>
    </Card>
     
    <div className="App">
      <h1>hello</h1>
    </div> */}


{/* function passing through prop */}
    <NewProduct printproduct={printproductdata}/> 
    <Products items={products}/>
    
    </div>
  );
}

export default App;
