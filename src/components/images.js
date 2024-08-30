import React from "react";
import { Grid, Typography } from "@mui/material";

export default function Image() {
  return (
    <Grid container item xs={12} >
      <Grid item xs={5}>
        <Grid item xs={8}>
          <Typography
            variant="h3"
            sx={{ fontSize: "50px",marginTop: "100px",paddingLeft:"45px" }}
          >
            WELCOME TO
          </Typography>

          <Typography
            variant="h3"
            sx={{ fontSize: "50px", paddingTop: "16px" }}
          >
            OUR WORLD
          </Typography>
        </Grid>

        <Grid item xs={8}>
          <Typography
            variant="h3"
            sx={{ fontSize: "18px", paddingTop: "25px" }}
          >
            "Quality means doing it right
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontSize: "18px", marginLeft: "20px", paddingTop: "5px" }}
          >
            when no one is looking." -An Zha Zha
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={4} >
      <Grid item xs={5} >

        <img
          src="https://s3-alpha-sig.figma.com/img/0b7b/700d/0f746a6271a8bc9787322a1eebc02c1c?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qeCyFsBuQl-wYsHeFudq029W83TVoE-zQOq6B1bujsfQ9izZq2kPOI86Wq2KOnR8lgaQfpAvisH22tP~zfcGDpynUC4~Vf52IsDc5JI6~kp5~ci7h-bOO57IIUi5CS0HSJ1PCp06Sb~j5x97tF1boOvD-dlCojejgxu4f~iA8iPU2yjrVW7iB-pvDm-4bObznxgSfCU7YbPDfD7cxLDG3LEriQWEeEQ2swT9h~6lbvyJaADO6e1ZUIbD~M-0Hs~ROw4SqUReyFxZb2zvlMC6W60V5YbEn902nBvNwLGakV4CaiXwDxQdSUWBkTicWAcKzePQyt9XYTggY5KVAHIP3A__"
          alt="image"
          style={{height:"450px",width:"850px",}}
        />
              </Grid>

      </Grid>
    </Grid>
  );
}
