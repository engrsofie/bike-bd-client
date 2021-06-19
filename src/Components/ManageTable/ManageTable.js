import React from 'react';

const ManageTable = ({ event }) => {

  const handleDelete = (id)=>{
    fetch(`https://hidden-forest-76924.herokuapp.com/deleteBook/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          console.log("Deleted");
        }
      });
  }
  return (
    <tbody>
      <tr>
        <td>{event.name}</td>
        <td>{event.price}</td>
        <td>
          <button className="btn btn-primary mx-2">Edit</button>
          <button
            onClick={() => handleDelete(event._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default ManageTable;