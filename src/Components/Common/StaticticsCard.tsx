import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { StatisticsModel } from "../../app/Models/StatisticsData";

type Props = {
  cardData: StatisticsModel;
};

export default function StatisticsCard({ cardData }: Props) {
  return (
    <Card sx={{ maxWidth: 300, minWidth: '160px' }}>
      <CardHeader
        avatar={cardData.icon}
        title={cardData.title}
        subheader={""}
      />

      <CardContent>
        <Typography variant="h6" sx={{ color: "text.primary" }}>
          {cardData.amount}
        </Typography>
      </CardContent>
    </Card>
  );
}
