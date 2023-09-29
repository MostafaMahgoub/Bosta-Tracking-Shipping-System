import React from "react";
import { Card, Divider, Empty } from "antd";
import ActiveTitle from "./Components/ActiveTitle";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import ProgressBar from "./Components/ProgressBar";

function ShippingProgress() {
  const { data, t, formatDate } = useContext(AppContext);

  return (
    <Card className="my-10 w-80vw flex flex-col">
      {data && data.TrackingNumber ? (
        <>
          <div className="flex flex-col sm:flex-row items-start sm:items-center content-center justify-around">
            <div className="flex flex-col items-start content-center gap-0">
              <ActiveTitle
                title={t(`Shipment No.`) + "  " + `${data.TrackingNumber}`}
              />
              <h4
                className={`${
                  data.CurrentStatus.state === "CANCELLED" ||
                  data.CurrentStatus.state === "DELIVERED_TO_SENDER"
                    ? "text-red-500"
                    : data.CurrentStatus.state === "DELIVERED"
                    ? "text-green-500"
                    : data.isEditableShipment === true ? "text-yellow-500" : ""
                }`}
              >
                {t(`${data.CurrentStatus.state}`)}
              </h4>
            </div>
            <div className="flex flex-col items-start content-center gap-0">
              <ActiveTitle title={t("Last update")} />
              <h4>{`${formatDate(data.CreateDate).date}`}</h4>
            </div>
            <div className="flex flex-col items-start content-center gap-0">
              <ActiveTitle title={t("Provider")} />
              <h4>{`${data.provider}`}</h4>
            </div>
            <div className="flex flex-col items-start content-center gap-0">
              <ActiveTitle title={t("Promised date")} />
              <h4>
                {data.PromisedDate
                  ? formatDate(data.PromisedDate).date
                  : t("Unspecified")}
              </h4>
            </div>
          </div>
          <Divider />
          <ProgressBar />
        </>
      ) : (
        <Empty
          description={
            <span className="font-bold text-lg">
              No shipment data found. Please enter the tracking number.
            </span>
          }
        />
      )}
    </Card>
  );
}

export default ShippingProgress;
