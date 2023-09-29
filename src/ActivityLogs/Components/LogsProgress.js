import React from "react";
import { Steps } from "antd";
import LogsCard from "./LogsCard";
import { useContext } from 'react';
import { AppContext } from '../../AppContext';


function LogsProgress() {
  const { formatDate, data , t } = useContext(AppContext);

  const transitEventsByDay = data.TransitEvents.reduce((acc, event) => {
    const { date } = formatDate(event.timestamp);
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(event);
    return acc;
  }, {});

  const items = Object.entries(transitEventsByDay)
    .sort(([dateA], [dateB]) => new Date(dateB) - new Date(dateA))
    .map(([date, events]) => {
      const formattedEvents = events
        .sort((eventA, eventB) => new Date(eventB.timestamp) - new Date(eventA.timestamp))
        .map((event) => (
          <LogsCard title={t(event.state)} time={`${formatDate(event.timestamp).time} ${t(formatDate(event.timestamp).meridiem)}`} />
        ));
      return {
        title: <span className="ActivityLogHeader">{date}</span>,
        description: <>{formattedEvents}</>,
      };
    });

  return (
    <Steps
      progressDot
      className="items-start flex-col w-70vw"
      direction="vertical"
      current={-1}
      items={items}
    />
  );
}

export default LogsProgress;


