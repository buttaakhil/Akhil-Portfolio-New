import { createTheme } from "@mui/material";

const theme = createTheme({
    breakpoints:{
        values:{
            xs:0,
            xss:460,
            xsm:520,
            sm:640,
            md:800,
            lg:1024,
            xl:1428,
        },
    },
})

export default theme;