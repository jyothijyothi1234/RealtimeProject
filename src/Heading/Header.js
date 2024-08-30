import React from "react";
import { Grid, Typography } from "@mui/material";

export default function Header() {
  return (
    <Grid container item xs={12}>
      <Grid item xs={6} sx={{ display: "flex" }}>
        <Grid item xs={1}>
          <img
            src="https://cdn.pixabay.com/photo/2024/03/14/15/12/letter-8633261_640.png"
            alt="not found"
            style={{
              height: "45px",
              width: "55px",
              marginLeft: "100px",
              marginTop: "15px",
            }}
          />
        </Grid>
        <Grid item xs={5}>
          <Typography
            variant="h3"
            sx={{ fontSize: "23px", margin: "20px  0px 0px 10px" }}
          >
            Great Vibes Pvt Lmt
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={5}>
        <Grid item xs={10} sx={{ display: "flex" }}>
          <Grid item xs={2}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "14px",
                marginTop: "22px",
                color: "rgba(0, 0, 0, 1)",
                textDecoration: "underline",
                textDecorationColor: "rgba(37, 37, 37, 1",
              }}
            >
              Home
            </Typography>
          </Grid>

          <Grid item xs={2}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "14px",
                marginTop: "22px",
                color: "rgba(109, 109, 109, 1)",
              }}
            >
              About
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "14px",
                marginTop: "22px",
                color: "rgba(109, 109, 109, 1)",
              }}
            >
              Careers
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "14px",
                marginTop: "22px",
                color: "rgba(109, 109, 109, 1)",
              }}
            >
              Services
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "14px",
                margin: "18px  0px 0px 90px",
                border: "3px solid rgba(62, 62, 62, 1)",
                borderRadius: "20px",
                color: "rgba(255, 255, 255, 1)",
                bgcolor: "rgba(62, 62, 62, 1)",
                padding: "10px 0px 10px 0px",
              }}
            >
              Contact us
            </Typography>

          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
