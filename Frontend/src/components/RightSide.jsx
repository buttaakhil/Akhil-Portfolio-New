import React from 'react'
import { Grid, Typography, Box, Link } from "@mui/material";
import LeetCodeImage from "../assets/LeetCode.png"
import MathsBackground from "../assets/MathsBackground.svg";
import RockedLogo from "../assets/RockedLogo.svg";
import Badge from "../assets/Badge.svg";
import AkhilImage from "../assets/AkhilImage.png";
import DSAIcon from "../assets/DSAIcon.svg";
import CodeIcon from "../assets/CodeIcon.svg";
import AIIcon from "../assets/AIIcon.svg";
import TickIcon from "../assets/TickIcon.svg";
const RightSide = () => {
  return (
    <Grid item container size={{ xl: 9, xs: 12 }} direction="column" spacing={2} >
      {/* top */}
      <Grid item size={{ xs: 12 }} container flex={2.5} sx={{ flexDirection: { xs: "column", xl: "row" } }}>
        {/* left */}
        <Grid item size={{ xl: 8 }} container direction="column">
          <Grid item flex={1} container sx={{ minHeight: {xsm:"148px", xss:"118px", xs:"96px"} }}>
            <Grid container direction="column" justifyContent="center" spacing={0} item sx={{ backgroundColor: "#FFF", borderRadius: {xsm:"8px", xs:"6px"}, backgroundImage: `url(${LeetCodeImage})`, backgroundSize: "cover", backgroundPosition: "center" }} flex={1}>
              <Typography sx={{ color: "#FFF", fontSize: { md: "64px", sm: "50px", xsm: "40px", xss:"32px", xs:"26px" }, lineHeight: { xsm: "40px", sm: "64px", xs:"32px" }, marginLeft: "16px" }}>400+</Typography>
              <Typography sx={{ color: "#F9A12C", fontSize: { md: "16px", xsm: "12px", xss:"11.2px", xs:"10px" }, marginLeft: "16px" }}>PROBLEMS SOLVED</Typography>
            </Grid>
            <Grid container direction="column" justifyContent="center" spacing={0} item sx={{ backgroundColor: "#FFF", borderRadius: {xsm:"8px", xs:"6px"}, backgroundImage: `url(${MathsBackground})`, backgroundSize: "cover", backgroundPosition: "center", padding: "0px 16px" }} flex={1}>
              <Typography sx={{ color: "#8243E4", fontSize: { md: "16px", xsm: "12px", xss:"11.2px", xs:"10px" }, lineHeight: {xss:"0px", xs:"6px"}, marginTop: "16px" }}>DUAL DEGREE</Typography>
              <Typography sx={{ color: "#636363", fontSize: { md: "40px", sm: "32px", xsm: "25px", xss:"21.2px", xs:"17px" } }}>MATHEMATICS</Typography>
            </Grid>
          </Grid>
          <Grid item sx={{ backgroundColor: "#FFF", borderRadius: {xsm:"8px", xs:"6px"}, padding: "16px", position: "relative" }} flex={2}  container direction="column" justifyContent="center">
            <Grid container justifyContent="center">
              <Typography sx={{ color: "#8243E4", fontSize: { md: "180px", sm: "144px", xsm: "116px", xss:"92px", xs:"74px" }, lineHeight:{xs:"48px",xss:"60px",xsm:"76px",sm:"96px",md:"120px"} }} >AKHIL</Typography>
            </Grid>
            <Grid container justifyContent="center">
              <Typography sx={{ color: "#636363", fontSize: { md: "16px", xsm: "12px", xs:"10px" }, position: "relative", left: { md: "272px", sm: "216px", xsm: "172px", xss:"136px", xs:"106px" }, lineHeight:{xs:"0px",xsm:"15px",sm:"19px",md:"24px"} }}>BUTTA</Typography>
            </Grid>
            <Grid container justifyContent="center">
              <Typography sx={{ letterSpacing: "4px", WebkitTextStroke: "2px", WebkitTextStrokeColor: "rgba(130, 67, 228, 0.30)", WebkitTextFillColor: "transparent", fontSize: { md: "80px", sm: "64px", xsm: "52px", xss:"42px", xs:"33.6px" }, lineHeight:{xs:"16px",xss:"20px",xsm:"25.6px",sm:"32px",md:"40px"} }}>FULL STACK</Typography>
            </Grid>
            <Grid container justifyContent="center">
              <Typography sx={{ letterSpacing: "4px", WebkitTextStroke: "2px", WebkitTextStrokeColor: "rgba(130, 67, 228, 0.30)", WebkitTextFillColor: "transparent", fontSize: { md: "80px", sm: "64px", xsm: "52px", xss:"42px", xs:"33.6px" }, lineHeight:{xs:"18px",xss:"32px",xsm:"44px",sm:"56px",md:"80px"} }}>DEVELOPER</Typography>
            </Grid>
            <Grid container justifyContent="center">
              <Box
                component="img"
                src={AkhilImage}
                alt=""
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: { md: "240px", sm: "192px", xsm: "170px", xss:"156px", xs:"124px", xl:"264px" }
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* right */}
        <Grid item size={{ xl: 4 }} container direction="column" spacing={2}>
          <Grid item flex={2.5} sx={{ backgroundColor: "#FFF", borderRadius: {xsm:"8px", xs:"6px"}, padding: "16px", position: "relative", overflowX: "clip" }} container direction="column" justifyContent="space-between">
            <img src={TickIcon} alt="" style={{ position: "absolute", right: "-64px" }} width="176px" />
            <Grid item>
              <Typography sx={{ color: "#636363", fontSize: {xss:"16px", xs:"14px"} }}>PROOF OF WORK</Typography>
            </Grid>
            {/* item 1 */}
            <Grid item>
              <Grid container direction="row" spacing={2} alignItems="center">
                <Grid item sx={{ backgroundColor: "rgba(130, 67, 228, 0.08)", padding: "8px", borderRadius: "50%" }}>
                  <Grid sx={{ backgroundColor: "rgba(130, 67, 228, 0.16)", padding: "8px", borderRadius: "50%" }}>
                    <Grid sx={{ backgroundColor: "#8243E4", borderRadius: "50%", height: "48px", width: "48px" }} container justifyContent="center" alignItems="center">
                      <img src={DSAIcon} alt="" />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Link href="https://drive.google.com/file/d/1mL2BPa67gtmrw2remI5bxr7drW_a99TY/view" underline='hover' color='#636363' target="_blank"><Typography sx={{ color: "#636363", fontSize: {xss:"12px", xs:"10px"} }}>ALPHA</Typography></Link>
                  <Typography sx={{ color: "#8243E4", fontSize: {xss:"10px", xs:"8px"}}}>APNA COLLEGE</Typography>
                  <Grid sx={{ color: "#636363", fontWeight: "normal" }} container direction="row" spacing={1} alignItems="center">
                    <Typography sx={{ fontFamily: "Michroma !important", fontSize: {xss:"8px", xs:"7px"} }}>Java</Typography>
                    <Typography component="span" sx={{ height: "2px", width: "2px", backgroundColor: "#636363", borderRadius: "50%" }}></Typography>
                    <Typography sx={{ fontFamily: "Michroma !important", fontSize: {xss:"8px", xs:"7px"} }}>DSA</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* item 2 */}
            <Grid item>
              <Grid container direction="row" spacing={2} alignItems="center">
                <Grid item sx={{ backgroundColor: "rgba(130, 67, 228, 0.08)", padding: "8px", borderRadius: "50%" }}>
                  <Grid sx={{ backgroundColor: "rgba(130, 67, 228, 0.16)", padding: "8px", borderRadius: "50%" }}>
                    <Grid sx={{ backgroundColor: "#8243E4", height: "48px", width: "48px", borderRadius: "50%" }} alignItems="center" justifyContent="center" container>
                      <img src={CodeIcon} alt="" />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Link href="https://drive.google.com/file/d/1gaCgib9I_-YDZPVpKqLtpOHSUclLIsar/view" underline='hover' color='#636363' target="_blank"><Typography sx={{ color: "#636363", fontSize: {xss:"12px", xs:"10px"} }}>DELTA</Typography></Link>
                  <Typography sx={{ color: "#8243E4", fontSize: {xss:"10px", xs:"8px"} }}>APNA COLLEGE</Typography>
                  <Grid sx={{ color: "#636363", fontWeight: "normal" }} container direction="row" spacing={0.8} alignItems="center">
                    <Typography sx={{ fontFamily: "Michroma !important", fontSize: {xss:"8px", xs:"7px"} }}>Node</Typography>
                    <Typography component="span" sx={{ height: "2px", width: "2px", backgroundColor: "#636363", borderRadius: "50%" }}></Typography>
                    <Typography sx={{ fontFamily: "Michroma !important", fontSize: {xss:"8px", xs:"7px"} }}>React</Typography>
                    <Typography component="span" sx={{ height: "2px", width: "2px", backgroundColor: "#636363", borderRadius: "50%" }}></Typography>
                    <Typography sx={{ fontFamily: "Michroma !important", fontSize: {xss:"8px", xs:"7px"} }}>Express</Typography>
                    <Typography component="span" sx={{ height: "2px", width: "2px", backgroundColor: "#636363", borderRadius: "50%" }}></Typography>
                    <Typography sx={{ fontFamily: "Michroma !important", fontSize: {xss:"8px", xs:"7px"} }}>MongoDB</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* item 3 */}
            <Grid item>
              <Grid container direction="row" spacing={2} alignItems="center">
                <Grid item sx={{ backgroundColor: "rgba(130, 67, 228, 0.08)", padding: "8px", borderRadius: "50%" }}>
                  <Grid sx={{ backgroundColor: "rgba(130, 67, 228, 0.16)", padding: "8px", borderRadius: "50%" }}>
                    <Grid sx={{ backgroundColor: "#8243E4", height: "48px", width: "48px", borderRadius: "50%" }} container alignItems="center" justifyContent="center">
                      <img src={AIIcon} alt="" />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Link href="https://codebasics.io/certificate/CB-85-536734" underline="hover" color='#636363' target="_blank"><Typography sx={{ color: "#636363", fontSize: {xss:"12px", xs:"10px"} }}>DATA SCIENCE & GEN-AI</Typography></Link>
                  <Typography sx={{ color: "#8243E4", fontSize: {xss:"10px", xs:"8px"} }}>CODE BASICS</Typography>
                  <Grid sx={{ color: "#636363", fontWeight: "normal" }} container direction="row" spacing={1} alignItems="center">
                    <Typography sx={{ fontFamily: "Michroma !important", fontSize: {xss:"8px", xs:"7px"} }}>Python</Typography>
                    <Typography component="span" sx={{ height: "2px", width: "2px", backgroundColor: "#636363", borderRadius: "50%" }}></Typography>
                    <Typography sx={{ fontFamily: "Michroma !important", fontSize: {xss:"8px", xs:"7px"} }}>SQL</Typography>
                    <Typography component="span" sx={{ height: "2px", width: "2px", backgroundColor: "#636363", borderRadius: "50%" }}></Typography>
                    <Typography sx={{ fontFamily: "Michroma !important", fontSize: {xss:"8px", xs:"7px"} }}>ML</Typography>
                    <Typography component="span" sx={{ height: "2px", width: "2px", backgroundColor: "#636363", borderRadius: "50%" }}></Typography>
                    <Typography sx={{ fontFamily: "Michroma !important", fontSize: {xss:"8px", xs:"7px"} }}>DL</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item flex={1} sx={{ backgroundColor: "#8243E4", borderRadius: {xsm:"8px", xs:"6px"}, position: "relative", paddingLeft: "16px", overflow: "clip", gap: { sm: "0px", xs: "8px" } }} container justifyContent="center" direction="column" >
            <Typography sx={{ color: "#CFB0FF", fontSize: { sm: "16px", xss: "14px", xs:"12px" }, position: "relative", top: {xss:"32px", xs:"26px"} }}>SDE INTERN</Typography>
            <Grid item sx={{ position: 'relative', bottom: "8px" }}>
              <Typography component="span" sx={{ fontSize: { sm: "80px", xss: "64px", xs:"52px" }, color: "#FFF", fontFamily: "Microsoft Yi Baiti !important" }}>ROCK</Typography>
              <Typography component="span" sx={{ fontSize: { sm: "56px", xss: "44px", xs:"36px" }, color: "#FFF", fontWeight: "700", fontFamily: "Microsoft YaHei UI !important" }}>ED</Typography>
            </Grid>
            <img src={RockedLogo} alt="" style={{ position: "absolute", right: "-16px" }} height="80%" />
          </Grid>
        </Grid>
      </Grid>
      {/* bottom */}
      <Grid item size={{ xl: 12, xs: 12 }} flex={1} container sx={{ flexDirection: { xl: "row", xs: "column" } }}>
        <Grid item flex={1} sx={{ backgroundColor: "#FFF", borderRadius: {xsm:"8px", xs:"6px"}, paddingLeft: "16px", position: "relative", overflowX: "clip", gap: { md: "0px", xs: "16px" } }} container direction="column" justifyContent="center">
          <Grid item container direction="column" spacing={0}>
            <Typography sx={{ color: "#8243E4", fontSize: { xs:"12px",xss: "14px", md: "16px" }, position: "relative", top: "14px" }}>JEE MAINS</Typography>
            <Grid item>
              <Typography component="span" sx={{ color: "#636363", fontSize: { xs:"34px",xss: "38px", md: "48px" } }}>96</Typography>
              <Typography component="span" sx={{ color: "rgba(99, 99, 99, 0.50)", fontSize: { xs: "8px", md: "10px" } }}>%ILE</Typography>
            </Grid>
          </Grid>
          <Grid item container spacing={0} direction="column" sx={{ position: "relative", bottom: "16px" }}>
            <Typography sx={{ color: "#8243E4", fontSize: { xs:"12px",xss: "14px", md: "16px" }, position: "relative", top: "14px" }}>EAPCET</Typography>
            <Grid item>
              <Typography component="span" sx={{ color: "#636363", fontSize: { xs:"34px",xss: "38px", md: "48px" } }}>6084</Typography>
              <Typography component="span" sx={{ color: "rgba(99, 99, 99, 0.50)", fontSize: { xs: "8px", md: "10px" } }}>RANK</Typography>
            </Grid>
          </Grid>
          <Box
            component="img"
            src={Badge}
            alt=""
            sx={{
              position: "absolute",
              right:{sm:"-80px", xs:"-68px"},
              height:"96%"
            }}
          />

        </Grid>
        <Grid item flex={2} sx={{ backgroundColor: "#FFF", borderRadius: {xsm:"8px", xs:"6px"}, padding: "16px" }} container justifyContent="space-around" alignItems="center">
          <Grid item container direction="column" justifyContent="center" spacing={0}>
            <Grid item>
              <Typography sx={{ fontSize: { md: "14px", xss: "11.2px", xs:"10px" }, color: "#8243E4" }}>SSC</Typography>
            </Grid>
            <Grid item>
              <Typography component="span" sx={{ fontSize: { md: "72px", xss: "56px", xs:"44px" }, color: "#636363", lineHeight: {xss:"48px", xs:"38px"} }}>10</Typography>
              <Typography component="span" sx={{ fontSize: { md: "16px", xss: "12.8px", xs:"10.2px" }, color: "rgba(99, 99, 99, 0.50)" }}>CGPA</Typography>
            </Grid>
          </Grid>

          <Grid item container direction="column" justifyContent="center" spacing={0}>
            <Grid item>
              <Typography sx={{ fontSize: { md: "14px", xss: "11.2px", xs:"10px" }, color: "#8243E4" }}>12 <sup style={{ position: "relative", right: "5px" }}>th</sup></Typography>
            </Grid>
            <Grid item>
              <Typography component="span" sx={{ fontSize: { md: "72px", xss: "56px", xs:"44px" }, color: "#636363", lineHeight: {xss:"48px", xs:"38px"} }}>97</Typography>
              <Typography component="span" sx={{ fontSize: { md: "16px", xss: "12.8px", xs:"10.2px" }, color: "rgba(99, 99, 99, 0.50)" }}>PCT</Typography>
            </Grid>
          </Grid>

          <Grid item container direction="column" justifyContent="center" spacing={0}>
            <Grid item>
              <Typography sx={{ fontSize: { md: "14px", xss: "11.2px", xs:"10px" }, color: "#8243E4" }}>B.TECH</Typography>
            </Grid>
            <Grid item>
              <Typography component="span" sx={{ fontSize: { md: "72px", xss: "56px", xs:"44px" }, color: "#636363", lineHeight: {xss:"48px", xs:"38px"} }}>9</Typography>
              <Typography component="span" sx={{ fontSize: { md: "16px", xss: "12.8px", xs:"10.2px" }, color: "rgba(99, 99, 99, 0.50)" }}>CGPA</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default RightSide
