import React from "react";
import { Grid, Typography } from "@mui/material";

export default function WebImages() {
  return (
    <Grid container item xs={12} sx={{ justifyContent: "center",marginBottom:"70px" }}>
      <Grid
        item
        xs={3}
        sx={{
          bgcolor: "rgba(144, 144, 144, 0.1)",
          marginRight: "50px",
          borderRadius: "20px",
          paddingBottom:"60px"
        }}
      >
        <Grid item xs={12}>
          <img
            src="https://thumbs.dreamstime.com/b/web-development-icon-trendy-flat-vector-white-background-programming-collection-illustration-can-be-use-mobile-eps-130326341.jpg"
            alt="not found"
            style={{ height: "50px", padding: "23px 0px " }}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="h3"
            sx={{
              fontSize: "24px",
              color: "rgba(0, 0, 0, 1)",
              paddingBottom: "21px",
            }}
          >
            Web Development
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="h3"
            sx={{
              fontSize: "18px",
            }}
          >
            It mainly deals with the 
          </Typography>


          <Typography
            variant="h3"
            sx={{
              fontSize: "18px",
            }}
          >
             non-design aspect 
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontSize: "18px",
            }}
          >
           of building websites.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          bgcolor: "rgba(144, 144, 144, 0.1)",
          marginRight: "50px",
          borderRadius: "20px",
          paddingBottom:"60px"
        }}
      >
        <Grid item xs={12}>
          <img
            src="https://media.istockphoto.com/id/1276536381/vector/pencil-icon-vector-illustration-design-template-editable-stroke.jpg?s=612x612&w=0&k=20&c=k4GoykDu4g-fplnazzSqUyMwWWcviGuntBrnZ7uWFzU= "
            alt="not found"
            style={{ height: "40px", padding: "23px 0px " }}
          />
        </Grid>

        <Grid item xs={11}>
          <Typography
            variant="h3"
            sx={{
              fontSize: "24px",
              color: "rgba(0, 0, 0, 1)",
              paddingBottom: "21px",
            }}
          >
            UI & UX Design
          </Typography>
        </Grid>

        <Grid item xs={11}>
          <Typography
            variant="h3"
            sx={{
              fontSize: "18px",
            }}
          >
            Our responsibility is to deliver an 
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontSize: "18px",
            }}
          >
            outstanding user experience
            providing 
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontSize: "18px",
            }}
          >
            an intuitive application design.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        xs={3}
        sx={{
          bgcolor: "rgba(144, 144, 144, 0.1)",
          borderRadius: "20px",
          paddingBottom:"60px"
        }}
      >
        <Grid item xs={12} >
          <img
            src="https://cdn-icons-png.flaticon.com/512/5807/5807720.png"
            alt="not found"
            style={{ height: "40px", padding: "23px 0px ",}}
         
          />
        </Grid>

        <Grid item xs={11}>
          <Typography
            variant="h3"
            sx={{
              fontSize: "24px",
              color: "rgba(0, 0, 0, 1)",
              paddingBottom: "21px",
            }}
          >
            Strategic insights
          </Typography>
        </Grid>

        <Grid item xs={11}>
          <Typography
            variant="h3"
            sx={{
              fontSize: "18px",
            }}
          >
            A realization that a customer need
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: "18px",
            }}
          >
            is not being met
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: "18px",
            }}
          >
            by existing products or functions.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
