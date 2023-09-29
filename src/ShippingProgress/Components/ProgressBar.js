import React from "react";
import { Steps } from "antd";
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { ReactComponent as Delivered } from '../assets/Delivered.svg';
import { ReactComponent as Shipping } from '../assets/Shipping.svg';
import { ReactComponent as RedDelivered } from '../assets/RedDelivered.svg';
import { ReactComponent as RedShipping } from '../assets/RedShipping.svg';

function ProgressBar() {

  const { data , t  } = useContext(AppContext);
  const currentStep = data.CurrentStatus.state === "DELIVERED" ? 3 : data.CurrentStatus.state === "DELIVERED_TO_SENDER" || "CANCELLED" ? 2 : 0;

  return (
    <Steps
      className="items-start sm:items-center flex-col sm:flex-row"
      size="small"
      current={currentStep}
      items={[
        {
          title: t("Your order is created"),
        },
        {
          title: t("Shipment received"),
        },
        {
          title: t("Order is out for delivery"),
          icon: currentStep >= 2 ? <RedShipping width={25} height={25} /> : <Shipping  width={25} height={25} />,
        },
        {
          title: t("Delivered"),
          icon: currentStep >= 3 ? <RedDelivered width={25} height={25} /> : <Delivered  width={25} height={25} />,
        },
      ]}
    />
  );
}

export default ProgressBar;
