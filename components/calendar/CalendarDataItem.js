import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

import Card from "../ui/Card";
import classes from "./CalendarDataItem.module.css";

function CalendarDataItem(props) {
  const history = useHistory();

  function removeCalendarEventHandler() {
    // let myKey = props.id;
    // console.log(myKey);

    fetch(
      "https://react-getting-started-edd51-default-rtdb.firebaseio.com/CalendarDataItems/" +
        props.id +
        ".json",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.push("/CalendarBoard");
    });
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h1>{props.key}</h1>
          <h1>{props.id}</h1>
          <h3>{props.ass}</h3>
          <h2>{props.data}</h2>
          <h1>{props.contac}</h1>
          <p>{props.desc}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={removeCalendarEventHandler}>"Remover"</button>
        </div>
      </Card>
    </li>
  );
}

export default CalendarDataItem;
