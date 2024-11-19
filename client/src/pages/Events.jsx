import React, { useState, useEffect } from "react";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import "../styles/Events.css";

const EventsPage = () => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    // Fetch events from the API
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/events");
        const data = await response.json();
        setEventsData(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <div className="container">
        {/* Header */}
        <div className="events-header">
          <h1>Discover Our Events</h1>
          <p>
            From immersive digital experiences to intimate artist meetings,
            explore our curated selection of unique art events.
          </p>
        </div>
        <br />
        {/* Events Grid */}
        <div className="grid">
          {eventsData.map((event) => (
            <div key={event._id} className="eventcard">
              <div className="cardContent">
                <div>
                  <h2 className="cardTitle">{event.title}</h2>
                  <p className="cardDescription">{event.description}</p>
                </div>
                <div>
                  <div>
                    <Calendar className="icon" />
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                  <div>
                    <Clock className="icon" />
                    {event.time}
                  </div>
                  <div>
                    <MapPin className="icon" />
                    {event.location}
                  </div>
                  <div>
                    <Users className="icon" />
                    Capacity: {event.capacity}
                  </div>
                </div>
                <div className="cardDetails">
                  <span>{event.price}</span>
                  <button className="cardButton">Register</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
