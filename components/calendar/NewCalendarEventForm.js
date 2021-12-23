import React from 'react';
import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewCalendarEventForm.module.css";

function NewCalendarEventForm(props) {
  const dataInputRef = useRef();
  const assInputRef = useRef();
  const descInputRef = useRef();
  const contacInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredData = dataInputRef.current.value;
    const enteredAss = assInputRef.current.value;
    const enteredDesc = descInputRef.current.value;
    const enteredContac = contacInputRef.current.value;

    const calendarEventData = {
      data: enteredData,
      ass: enteredAss,
      desc: enteredDesc,
      contac: enteredContac,
    };

    console.log(calendarEventData);
    props.onAddCalendarEvent(calendarEventData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="ass">Assunto do Evento</label>
          <input type="text" required id="ass" ref={assInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="data">Data do Evento</label>
          <input type="date" required id="dataEv" ref={dataInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="contac">Contato</label>
          <input type="text" required id="contac" ref={contacInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Adicionar Evento</button>
        </div>
      </form>
    </Card>
  );
}

export default NewCalendarEventForm;
