import React from "react";
import Img from "../img/img";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "../cards/cards";
import EventCard from "../eventcard/eventcard";
import "font-awesome/css/font-awesome.min.css";

const Home = () => {
  return (
    <div className="App">
      <div classNameName="App ">
        {/* <div className='absolute-icon'></div> */}
        <div className="my-4"></div>

        <Img />

        <div className="my-4"></div>
        <Cards />

        <div className="my-4"></div>

        <h1>Upcoming Events</h1>
        <div className="event-container">
          <EventCard
            title="Event 1"
            date="May 15, 2023"
            location="City A"
            description="Join us for Event 1 in City A."
          />
          <EventCard
            title="Event 2"
            date="June 5, 2023"
            location="City B"
            description="Don't miss Event 2 in City B."
          />
          <EventCard
            title="Event 3"
            date="July 20, 2023"
            location="City C"
            description="Experience Event 3 in City C."
          />
          <EventCard
            title="Event 4"
            date="August 10, 2023"
            location="City D"
            description="Get ready for Event 4 in City D."
          />
        </div>
      </div>

    </div>
  );
};

export default Home;
