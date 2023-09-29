import { Card } from "antd";

function LogsCard({title,time}) {
  return (
    <Card className="m-4 border-[#dbdbdb]" bodyStyle={{ padding: "0.5rem 1rem"  }}>
      <p className="text-[#111619] m-0">{title}</p>
      <span className="text-[#667085]">{time}</span>
    </Card>
  );
}

export default LogsCard;
