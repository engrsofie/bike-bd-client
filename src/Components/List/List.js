import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ListTable from '../ListTable/ListTable'

const List = () => {
     const [loggedInUser, setLoggedInUser] = useContext(UserContext);
     const [orders, setOrders] = useState([]);
     console.log(orders);

     useEffect(() => {
       fetch("https://hidden-forest-76924.herokuapp.com/orderList?email=" + loggedInUser.email, {
         method: "GET",
         headers: {
           "Content-Type": "application/json",
         },
       })
         .then((res) => res.json())
         .then((data) => setOrders(data));
     }, []);
    return (
      <div className="container">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Email</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Order Time</th>
            </tr>
          </thead>
          {orders.map((order) => (
            <ListTable order={order} />
          ))}
        </table>
      </div>
    );
};

export default List;
