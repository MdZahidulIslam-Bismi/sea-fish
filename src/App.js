import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFount/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <div >
      <Header></Header>
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
        <Shop></Shop>
        </Route>
        <Route path='/shop'>
        <Shop></Shop>
        </Route>
        <Route path='/product/:pro'>
        <ProductDetail></ProductDetail>
        </Route>
        <Route path='/review'>
        <OrderReview></OrderReview>
        </Route>
        <Route path='/inventory'>
        <Inventory></Inventory>
        </Route>
        <Route path='*'>
        <NotFound ></NotFound>
        </Route>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
