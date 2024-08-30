import React from "react";
import { Grid, Typography } from "@mui/material";

export default function JoinOurTeam() {
  return (
    <Grid container item xs={12} >
      <Grid item xs={12} sx={{ position: "relative", textAlign: "center" }}>
        <img
          src="https://as2.ftcdn.net/v2/jpg/03/69/04/39/1000_F_369043951_rzyOrEwrwwtYoKwDJ1kPA1eRFSakOJN6.jpg"
          alt="not found"
          style={{
            width: "80%",
            height: "450px",
            display: "block",
            margin: "0 auto",
          }}
        />
      </Grid>
      <Grid item xs={12}
        style={{
          position: "absolute",
          top: "210%",
          left: "40%",
          color: "white",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" sx={{ fontSize: "80px" }}>
          Join Our Team
        </Typography>

        <Typography
          variant="h3"
          sx={{
            border: "2px solid red",
            bgcolor: "rgba(254, 28, 28, 1)",
            margin  : "40px 0px 0px 100px",
            color: "rgba(255, 255, 255, 1)",
            fontSize:"30px",
            padding:"15px 0px",
            width:"60%",

          }}
        >
          Explore Roles
        </Typography>
        </Grid>
      </Grid>
  );
}
