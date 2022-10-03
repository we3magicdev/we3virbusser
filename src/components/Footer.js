import { Container, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import colors from "../utils/myColors";
import Fade from "react-reveal/Fade";
import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";

function Footer() {
  const theme = useTheme();

  const classes = useStyles(theme);

  return (
    <Box component="footer" sx={classes.root}>
      <Container maxWidth="xl" sx={classes.container}>
        <Fade left>
          <Typography sx={classes.logo}>
            {"VirBusSer".split("").map((i, index) => (
              <span
                style={{
                  color:
                    index % 3 === 0 ? colors.paleYellow : colors.lightGreen,
                }}
              >
                {i}
              </span>
            ))}
          </Typography>
        </Fade>

        <Fade right>
          <Box sx={classes.itemsContainer}>
            <a href="/">
              <FacebookOutlined />
            </a>
            <a href="/">
              <Twitter />
            </a>
            <a href="/">
              <Instagram />
            </a>
            <a href="/">
              <LinkedIn />
            </a>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}

const useStyles = (theme) => ({
  root: {
    backgroundColor: colors.bgLanding,
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    py: 5,
    px: 3,
    alignItems: "center",

    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
    },
  },

  logo: {
    fontSize: 32,
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      fontSize: 24,
      mb: 3.5,
    },
  },

  itemsContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    "& a": {
      backgroundColor: colors.bgPrimary,
      borderRadius: 3,
      height: 75,
      width: 75,
      mx: 1,
      [theme.breakpoints.down("lg")]: {
        mt: 5,
      },
      [theme.breakpoints.down("md")]: {
        mt: 2,
      },
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: colors.paleYellow,
      transition: ".25s ease",
      "&:hover": {
        backgroundColor: colors.paleYellow,
        transition: "background-color .25s ease",
        "& svg": {
          color: colors.bgPrimary,
          transition: "color .25s ease",
        },
      },

      "& svg": {
        transition: ".25s ease",
        fontSize: 35,
        [theme.breakpoints.down("sm")]: {
          fontSize: 27,
        },
      },
      [theme.breakpoints.down("sm")]: {
        height: 50,
        width: 50,
      },
    },
  },
});

export default Footer;
