import React from "react";
import { Grid, Typography } from "@mui/material";

export default function About() {
  return (
    <Grid container item xs={12}>
      <Grid item xs={6}>
        <Grid item xs={9}>
          <img
            src="https://s3-alpha-sig.figma.com/img/29dd/6ed4/3923cbd9d1a48953f733c0a2bd8ffbb3?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TCC5iTFQG-82xQOZa6R0HXiHoivv1P3Jq-aQmnll3k6~74lzTRoBOAMBn9w5AQE2ERuDoRte2jOCEzNwXzCt8A2cjuLggXekjZM7Im5UBmnE-iCqTQ8KzTyUkEVfrOH6dF3dBHKOo84c2NF4DRE36Qt2yaGQcZnEpkwTQmiIwlC9xxDb4WTUsjCIRLM0sGTm0kQ21HkGBiA8lmNTCh6djIXhGz5ZpzcmKGLCE-vj96efFyBfzkDG8YHeN2E1765dMGQ47pLVkButMYkb403ytqGvAhncDg-tap~Bc07eoTlzBxtd0qO6GUOW-YTWPimrIMrhr0n-L5zlMd~shJ9llg__"
            alt="not found"
            style={{
              height: "50%",
              width: "100%",
              margin: "100px 0px 0px 150px",
              borderRadius: "20px",
            }}
          />
        </Grid>
      </Grid>

      <Grid item xs={6} sx={{ textAlign: "left" }}>
        <Grid item xs={8}>
          <Typography
            variant="h3"
            sx={{
              fontSize: "25px",
              marginTop: "130px",
              color: "rgba(0, 0, 0, 1)",
            }}
          >
            A FEW WORDS ABOUT US{" "}
          </Typography>
        </Grid>

        <Grid
          item
          xs={1}
          sx={{ border: "1px solid rgba(46, 46, 46, 1)" }}
        ></Grid>

        <Grid item xs={7}>
          <Typography
            variant="h3"
            sx={{ fontSize: "16px", marginTop: "100px", lineHeight: "27px" }}
          >
            Great Vibes Private Limited is a startup company focused on building
            world class user experiences and addressing customer needs . Great
            Vibes has developed projects that range from social media
            applications to enterprise solutions.Finding the most talented and
            creative minds. We pride ourselves in providing a work environment
            where everyone can voice their unique perspectives and maximize
            their collective potential.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
