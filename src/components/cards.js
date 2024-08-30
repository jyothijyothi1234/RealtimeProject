import React from "react";
import { Grid, Typography } from "@mui/material";

export default function Cards() {
  return (
    <Grid container item xs={12} sx={{ justifyContent: "center" }}>
      <Grid
        item
        xs={3}
        sx={{
          display: "flex",
          border: "1px solid grey",
          padding: "20px 20px",
          borderRadius: "10px",
          marginLeft: "1px",
        }}
      >
        <Grid item xs={2}>
          <Typography
            variant="h3"
            sx={{
              bgcolor: "green",
              fontSize: "20px",
              border: "1px solid green",
              borderRadius: "90px",
              height: "30px",
              width: "40px",
              paddingTop: "5px",
              color: "blue",
            }}
          >
            01
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography
            variant="h3"
            sx={{ fontSize: "20px", textAlign: "left", paddingLeft: "20px" }}
          >
            Quality
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontSize: "14px",
              textAlign: "left",
              lineHeight: "1.5",
              paddingTop: "10px",
              paddingLeft: "22px",
              paddingRight: "23px",
            }}
          >
            Providing clients with refurbished services with untarnished quality
            since forever.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          display: "flex",
          border: "1px solid grey",
          padding: "20px 20px",
          borderRadius: "10px",
          margin: " 0px 0px 0px 15px",
        }}
      >
        <Grid item xs={2}>
          <Typography
            variant="h3"
            sx={{
              bgcolor: "pink",
              fontSize: "20px",
              border: "1px solid pink",
              borderRadius: "90px",
              height: "30px",
              width: "40px",
              paddingTop: "5px",
              color: "red",
            }}
          >
            02
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography
            variant="h3"
            sx={{ fontSize: "20px", textAlign: "left", paddingLeft: "20px" }}
          >
            Engagement
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontSize: "15px",
              textAlign: "left",
              lineHeight: "1.5",
              paddingTop: "10px",
              paddingLeft: "22px",
              paddingRight: "23px",
            }}
          >
            Engaging our client with cutting edge technical elements with
            reduced complexity anytime.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        xs={3}
        sx={{
          display: "flex",
          border: "1px solid grey",
          padding: "20px 20px",
          borderRadius: "10px",
          margin: " 0px 90px 0px 15px",
        }}
      >
        <Grid item xs={2}>
          <Typography
            variant="h3"
            sx={{
              bgcolor: "blue",
              fontSize: "20px",
              border: "1px solid blue",
              borderRadius: "90px",
              height: "30px",
              width: "40px",
              paddingTop: "5px",
              color: "green",
            }}
          >
            03
          </Typography>
        </Grid>

        <Grid item xs={7}>
          <Typography
            variant="h3"
            sx={{ fontSize: "18px", textAlign: "left", paddingLeft: "20px" }}
          >
            Unity
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontSize: "14px",
              textAlign: "left",
              padding:"10px 0px 5px 20px"
            }}
          >
           We are  each other's harvest. 
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontSize: "14px",
              textAlign: "left",
              padding:"0px 0px 5px 20px"

            }}
          >
           we are  each other's business. 
          </Typography> 
          <Typography
            variant="h3"
            sx={{
              fontSize: "14px",
              textAlign: "left",
              padding:"0px 0px 5px 20px"

            }}
          > we are each other's magnitude 
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontSize: "14px",
              padding:"0px 0px 5px 22px",
              textAlign:"left"

            }}
          > and bond .
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
