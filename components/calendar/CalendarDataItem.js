import { useContext } from "react";

import Card from "../ui/Card";
import classes from "./CalendarDataItem.module.css";

function CalendarDataItem() {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.ass}</h3>
          <h2>{props.data}</h2>
          <h1>{props.contac}</h1>
          <p>{props.desc}</p>
        </div>
        <div className={classes.actions}>
          <button>
            "Detalhes"
          </button>
        </div>
      </Card>
    </li>
  );
}

export default CalendarDataItem;
