import React from 'react'
import { Grid, Typography, Box, Link } from "@mui/material";
import PythonIcon from "../assets/PythonIcon.svg";
import JavaIcon from "../assets/JavaIcon.svg";
import ReactIcon from "../assets/ReactIcon.svg";
import MUIIcon from "../assets/MUIIcon.svg";
import BuyMeLogo from "../assets/BuyMeLogo.svg";
import StreeShieldLogo from "../assets/StreeShieldLogo.svg";

const LeftSide = () => {
  return (
    <Grid item size={{ xl: 3, xs: 12 }} container direction="column" spacing={2}>

      <Grid item container direction="column" spacing={8} flex={1} sx={{ backgroundColor: "#FFF", borderRadius: "8px", padding: "16px", paddingBottom: { xs: "32px", xl: "16px" } }}>
        <Typography sx={{ color: "#636363", fontSize: { xss: "16px", xs: "14px" } }}>EXPERT</Typography>
        <Grid item container size={{ xl: 12 }} spacing={-2} justifyContent="center">
          <Grid item sx={{ backgroundColor: "#FFF", boxShadow: "0px 10px 30px rgba(57,43,79,0.1)", padding: "8px", borderRadius: "16px", transform: "rotate(-20deg) translate(12px, 8px)" }}>
            <Box
              component="img"
              src={PythonIcon}
              alt="Image"
              sx={{
                width: { xss: "56px", xs: "44px" },
                height: { xss: "48px", xs: "38px" },
              }}
            />
          </Grid>
          <Grid item sx={{ backgroundColor: "#FFF", boxShadow: "0px 10px 30px rgba(57,43,79,0.1)", padding: "8px", borderRadius: "16px", transform: "rotate(7deg)" }}>
            <Box
              component="img"
              src={JavaIcon}
              alt="Image"
              sx={{
                width: { xss: "56px", xs: "44px" },
                height: { xss: "48px", xs: "38px" },
              }}
            />
          </Grid>
          <Grid item sx={{ backgroundColor: "#FFF", boxShadow: "0px 10px 30px rgba(57,43,79,0.1)", padding: "8px", borderRadius: "16px", transform: "rotate(14deg) translate(-20px, 8px)", zIndex: 1 }}>
            <Box
              component="img"
              src={ReactIcon}
              alt="Image"
              sx={{
                width: { xss: "56px", xs: "44px" },
                height: { xss: "48px", xs: "38px" },
              }}
            />
          </Grid>
          <Grid item sx={{ backgroundColor: "#FFF", boxShadow: "0px 10px 30px rgba(57,43,79,0.1)", padding: "8px", borderRadius: "16px", transform: "translate(-30px, 4px)" }}>
            <Box
              component="img"
              src={MUIIcon}
              alt="Image"
              sx={{
                width: { xss: "56px", xs: "44px" },
                height: { xss: "48px", xs: "38px" },
              }}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item container flex={2} justifyContent="center" direction="column" sx={{ backgroundColor: "#FFF", borderRadius: "8px", padding: "16px" }} >
        <Grid item>
          <Typography sx={{ color: "#636363", fontSize: { xss: "16px", xs: "14px" } }}>PROJECTS</Typography>
        </Grid>
        <Grid item container flex={1}>

          <Grid item container sx={{ backgroundColor: "#D187BD", borderRadius: "8px", flex: {} }} size={{ xs: 12 }} justifyContent="center" alignItems="center" component="a" href='https://buy-me-frontend.vercel.app/' target="_blank">
            <Box
              component="img"
              src={BuyMeLogo}
              alt="Buy Me Logo"
              sx={{
                height: { xss: "64%", xs: "56%" },
              }}
            />
          </Grid>

          <Grid item container sx={{ backgroundColor: "#282828", borderRadius: "8px" }} size={{ xs: 12 }} justifyContent="center" alignItems="center" component="a" href='https://deep-fake-face-detection.vercel.app/' target="_blank">
            <Box
              component="img"
              src={StreeShieldLogo}
              alt="Stree Shield Logo"
              sx={{
                height: { xss: "64%", xs: "56%" },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default LeftSide
