import React from "react";
import { Grid, Typography } from "@mui/material";



export default function WhatText(){


    return(
        <Grid container item xs={12}  sx={{marginTop:"100px",marginBottom:"70px"}}>
                    <Grid  item xs={12}  >

                <Typography variant="h3" sx={{fontSize:"56px",paddingBottom:"35px"}}  >What We Do  </Typography>
                </Grid>

                <Grid  item xs={12}    >

                <Typography variant="h3" sx={{fontSize:"16px",paddingBottom:"10px"}}  >Focused on building world class user experiences and addressing  </Typography>
                </Grid>

                <Grid  item xs={12}   >

                <Typography variant="h3" sx={{fontSize:"16px"}}  >customer needs.  </Typography>
                </Grid>

  </Grid>


    );
}