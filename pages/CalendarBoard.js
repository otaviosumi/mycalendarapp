import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";

import NewCalendarEventForm from "../components/calendar/NewCalendarEventForm";
import CalendarDataList from "../components/calendar/CalendarDataList";

function CalendarBoard() {
  const [value, setValue] = React.useState(new Date());
  const [isLoading, setIsLoading] = useState(true);
  const [loadedEvents, setLoadedEvents] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-edd51-default-rtdb.firebaseio.com/CalendarDataItems.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const calendarEvents = [];

        for (const key in data) {
          const calendarEvent = {
            id: key,
            ...data[key],
          };

          calendarEvents.push(calendarEvent);
        }

        setIsLoading(false);
        setLoadedEvents(calendarEvents);
      });
  }, []);

  function addCalendarEventHandler(calendarEventData) {
    fetch(
      "https://react-getting-started-edd51-default-rtdb.firebaseio.com/CalendarDataItems.json",
      {
        method: "POST",
        body: JSON.stringify(calendarEventData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/CalendarBoard");
    });
  }

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <div className="content-fill">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          openTo="day"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <div className="content-fill">
        <h1>Add New Event</h1>
        <NewCalendarEventForm onAddCalendarEvent={addCalendarEventHandler} />
      </div>

      <div className="calendarDataContent">
        <CalendarDataList calendarEvents={loadedEvents} />
      </div>
    </div>
  );
}

export default CalendarBoard;
