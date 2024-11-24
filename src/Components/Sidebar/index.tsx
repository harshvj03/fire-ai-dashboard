import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CenterFocusWeakIcon from "@mui/icons-material/CenterFocusWeak";
import {
  Avatar,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { Overview } from "../Common/CustomSvg";
import PaymentsIcon from "@mui/icons-material/Payments";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import { Leaderboard } from "@mui/icons-material";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import MarginIcon from "@mui/icons-material/Margin";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store/store";

type MenuData = {
  id: number;
  title: string;
  icon: JSX.Element;
  isSelected: boolean;
};

type AccountData = {
  id: number;
  name: string;
  text: string;
};

export default function Sidebar() {
    const mode = useSelector((state : RootState) => state.theme.mode);
  const menuData: MenuData[] = [
    {
      id: 1,
      title: "Account Overview",
      icon: <Overview />,
      isSelected: true,
    },
    {
      id: 2,
      title: "Payouts",
      icon: <PaymentsIcon color="primary" />,
      isSelected: false,
    },
    {
      id: 3,
      title: "Certificates",
      icon: <CardMembershipIcon color="primary" />,
      isSelected: false,
    },
    {
      id: 4,
      title: "Leaderboards",
      icon: <Leaderboard color="primary" />,
      isSelected: false,
    },
    {
      id: 5,
      title: "Order List",
      icon: <BorderAllIcon color="primary" />,
      isSelected: false,
    },
  ];

  const appData: MenuData[] = [
    {
      id: 1,
      title: "News Feeds",
      icon: <NewspaperIcon color="primary" />,
      isSelected: false,
    },
    {
      id: 2,
      title: "Economic Calender",
      icon: <CalendarMonthIcon color="primary" />,
      isSelected: false,
    },
    {
      id: 3,
      title: "WebTrader Platform",
      icon: <IntegrationInstructionsIcon color="primary" />,
      isSelected: false,
    },
    {
      id: 4,
      title: "Margin Calculator",
      icon: <MarginIcon color="primary" />,
      isSelected: false,
    },
    {
      id: 5,
      title: "Profit Calculator",
      icon: <AttachMoneyIcon color="primary" />,
      isSelected: false,
    },
  ];

  const accountData: AccountData[] = [
    {
      id: 1,
      name: "Account: ",
      text: "999999",
    },
    {
      id: 2,
      name: "Status: ",
      text: "Active",
    },
    {
      id: 3,
      name: "Program: ",
      text: "$55,555 Evl",
    },
  ];

  return (
    <>
      <Paper>
        <div
          style={{
            marginLeft: "0.4rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton color="primary">
            <CenterFocusWeakIcon />
          </IconButton>
          <Typography variant="h6" fontWeight={600}>
            Trading
          </Typography>
        </div>
        <List
          dense={true}
          sx={{ width: "100%", maxWidth: 350, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              MENU
            </ListSubheader>
          }
        >
          {menuData.map((x: MenuData) => (
            <ListItemButton key={x.id} selected={x.isSelected}>
              <ListItemIcon sx={{ minWidth: "40px !important" }}>
                {x.icon}
              </ListItemIcon>
              <ListItemText primary={x.title} />
            </ListItemButton>
          ))}
          <div style={{ padding: "1rem" }}>
            <Divider />
          </div>
        </List>
        <List
          dense={true}
          sx={{ width: "100%", maxWidth: 250, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              APPS
            </ListSubheader>
          }
        >
          {appData.map((x: MenuData) => (
            <ListItemButton key={x.id}>
              <ListItemIcon sx={{ minWidth: "40px !important" }}>
                {x.icon}
              </ListItemIcon>
              <ListItemText primary={x.title} />
            </ListItemButton>
          ))}
        </List>
        <div
          style={{
            margin: "1rem",
            padding: "0.5rem",
            display: "flex",
            flexDirection: "column",
            backgroundColor: mode == 'light' ? "#e8e8e8" : '#515151',
            borderRadius: "0.5rem",
          }}
        >   
          {accountData.map((x: AccountData) => (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                background: mode == 'light' ? "white" : 'black',
                borderRadius: "0.2rem",
                margin: "0.5rem",
                fontSize: "0.875rem",
              }}
              key={x.id}
            >
              <span style={{ color: "grey", margin: "0.5rem" }}>{x.name}</span>
              <span style={{ margin: "0.5rem", color: mode == 'light' ? 'black' : 'white' }}>{x.text}</span>
            </div>
          ))}
        </div>

        <List
          sx={{ width: "100%", maxWidth: 350, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Daniel Sullivan" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Daniel Sullivan"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  ></Typography>
                  alex@gmail.com
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Paper>
    </>
  );
}
