import React from "react";
import { Grid, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ContactUs() {
  return (
    <Grid container item xs={12}  sx={{bgcolor:"rgba(248, 248, 248, 1)",paddingTop:"50px"}}>
      <Grid item xs={6}>
        <Grid
          item
          xs={9}
          sx={{ display: "flex", justifyContent: "center", marginLeft: "83px" }}
        >
          <Grid
            item
            xs={1}
            sx={{
              border: "1px solid rgba(105, 105, 105, 1)",
              height: "2px",
              marginTop: "10px",
            }}
          ></Grid>
          <Grid item xs={5}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "18px",
                color: "rgba(109, 109, 109, 1)",
                paddingBottom: "45px",
              }}
            >
              Contact Us
            </Typography>
          </Grid>
          <Grid
            item
            xs={1}
            sx={{
              border: "1px solid rgba(105, 105, 105, 1)",
              height: "2px",
              marginTop: "10px",
            }}
          ></Grid>
        </Grid>

        <Grid item xs={6} sx={{ marginLeft: "100px" }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: "30px",
              color: "rgba(0, 0, 0, 1)",
              marginLeft: "80px",
              paddingBottom: "15px",
              fontStyle: "normal",
            }}
          >
            Outstanding Variety Of
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontSize: "30px",
              color: "rgba(0, 0, 0, 1)",
              marginRight: "80px",
              fontStyle: "normal",
            }}
          >
            Services
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          marginTop: "40px",
        }}
      >
        <Grid item xs={7}>
          <img
            src="https://s3-alpha-sig.figma.com/img/e745/c3e5/4f75d9e82355024e737249e3a80258de?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e-gIcAH~YPEsqaqmOVNwPVIiDSC5B29FV-zHaoBfCBGrLdiRPX4W9B9wERt1w~BkaK9z9sXzPCdKh9~BB8vw8gn63snW55rrH1ZUEWofp00b3P2N9nx2BGLmCGogSOdE9~VmJZpdc9wVbtyfzkvCnfaqvZFMCefpZbZ86X5fLVFIWtG1elLnCnfH-7uWboxzpRIPRP6-yW3zNozv6v188TSjRz1csxjz83qA-WZy8MNIHOUFu0QpRJQtEKGk7o1RvNIcvejdP13PZEVPrX6tkfmlgaXyQ59n9Rz-A~qJ~qPN6HL9DEIHaYlkmF6IZeDZTkCq0HelwSTvRBWoDFPnsQ__"
            alt="not found"
            style={{
              height: "90%",
              width: "70%",
              borderRadius: "60px",
              marginLeft: "90px",
            }}
          />
        </Grid>

        <Grid item xs={7} sx={{ alignItems: "center" }}>
          <Grid item xs={9}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "40px",
                color: "rgba(16, 50, 78, 1)",
                padding: "0px 0px 15px 0px ",
                textAlign: "left",
              }}
            >
              Contact Us for more Information
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontSize: "40px",
                color: "rgba(16, 50, 78, 1)",
                textAlign: "left",
                padding: "0px 0px 15px 0px",
              }}
            >
              about our Company
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: "16px",
                color: "rgba(87, 102, 115, 1)",
                paddingBottom: "8px",
                textAlign: "left",
              }}
            >
              Our solutions make things more streamlined Make finding key
              insights easier.
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontSize: "16px",
                color: "rgba(87, 102, 115, 1)",
                textAlign: "left",
              }}
            >
              Make finding key insights easier.
            </Typography>
          </Grid>

          <Grid item xs={7} sx={{ marginTop: "20px" }}>
            <Grid item xs={4}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "20px",
                  color: "rgba(255, 255, 255, 1)",
                  textAlign: "center",
                  border: "1px solid rgba(255, 0, 0, 1)",
                  padding: "10px 1px",
                  borderRadius: "20px",
                  bgcolor: "rgba(255, 0, 0, 1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                Contact Now
                <ArrowForwardIcon />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
