import { Container, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import colors from "../utils/myColors";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";
import { Check } from "@mui/icons-material";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

function Support() {
  const theme = useTheme();

  const classes = useStyles(theme);

  return (
    <Box sx={classes.root}>
      <Container maxWidth="xl" sx={classes.container}>
        <Box component="section">
          <Fade left>
            <Box id="section-1">
              <Typography component="h6" sx={{ color: colors.lightGreen }}>
                — We provide more than
              </Typography>
              <Typography
                sx={{ fontSize: 30, color: "whitesmoke", fontWeight: "bold" }}
              >
                Support for people and stuff...
              </Typography>
              <Box component="section" sx={{ p: 3 }}>
                {[
                  "PF monthly filings",
                  "ESI monthly filings",
                  "Payroll structuring",
                  "TDS Computations",
                  "Staffing & book keeping team",
                ].map((s, i) => (
                  <Typography
                    key={i}
                    sx={{
                      py: 1,
                      fontSize: 18,
                      color: colors.dimText,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span>
                      <Check color={colors.dimText} sx={{ mr: 1 }} />
                    </span>
                    <span>{s}</span>
                  </Typography>
                ))}
              </Box>
            </Box>
          </Fade>

          <Box sx={classes.serviceCard}>
            <Reveal effect="rotateFromRight" duration={1000}>
              <Box
                sx={{
                  backgroundColor: colors.blurCard,
                  transform: "rotate(7.5deg)",
                }}
              />
            </Reveal>
            <Box
              sx={{
                backgroundColor: colors.dimCard,
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 9,
              }}
            />
          </Box>
        </Box>

        <Box
          component="section"
          sx={{
            position: "relative",
          }}
        >
          <Controller>
            <Scene duration={3500} triggerElement={"#section-1"}>
              <Tween
                from={{ x: -200, rotation: 0 }}
                to={{ x: 200, rotation: 360 }}
              >
                <img
                  src={"/assets/Virbusser website-37.png"}
                  alt=""
                  style={{
                    width: 250,
                    position: "absolute",
                    top: -250,
                    right: -250,
                    zIndex: -1,
                    transition: "all .25s ease",
                  }}
                />
              </Tween>
            </Scene>
          </Controller>

          <Fade left>
            <Box id="section-2">
              <Typography component="h6" sx={{ color: colors.lightGreen }}>
                — We provide more than
              </Typography>
              <Typography
                sx={{ fontSize: 30, color: "whitesmoke", fontWeight: "bold" }}
              >
                Law will take our course...
              </Typography>
              <Box component="section" sx={{ p: 3 }}>
                {[
                  "Contract and agreement reviews",
                  "Standardization of repeat contracts",
                  "Intellectual property rights",
                ].map((s, i) => (
                  <Typography
                    key={i}
                    sx={{
                      py: 1,
                      fontSize: 18,
                      color: colors.dimText,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span>
                      <Check color={colors.dimText} sx={{ mr: 1 }} />
                    </span>
                    <span>{s}</span>
                  </Typography>
                ))}
              </Box>
            </Box>
          </Fade>

          <Controller>
            <Scene duration={3000}>
              <Tween
                from={{ x: 0, rotation: 0 }}
                to={{ x: -350, rotation: 360 }}
              >
                <img
                  src={"/assets/Virbusser website-41.png"}
                  alt=""
                  style={{
                    width: 200,
                    position: "absolute",
                    bottom: -250,
                    left: -75,
                    zIndex: -1,
                    transition: "all .35s ease",
                  }}
                />
              </Tween>
            </Scene>
          </Controller>

          <Box sx={classes.serviceCard}>
            <Reveal effect="rotateFromRight" duration={1000}>
              <Box
                sx={{
                  backgroundColor: colors.blurCard,
                  transform: "rotate(7.5deg)",
                }}
              />
            </Reveal>
            <Box
              sx={{
                backgroundColor: colors.dimCard,
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 9,
              }}
            />
          </Box>
        </Box>

        <Box component="section">
          <Fade left>
            <Box>
              <Typography component="h6" sx={{ color: colors.lightGreen }}>
                — We provide more than
              </Typography>
              <Typography
                sx={{ fontSize: 30, color: "whitesmoke", fontWeight: "bold" }}
              >
                There is still a lot more...
              </Typography>
              <Box component="section" sx={{ p: 3 }}>
                {[
                  "Corporate Structuring",
                  "Business Valuation",
                  "Treasury Management",
                  "Preparation for Listing on Indian Bourses",
                ].map((s, i) => (
                  <Typography
                    key={i}
                    sx={{
                      py: 1,
                      fontSize: 18,
                      color: colors.dimText,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span>
                      <Check color={colors.dimText} sx={{ mr: 1 }} />
                    </span>
                    <span>{s}</span>
                  </Typography>
                ))}
              </Box>
            </Box>
          </Fade>

          <Box sx={classes.serviceCard}>
            <Reveal effect="rotateFromRight" duration={1000}>
              <Box
                sx={{
                  backgroundColor: colors.blurCard,
                  transform: "rotate(7.5deg)",
                }}
              />
            </Reveal>
            <Box
              sx={{
                backgroundColor: colors.dimCard,
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 9,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const useStyles = (theme) => ({
  root: { display: "flex", justifyContent: "center", alignItems: "center" },
  container: {
    mt: 32,
    mx: 5,
    [theme.breakpoints.down("md")]: {
      mt: 16,
    },
    [theme.breakpoints.down("lg")]: {
      mt: 18,
    },
    [theme.breakpoints.down("xl")]: {
      mt: 20,
    },

    "& section": {
      mb: 38,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      "&:nth-child(2)": {
        flexDirection: "row-reverse",
        [theme.breakpoints.down("lg")]: {
          flexDirection: "column-reverse",
          textAlign: "left",
        },
      },

      [theme.breakpoints.down("lg")]: {
        flexDirection: "column-reverse",
        textAlign: "left",
        mb: 7.5,
      },

      "& h6": {
        fontSize: 20,
        [theme.breakpoints.down("md")]: {
          fontSize: 16,
        },
      },

      "& section": {
        mb: 4.5,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      },
    },
  },

  serviceCard: {
    position: "relative",

    "& div": {
      height: 400,
      width: 650,
      borderRadius: 4.5,
      [theme.breakpoints.down("sm")]: {
        width: 300,
        height: 300,
        mb: 7.5,
      },
      [theme.breakpoints.between("sm", "md")]: {
        width: 400,
        height: 400,
        mb: 12.5,
      },
      [theme.breakpoints.between("md", "lg")]: {
        mb: 14.5,
      },
      [theme.breakpoints.between("lg", "xl")]: {
        width: 450,
        height: 400,
      },
    },
  },
});

export default Support;
