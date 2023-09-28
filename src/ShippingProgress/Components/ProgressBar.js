import React from "react";
import { Steps } from "antd";
import { ReactComponent as Delivered } from '../assets/Delivered.svg';
import { ReactComponent as Shipping } from '../assets/Shipping.svg';
import { ReactComponent as RedDelivered } from '../assets/RedDelivered.svg';
import { ReactComponent as RedShipping } from '../assets/RedShipping.svg';

function ProgressBar() {
  const currentStep = 3;

  return (
    <Steps
      className="items-center"
      size="small"
      current={currentStep}
      items={[
        {
          title: "Your order is created",
        },
        {
          title: "Shipment received",
        },
        {
          title: "Order is out for delivery",
          icon: currentStep >= 2 ? <RedShipping width={25} height={25} /> : <Shipping  width={25} height={25} />,
        },
        {
          title: "Delivered",
          icon: currentStep >= 2 ? <RedDelivered width={25} height={25} /> : <Delivered  width={25} height={25} />,
        },
      ]}
    />
  );
}

export default ProgressBar;
