import React from "react";
import { Grid, Typography, Box } from "@mui/material";

export default function Subscribe() {
  return (
    <Grid container item xs={12} sx={{ marginBottom: "70px" }}>
      <Grid
        item
        xs={11}
        sx={{
        //   border: "1px solid black",
          paddingTop: "60px",
          borderRadius: "20px",
          margin: "0px 80px 0px 80px",
          bgcolor: "rgba(248, 248, 248, 1)",
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h3"
            sx={{ fontSize: "40px", color: "rgba(0, 0, 0, 1)" }}
          >
            Subscribe To Get The Latest
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontSize: "40px",
              paddingBottom: "10px",
              color: "rgba(0, 0, 0, 1)",
            }}
          >
            News About Us.
          </Typography>

          <Typography
            variant="h3"
            sx={{ fontSize: "20px", color: "rgba(67, 67, 67, 1)" }}
          >
            We recommend you subscribe to our newsletter. Enter your email
          </Typography>

          <Typography
            variant="h3"
            sx={{ fontSize: "20px", color: "rgba(67, 67, 67, 1)" }}
          >
            below to get our regular updates about us.
          </Typography>
        </Grid>

        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", margin: "30px  0px 60px 0px" }}>
          <Box sx={{ position: "relative", width: "25%" }}>
            <input
              placeholder="Enter your email..."
              style={{
                padding: "12px",
                borderRadius: "10px",
                width: "95%",
                bgcolor: "rgba(255, 255, 255, 1)",
                borderColor: "whitesmoke",
              }}
            />
            <Typography
              variant="h3"
              sx={{
                position: "absolute",
                right: "0px",
                top: "0px",
                bottom: "0px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 30px",
                bgcolor: "rgba(241, 0, 0, 1)",
                borderRadius: "0 10px 10px 0",
                color: "rgba(255, 255, 255, 1)",
                cursor: "pointer",
                height: "100%",
                fontSize: "16px",
               
              }}
            >
              Subscribe
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}


