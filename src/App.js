import logo from './logo.svg';
import './App.css';
import Landscape from './pages/landscape';
import Login from './component/Login';
import Signup from './component/Signup';
import PrimarySearchAppBar from './component/header';
import Book from './component/book';
import Dashboard from './pages/dashboard';
import Description from './component/description';
import Cart from './component/Cart';
import Router1 from './component/Router/router';
import Customer_Details from './component/Customer_Details';
import Order from './component/Order';
import Order_placed from './component/Order_placed';
import WhishList from './component/WhishList';
import PaginationRounded from './pages/Pagination';


function App() {
  return (
    <div className="App">
    
      {/* <Landscape/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <PrimarySearchAppBar /> */}
      {/* <Book/> */}
      {/* <Dashboard/> */}
      {/* <Description/> */}
      {/* <Cart/> */}
      {/* <Customer_Details /> */}
      {/* <Order/> */}
      <Router1/>
      {/* <Order_placed/> */}
      {/* <WhishList/> */}
      {/* <PaginationRounded/> */}
      


    </div>
  );
}

export default App;
