import React, { useEffect, useState } from 'react';
import ManageTable from '../ManageTable/ManageTable'

const ManageProduct = () => {
     const [events, setEvents] = useState([]);
     console.log(events)

     useEffect(() => {
       fetch("https://hidden-forest-76924.herokuapp.com/events")
         .then((res) => res.json())
         .then((data) => setEvents(data));
     }, []);
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {events.map((event) => (
            <ManageTable event={event} />
          ))}
        </table>
      </div>
    );
};

export default ManageProduct;