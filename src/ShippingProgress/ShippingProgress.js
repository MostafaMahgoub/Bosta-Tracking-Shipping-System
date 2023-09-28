import { Card, Divider } from "antd";
import ActiveTitle from "./Components/ActiveTitle";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import ProgressBar from "./Components/ProgressBar";


function ShippingProgress(){
    const { data } = useContext(AppContext);
    return (
        <Card className="my-10 w-80vw flex flex-col">
            { data &&
             <><div className="flex flex-col sm:flex-row items-center content-center justify-around">
                <div className="flex flex-col items-start content-center gap-0">
                    <ActiveTitle title={`Shipment No. ${data.TrackingNumber}`} />
                    <h4 className="font-poppins">{`${data.CurrentStatus.state}`}</h4>
                </div>
                <div className="flex flex-col items-start content-center gap-0">
                    <ActiveTitle title={"Last update"} />
                    <h4 className="font-poppins">{`${data.CurrentStatus.state}`}</h4>
                </div>
                <div className="flex flex-col items-start content-center gap-0">
                    <ActiveTitle title={"Provider"} />
                    <h4 className="font-poppins">{`${data.CurrentStatus.state}`}</h4>
                </div>
                <div className="flex flex-col items-start content-center gap-0">
                    <ActiveTitle title={"Promised date"} />
                    <h4 className="font-poppins">{`${data.CurrentStatus.state}`}</h4>
                </div>
            </div>
            <Divider />
            <ProgressBar />
            </> 
            }
        </Card>
    )
}


export default ShippingProgress;