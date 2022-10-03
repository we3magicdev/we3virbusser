import { Container, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import colors from "../utils/myColors";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { useState, useRef, useLayoutEffect } from "react";
import CountUp from "react-countup";
import ServiceElem from "./ServiceElem";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

function Services() {
  const theme = useTheme();
  const classes = useStyles(theme);

  let [animDisplay, setAnimDisplay] = useState(false);
  const clientsRef = useRef();
  let [clientDisplay, setClientDisplay] = useState(false);

  const svRef = useRef();

  useLayoutEffect(() => {
    document.addEventListener("scroll", () => {
      setAnimDisplay(true);

      const top = clientsRef.current?.getBoundingClientRect().top;
      if (window.scrollY >= top - 350) {
        setClientDisplay(true);
      }
    });
  }, []);

  let [serviceData, setServiceData] = useState({
    title: "Budgeting & Forecasting",
    points: ["Point 1", "Point 2", "Point 3", "Point 4"],
  });

  let [active, setActive] = useState([true, false, false, false, false, false]);

  return (
    <Box>
      <Box sx={{ display: "flex", placeContent: "center" }}>
        <Box sx={classes.clientGridContainer} id="num_clients">
          {[1, 2, 3, 4].map((i) => (
            <Fade
              key={i}
              bottom
              when={animDisplay}
              duration={parseInt(`${i}000`) / 3}
            >
              <Box
                sx={{
                  ...classes.clientGridElement,
                  borderTopLeftRadius: i === 1 ? 15 : 0,
                  borderBottomLeftRadius: i === 1 ? 15 : 0,
                  borderTopRightRadius: i === 4 ? 15 : 0,
                  borderBottomRightRadius: i === 4 ? 15 : 0,
                }}
              >
                <Typography component="div">
                  {animDisplay ? (
                    <>
                      <CountUp end={25} duration={2} suffix="+" />
                      <span>clients</span>
                    </>
                  ) : (
                    ""
                  )}
                </Typography>
              </Box>
            </Fade>
          ))}

          <Controller>
            <Scene duration={1000} triggerElement={"#num_clients"}>
              <Tween from={{ x: 25, rotate: 0 }} to={{ x: -150, rotate: 360 }}>
                <img
                  src={`/assets/Virbusser website-41.png`}
                  alt=""
                  height={175}
                  width="auto"
                  style={{
                    position: "absolute",
                    bottom: -15,
                    left: 0,
                    zIndex: -10,
                    transition: "all .25s ease",
                  }}
                />
              </Tween>
            </Scene>
            <Scene duration={1000} triggerElement={"#num_clients"}>
              <Tween from={{ x: -25, rotate: 0 }} to={{ x: 150, rotate: 360 }}>
                <img
                  src={`/assets/Virbusser website-41.png`}
                  alt=""
                  height={175}
                  width="auto"
                  style={{
                    position: "absolute",
                    top: -20,
                    right: 5,
                    zIndex: -9,
                    transition: "all .25s ease",
                  }}
                />
              </Tween>
            </Scene>
          </Controller>
        </Box>

        <Box ref={clientsRef} sx={classes.clientGridSm}>
          {[1, 2, 3, 4].map((i) => (
            <Box
              sx={{
                padding: 5,
                color: "whitesmoke",
                textAlign: "center",
              }}
            >
              <Typography
                component="div"
                sx={{
                  "& span:nth-child(1)": {
                    fontSize: 32,
                    fontWeight: "bold",
                    color: colors.lightGreen,
                  },
                  fontSize: 18,
                }}
              >
                {clientDisplay ? (
                  <Fade bottom>
                    <CountUp end={25} duration={1.5} suffix="+" />
                    <span>clients</span>
                  </Fade>
                ) : (
                  ""
                )}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Container maxWidth="xl" sx={classes.allServicesContainer} id="services">
        <Fade bottom>
          <Typography component="h2">Our Services</Typography>
        </Fade>

        <Box sx={classes.allServicesContent}>
          <Box sx={classes.serviceGridContainer}>
            <ServiceElem
              title={"Budgeting & forecasting"}
              img={17}
              hImg={25}
              active={active[0]}
              handleClick={() => {
                setServiceData({
                  title: "Budgeting & Forecasting",
                  points: ["Point 1", "Point 2", "Point 3", "Point 4"],
                });
                setActive([true, false, false, false, false, false]);
                svRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
            />
            <ServiceElem
              title={"Reporting & MIS"}
              img={18}
              hImg={26}
              active={active[1]}
              handleClick={() => {
                setServiceData({
                  title: "Reporting & MIS",
                  points: ["Point 1", "Point 2", "Point 3", "Point 4"],
                });
                setActive([false, true, false, false, false, false]);
                svRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
            />
            <ServiceElem
              title={"Fund raising & Capital structuring"}
              img={20}
              hImg={28}
              active={active[2]}
              handleClick={() => {
                setServiceData({
                  title: "Fund raising & Capital structuring",
                  points: ["Point 1", "Point 2", "Point 3", "Point 4"],
                });
                setActive([false, false, true, false, false, false]);
                svRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
            />
            <ServiceElem
              title={"Statutory Compliance"}
              img={19}
              hImg={27}
              active={active[3]}
              handleClick={() => {
                setServiceData({
                  title: "Statutory Compliance",
                  points: ["Point 1", "Point 2", "Point 3", "Point 4"],
                });
                setActive([false, false, false, true, false, false]);
                svRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
            />
            <ServiceElem
              title={"Controls & Internal Audit"}
              img={21}
              hImg={23}
              active={active[4]}
              handleClick={() => {
                setServiceData({
                  title: "Controls & Internal Audit",
                  points: ["Point 1", "Point 2", "Point 3", "Point 4"],
                });
                setActive([false, false, false, false, true, false]);
                svRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
            />
            <ServiceElem
              title={"Book Reviews"}
              img={22}
              hImg={24}
              active={active[5]}
              handleClick={() => {
                setServiceData({
                  title: "Book Reviews",
                  points: ["Point 1", "Point 2", "Point 3", "Point 4"],
                });
                setActive([false, false, false, false, false, true]);
                svRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
            />
          </Box>

          <Fade right>
            <Box sx={classes.budgetingContainer} ref={svRef}>
              <Box
                sx={{
                  position: "relative",
                  "& img": {
                    position: "absolute",
                    top: -25,
                    left: -50,
                    zIndex: -10,
                  },
                }}
              >
                <Typography component="h4" id="service_data_view">
                  {serviceData.title}
                </Typography>
                <Zoom>
                  <img
                    src={`/assets/Virbusser website-37.png`}
                    alt=""
                    height={100}
                    width="auto"
                  />
                </Zoom>
              </Box>
              {serviceData.points.map((item, index) => (
                <Typography paragraph key={index}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Fade>
        </Box>
      </Container>
    </Box>
  );
}

const useStyles = (theme) => ({
  clientGridContainer: {
    display: "flex",
    placeContent: "center",
    flexWrap: "wrap",
    mt: -25,
    p: 3,
    position: "relative",
    zIndex: 10,
    columnGap: 1,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.between("sm", "md")]: {
      mt: -10,
      columnGap: 2.5,
    },
  },
  clientGridElement: {
    height: 365,
    width: 365,
    backgroundColor: colors.darkTile,
    zIndex: 10,
    my: 1.5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& div": {
      display: "flex",
      flexDirection: "column",
    },
    "& span": {
      "&:first-child": {
        fontSize: 55,
        fontWeight: "bold",
        color: colors.lightGreen,
      },
      "&:nth-child(2)": {
        fontSize: 24,
        color: "whitesmoke",
      },
    },
    [theme.breakpoints.down("md")]: {
      height: 300,
      width: 300,
    },
  },

  allServicesContainer: {
    "& h2": {
      fontWeight: "bold",
      color: "whitesmoke",
      mt: 15,
      mb: 7.5,
      fontSize: 55,
      [theme.breakpoints.down("md")]: {
        fontSize: 36,
        mt: 10,
        mb: 5,
        textAlign: "center",
      },
      [theme.breakpoints.down("xl")]: {
        textAlign: "center",
      },
    },
    [theme.breakpoints.down("lg")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  allServicesContent: {
    display: "flex",
    flexDirection: "row",
    ml: -9,
    [theme.breakpoints.down("xl")]: {
      flexDirection: "column",
      alignItems: "center",
      ml: 0,
    },
  },

  serviceGridContainer: {
    p: 5,
    maxWidth: 875,
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    placeContent: "center",
    rowGap: 3,
    columnGap: 3,

    "& div": {
      "&:nth-child(2)": { mt: 5 },
      "&:nth-child(5)": { mt: -5 },
      "&:nth-child(3)": { mt: 10 },
      "&:nth-child(4)": { mt: -10 },
      [theme.breakpoints.down("lg")]: {
        "&:nth-child(2)": { mt: 0 },
        "&:nth-child(5)": { mt: 0 },
        "&:nth-child(3)": { mt: 0 },
        "&:nth-child(4)": { mt: 0 },
      },
    },
  },

  budgetingContainer: {
    mt: 3,
    color: colors.dimText,
    [theme.breakpoints.up("lg")]: {
      mt: 10,
      ml: 3.5,
    },
    "& p": {
      fontSize: 24,
      py: 1,
      px: 4.5,
      [theme.breakpoints.down("md")]: {
        fontSize: 22,
        textAlign: "center",
      },
    },
    "& h4": {
      fontSize: 36,
      fontWeight: "bold",
      color: "whitesmoke",
      mb: 4.5,
      [theme.breakpoints.down("md")]: {
        fontSize: 28,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: 24,
        textAlign: "center",
      },
    },
  },

  clientGridSm: {
    backgroundColor: colors.bgLanding,
    width: "100%",
    mx: 5,
    borderRadius: 3,
    mt: -10,
    py: 2.5,
    boxShadow: "0px 0px 10px -5px rgb(0,0,0,.5)",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
});

export default Services;
