import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';


const Home = () => {
  const [events, setEvents] = useState([]);

  // Load data from database
  useEffect(() => {
    fetch("https://hidden-forest-76924.herokuapp.com/events")
      .then(res => res.json())
      .then(data => setEvents(data))
  }, [])
  
  return (
    <div className="container">
      <div className="row">
        {/* Used event component */}
        {events.map((event) => (
          <Event event={event}></Event>
        ))}
      </div>
    </div>
  );
};

export default Home;