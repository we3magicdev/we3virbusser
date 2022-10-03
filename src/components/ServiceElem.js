import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import colors from "../utils/myColors";
import Fade from "react-reveal/Fade";

function ServiceElem({ title, img, hImg, active, handleClick }) {
  const theme = useTheme();
  const classes = useStyles(theme, active);

  return (
    <Fade bottom>
      <Box
        component="div"
        sx={classes.serviceGridElement}
        onClick={handleClick}
      >
        <Box component="section">
          <div>
            <img
              src={`/assets/Virbusser website-${active ? hImg : img}.png`}
              alt=""
            />
          </div>
          <Typography paragraph>{title}</Typography>
        </Box>
      </Box>
    </Fade>
  );
}

const useStyles = (theme, active) => ({
  serviceGridElement: {
    cursor: "pointer",
    height: 250,
    width: 250,
    backgroundColor: active ? colors.lightGreen : colors.darkTile,
    borderRadius: 3,
    boxShadow: active
      ? "1px 1px 1px -5px rgba(81,196,137,0.74)"
      : "transparent",

    [theme.breakpoints.down("lg")]: {
      mt: 0,
      width: 300,
      height: 300,
    },

    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",

    "& section": {
      p: 3.5,
      display: "flex",
      flexDirection: "column",
      transition: ".2s ease",

      [theme.breakpoints.down("md")]: {
        alignItems: "flex-start",
      },

      "& img": {
        height: 100,
        width: 100,
        ml: -3,
      },

      "& p": {
        fontSize: 16,
        fontWeight: "bold",
        color: active ? "whitesmoke" : colors.dimText,
        width: 125,
        [theme.breakpoints.down("md")]: {
          width: 200,
          fontSize: 18,
        },
      },
    },
  },
});

export default ServiceElem;
