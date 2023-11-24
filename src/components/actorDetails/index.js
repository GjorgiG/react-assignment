import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const ActorDetails = ({ actor }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {actor.birthday}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
      </Paper>
      <Paper component="ul" sx={{...root}}>
        <Chip label={`Birthday: ${actor.birthday}`} />
      </Paper>
      </>
  )
}
export default ActorDetails;