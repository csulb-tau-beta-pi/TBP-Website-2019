// Look at "BigCalender" documentation to learn more about its API

import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import myEventsList from "./EventsList";
import Footer from "../../components/Footer";

const localizer = BigCalendar.momentLocalizer(moment);

class Calender extends Component {
  render() {
    return (
      <div className="page">
        <div className="section-white">
          <div className="w-80">
            <div className="col-12 narrow text-center">
              <hr />
              <h2>
                The <span className="em1">Calendar</span>
              </h2>
              <hr />
              <br />
              <div style={{ height: 800 }}>
                <BigCalendar
                  localizer={localizer}
                  events={myEventsList}
                  step={60}
                  showMultiDayTimes
                  startAccessor="start"
                  endAccessor="end"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Calender;
