import LineChart from "../LineChart";
import Cards from "../Common/Cards";
import { CardData } from "../../app/Models/CardModel/CardModel";
import "./mainContent.css";
import {
    BarIcon,
  BestTrade,
  DollarIcon,
  LossSvg,
  ProfitFactor,
  ProfitSvg,
  Reward,
  WarningIcon,
  WinRatio,
} from "../Common/CustomSvg";
import mostTraded from "../../app/data/mostTraded.json";
import { Grid2, Paper, Typography } from "@mui/material";
import StatisticsCard from "../Common/StaticticsCard";
import { StatisticsModel } from "../../app/Models/StatisticsData";
import GridTable from "../GridTable";
import { GridColDef } from "@mui/x-data-grid";


const cardData: CardData[] = [
  {
    id: 1,
    cardHeader: "Profile Target",
    subHeader: "Of $12,00.90",
    text: "$8908.99",
    footerText: "Equity Pass Level",
    footerVal: "$124,900",
    footerValColor: "#90caf9",
    icon: <ProfitSvg />,
  },
  {
    id: 2,
    cardHeader: "Daily Loss Limit",
    subHeader: "Of $12,00.90",
    text: "$12,908.99",
    footerText: "Equity Breach Level",
    footerVal: "$124,900",
    footerValColor: "orange",
    icon: <LossSvg />,
  },
];

const statisticsCardData: StatisticsModel[] = [
  {
    id: 1,
    title: "Average Win",
    amount: "$642.00",
    percent: "7%",
    icon: <ProfitSvg />,
  },
  {
    id: 2,
    title: "Average Loss",
    amount: "$642.00",
    percent: "7%",
    icon: <LossSvg />,
  },
  {
    id: 3,
    title: "Profit Factor",
    amount: "6.4",
    percent: "",
    icon: <ProfitFactor />,
  },
  {
    id: 4,
    title: "Best Trade",
    amount: "$8,908.99",
    percent: "",
    icon: <BestTrade />,
  },
  {
    id: 5,
    title: "Win Ratio",
    amount: "-$4,800.90",
    percent: "7%",
    icon: <WinRatio />,
  },
  {
    id: 6,
    title: "Risk Reward",
    amount: "$3,490.00",
    percent: "",
    icon: <Reward />,
  },
];

const columns: GridColDef<(typeof table1Row)[number]>[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const table1Row = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const table2Row = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    age: 14,
    lots: 100,
    profit: "-$5.00",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 31,
    lots: 100,
    profit: "+$5.00",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 31,
    lots: 100,
    profit: "-$5.00",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 11,
    lots: 100,
    profit: "-$5.00",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: null,
    lots: 100,
    profit: "-$5.00",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: null,
    age: 150,
    lots: 100,
    profit: "-$5.00",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    lots: 100,
    profit: "+$5.00",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    lots: 100,
    profit: "+$5.00",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    lots: 100,
    profit: "+$5.00",
  },
];

const column2: GridColDef<(typeof table2Row)[number]>[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
  {
    field: "age",
    headerName: "Duration",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "lots",
    headerName: "Lots",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "profit",
    headerName: "Profit",
    type: "number",
    width: 110,
    editable: true,
  },
];
const MainContent = () => {
  console.log(mostTraded[0], "data");
 
  return (
    <>
      <Grid2 container className="main-content">
        <Grid2 size={6}>
          <LineChart />
        </Grid2>
        <Grid2 size={6}>
          <div className="charts">
            {cardData.map((x) => (
              <div key={x.id} className="cards-container">
                <Cards cardData={x} />
              </div>
            ))}
          </div>
          <Paper className="most-traded-section">
            <Grid2 container>
              {mostTraded.map((x: any) => (
                <Grid2 size={6} display={'flex'} alignItems={'center'}>
                  <>
                    <BarIcon color={x.color} />{" "}
                    {x.name}{" "}
                  </>
                </Grid2>
              ))}
            </Grid2>
          </Paper>
        </Grid2>

        <Grid2
          size={6}
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          minWidth={"200px"}
        >
          {statisticsCardData.map((x) => (
            <Grid2 p={2}>
              <StatisticsCard cardData={x} />
            </Grid2>
          ))}
        </Grid2>

        <Grid2 size={6}>
          <Paper sx={{ marginLeft: "1rem", marginTop: "1rem", p: "1rem" }}>
            <Typography
              variant="body2"
              fontWeight={600}
              display={"flex"}
              alignItems={"center"}
            >
              <WarningIcon /> <span style={{ marginLeft: "6px" }}></span>{" "}
              Notifications
            </Typography>
            <GridTable rows={table1Row} columns={columns} />
          </Paper>
        </Grid2>

        <Grid2 size={12}>
          <Paper sx={{ marginLeft: "1rem", marginTop: "1rem", p: "1rem" }}>
            <Typography
              variant="body2"
              fontWeight={600}
              display={"flex"}
              alignItems={"center"}
            >
              <DollarIcon />{" "}
              <span style={{ marginLeft: "6px" }}>Order History</span>
            </Typography>
            <GridTable rows={table2Row} columns={column2} />
          </Paper>
        </Grid2>
      </Grid2>
    </>
  );
};

export default MainContent;
