import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Divider } from "@mui/material";
import { CardData } from "../../app/Models/CardModel/CardModel";

type Props = {
  cardData: CardData;
};

export default function Cards({ cardData }: Props) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardHeader
        avatar={cardData.icon}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={cardData.cardHeader}
        subheader={cardData.subHeader}
      />

      <CardContent>
        <Typography variant="h6" sx={{ color: "text.primary" }}>
          {cardData.text}
        </Typography>
      </CardContent>
      <Divider />
      <Typography p={"1rem"} variant="body2" sx={{ color: "text.secondary" }}>
        {cardData.footerText}{" "}
        <span style={{ color: cardData.footerValColor }}>
          {" "}
          {cardData.footerVal}
        </span>
      </Typography>
    </Card>
  );
}
