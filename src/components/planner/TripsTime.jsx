import React from 'react'

export default function TripsTime( {origin, destination }) {
    const today = new Date(origin);
    const time = today.toLocaleTimeString("nl-NL").slice(0, 5);
    const today2 = new Date(destination);
    const time2 = today2.toLocaleTimeString("nl-NL").slice(0, 5);

  return (
    <p>{time} - {time2}</p>
  )
}
