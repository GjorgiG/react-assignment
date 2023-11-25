import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import StarRate from "@mui/icons-material/StarRate";
import PersonIcon from '@mui/icons-material/Person';


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
        Biography
      </Typography>

      
      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>

      <Paper component="ul" sx={{...root}}>
      <li>
          <Chip label="Birthday" sx={{...chip}} color="primary" />
        </li>
        <li>
            <Chip label={actor.birthday} sx={{...chip}} />
          </li>
          </Paper>


          <Paper component="ul" sx={{...root}}>
          <Chip label="Popularity" sx={{...chip}} color="primary" />
          <li>
          <Chip
          icon={<StarRate />}
          label={`${actor.popularity}`} />
          </li>
      </Paper>


      <Paper component="ul" sx={{...root}}>
          <Chip label="Gender" sx={{...chip}} color="primary" />
          <li>
          <Chip
          icon={<PersonIcon />}
          label={`${actor.gender}`} />
          </li>
      </Paper>
    

      

      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
      </Drawer>
      </>
  )
}
export default ActorDetails;