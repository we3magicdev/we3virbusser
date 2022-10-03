import { Close, Menu } from "@mui/icons-material";
import { Container, IconButton, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import colors from "../utils/myColors";

function Header() {
  const theme = useTheme();

  let [show, setShow] = useState(false);
  const classes = useStyles(theme, show);

  return (
    <>
      <Box component="header" sx={classes.root}>
        <Container sx={classes.content} maxWidth="xl">
          <a href="/#" style={classes.logo}>
            <img
              src={"/assets/Virbusser website-40.png"}
              width={150}
              alt="virbusser_logo"
            />
          </a>

          <nav className="d-nav">
            <a href="/#">Home</a>
            <a href="#services">Services</a>
            <a href="#why-us">Why us?</a>
            <a href="#contact">Contact</a>
          </nav>
        </Container>
      </Box>

      <>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            backgroundColor: colors.bgPrimary,
            width: "100%",
            zIndex: 20,
            boxShadow: "0px 0px 15px -10px rgb(0,0,0,.5)",
            [theme.breakpoints.up("md")]: {
              display: "none",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2,
            }}
          >
            <a href="/#">
              <img
                src={"/assets/Virbusser website-40.png"}
                width={100}
                alt="virbusser_logo"
              />
            </a>

            <IconButton
              onClick={() => setShow(!show)}
              sx={{
                color: "whitesmoke",
              }}
            >
              {show ? <Close /> : <Menu />}
            </IconButton>
          </Box>
        </Box>

        <Box component="nav" sx={classes.mobNav}>
          <a href="/#" onClick={() => setShow(!show)}>
            Home
          </a>
          <a href="#services" onClick={() => setShow(!show)}>
            Services
          </a>
          <a href="#why-us" onClick={() => setShow(!show)}>
            Why us?
          </a>
          <a href="#contact" onClick={() => setShow(!show)}>
            Contact
          </a>
        </Box>
      </>
    </>
  );
}

const useStyles = (theme, show) => ({
  root: {
    backgroundColor: colors.bgPrimary,
    boxShadow: "0px 0px 15px -10px rgb(0,0,0,.5)",

    "& .d-nav a": {
      color: "whitesmoke",
      textDecoration: "none",
      mx: 3.5,
      fontSize: 18,
      fontWeight: 500,
      // transition: ".25s ease",
      "&:hover": {
        textDecoration: "underline",
        // transition: "text-decoration .25s ease",
      },
    },

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    py: 2.5,
  },

  logo: {
    fontSize: 24,
    m: 0,
    textDecoration: "none",
    color: "whitesmoke",
  },

  mobNav: {
    position: "fixed",
    top: 0,
    left: show ? 0 : "100%",
    transition: ".5s ease-in-out",
    height: "100vh",
    width: "100%",
    backgroundColor: colors.bgPrimary,
    zIndex: 19,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    rowGap: 5,

    "& a": {
      display: "block !important",
      color: "whitesmoke",
      fontSize: 24,
      textDecoration: "none",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
});

export default Header;
