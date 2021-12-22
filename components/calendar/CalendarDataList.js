import React from "react";
import CalendarDataItem from "./CalendarDataItem";
import classes from "./CalendarDataItem.module.css";

function CalendarDataList(props) {
  return (
    <ul className={classes.list}>
      {props.calendarEvents.map((calendarEvent) => (
        <CalendarDataItem
          key={calendarEvent.id}
          id={calendarEvent.id}
          data={calendarEvent.data}
          desc={calendarEvent.desc}
          ass={calendarEvent.ass}
          cont={calendarEvent.cont}
        />
      ))}
    </ul>
  );
}

export default CalendarDataList;
