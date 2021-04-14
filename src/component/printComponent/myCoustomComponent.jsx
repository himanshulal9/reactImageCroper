import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 330,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function MyCoustomComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button dense={true}>
          <ListItemIcon>
            <b>Invoice no :- </b>
          </ListItemIcon>
          <ListItemText primary=" 1234hrt5674839iuheyrgeki " />
        </ListItem>
      </List>
    </div>
  );
}
