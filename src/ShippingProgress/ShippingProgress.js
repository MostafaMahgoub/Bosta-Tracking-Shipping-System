import React from 'react';
import { Card, Divider, Empty } from 'antd';
import ActiveTitle from './Components/ActiveTitle';
import { useContext } from 'react';
import { AppContext } from '../AppContext';
import ProgressBar from './Components/ProgressBar';

function ShippingProgress() {
  const { data } = useContext(AppContext);

  return (
    <Card className="my-10 w-80vw flex flex-col">
      {data ? (
        <>
          <div className="flex flex-col sm:flex-row items-start sm:items-center content-center justify-around">
            <div className="flex flex-col items-start content-center gap-0">
              <ActiveTitle title={`Shipment No. ${data.TrackingNumber}`} />
              <h4>{`${data.CurrentStatus.state}`}</h4>
            </div>
            <div className="flex flex-col items-start content-center gap-0">
              <ActiveTitle title={'Last update'} />
              <h4>{`${data.CurrentStatus.state}`}</h4>
            </div>
            <div className="flex flex-col items-start content-center gap-0">
              <ActiveTitle title={'Provider'} />
              <h4>{`${data.CurrentStatus.state}`}</h4>
            </div>
            <div className="flex flex-col items-start content-center gap-0">
              <ActiveTitle title={'Promised date'} />
              <h4>{`${data.CurrentStatus.state}`}</h4>
            </div>
          </div>
          <Divider />
          <ProgressBar />
        </>
      ) : (
        <Empty description={<span>No shipment data found. Please enter the tracking number.</span>} />
      )}
    </Card>
  );
}

export default ShippingProgress;