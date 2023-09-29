import React from "react";
import { Steps } from "antd";
import LogsCard from "./LogsCard";
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import moment from 'moment';

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
    .sort(([dateA], [dateB]) => moment(dateB, 'DD/MM/YYYY') - moment(dateA, 'DD/MM/YYYY'))
    .map(([date, events]) => {
      const formattedEvents = events
        .sort((eventA, eventB) => moment(eventB.timestamp, 'DD/MM/YYYY HH:mm:ss') - moment(eventA.timestamp, 'DD/MM/YYYY HH:mm:ss'))
        .map((event) => (
          <LogsCard key={event.timestamp} title={t(event.state)} time={`${formatDate(event.timestamp).time} ${t(formatDate(event.timestamp).meridiem)}`} />
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
