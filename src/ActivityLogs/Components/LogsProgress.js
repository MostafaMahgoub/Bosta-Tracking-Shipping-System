import React from "react";
import { Steps } from "antd";
import LogsCard from "./LogsCard";


function LogsProgress() {
  const currentStep = -1;

  return (
    <Steps
      progressDot
      className="items-start flex-col w-70vw"
      direction="vertical"
      size="small"
      current={currentStep}
      items={[
        {
          title: <span className="ActivityLogHeader">Your order is created</span>,
          description: <><LogsCard /><LogsCard /><LogsCard /></>
        },
        {
          title: <span className="ActivityLogHeader">Your order is created</span>,
        },
        {
          title: <span className="ActivityLogHeader">Your order is created</span>,
          
        },
        {
          title: <span className="ActivityLogHeader">Your order is created</span>,
         
        },
      ]}
    />
  );
}

export default LogsProgress;