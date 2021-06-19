import React from 'react';

const ListTable = ({ order }) => {
  return (
    <tbody>
      <tr>
        <th scope="row">{order.productName}</th>
        <td>{order.orderOwnerEmail}</td>
        <td>{order.quantity}</td>
        <td>@{order.price}</td>
        <td>@{order.orderTime}</td>
      </tr>
    </tbody>
  );
};

export default ListTable;