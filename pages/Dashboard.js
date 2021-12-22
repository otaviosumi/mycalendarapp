import React , { useState } from 'react'
import Calendar from 'react-calendar'
import "../styles/myCalendar.css";

function Dashboard() {

    const [value, onChange] = useState(new Date());

    return (
      <div className="content">
        <Calendar onChange={onChange} value={value} locale='pt-BR' />

        {value.toString()}
      </div>
    );
}

export default Dashboard
