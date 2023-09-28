import { Card } from "antd";

function LogsCard() {
  return (
    <Card className="m-4" bodyStyle={{ padding: "0.5rem 1rem"  }}>
      <p className="text-[#111619] m-0">Order is returned back to the shipper</p>
      <span className="text-[#667085]">3:52 PM</span>
    </Card>
  );
}

export default LogsCard;
