import React from 'react';
import OrderList from './OrderLIst/OrderList';
import InsertProduct from './InsertProduct/InsertProduct'
import './Inventory.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Inventory = () => {
    return (
        <div className='inventory'>
            <div>
                <h1>side Nave</h1>
            </div>
            <div>
            <Router>
                <Switch>
                    <Route path='/inventory/orderlist'>
                      <OrderList></OrderList>
                    </Route>
                    <Route path='/inventory/insertproduct'>
                      <InsertProduct></InsertProduct>
                    </Route>
                </Switch>
            </Router>
            </div>

        </div>

    )};

export default Inventory;

