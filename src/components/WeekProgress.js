import React, { useEffect, useState } from 'react';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getInitialProductivity = () => {
  const storedProductivity = JSON.parse(localStorage.getItem('productivity'));
  if (storedProductivity) {
    return storedProductivity;
  }
  const initialProductivity = Array(7).fill(false);
  localStorage.setItem('productivity', JSON.stringify(initialProductivity));
  return initialProductivity;
};

export const WeekProgress = ({productivity}) => {
  
  return (
    <section className="weekProgress">
      {daysOfWeek.map((day, index) => (
        <div key={index} className="dayContainer">
          <span className="dayName">{day}</span>
          <div className="dayCircle">
            {productivity[index] && <i className="bi bi-check"></i>}
          </div>
        </div>
      ))}
    </section>
  );
};