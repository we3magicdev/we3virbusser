import { AccountBalanceOutlined } from "@mui/icons-material";
import { Button, Container, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import colors from "../utils/myColors";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Pulse from "react-reveal/Pulse";
import { useLayoutEffect, useRef, useState } from "react";

function TypeGrid() {
	const theme = useTheme();

	let [forOne, setForOne] = useState(0);
	let [forTwo, setForTwo] = useState(0);
	let [forThree, setForThree] = useState(0);
	// let [forFour, setForFour] = useState(0);
	let [forFive, setForFive] = useState(0);

	const ref_one = useRef();
	const ref_two = useRef();
	const ref_three = useRef();
	// const ref_four = useRef();
	const ref_five = useRef();

	const classes = useStyles({
		theme,
		animations: [forOne, forTwo, forThree, forFive],
	});

	useLayoutEffect(() => {
		document.addEventListener("scroll", () => {
			const tops = [
				ref_one.current?.getBoundingClientRect().top,
				ref_two.current?.getBoundingClientRect().top,
				ref_three.current?.getBoundingClientRect().top,
				// ref_four.current?.getBoundingClientRect().top,
				ref_five.current?.getBoundingClientRect().top,
			];

			if (tops[0] < 650 || tops[1] < 650) {
				setForOne(-200);
				setForTwo(-250);
			} else {
				setForOne(0);
				setForTwo(0);
			}

			tops[2] < 450 ? setForThree(-150) : setForThree(0);
			tops[3] < 450 ? setForFive(-250) : setForFive(0);
		});
	}, []);

	return (
		<Box sx={{ display: "flex", justifyContent: "center" }}>
			<Container maxWidth="xl">
				{/* types grid */}
				<Box sx={classes.typesGridContainer}>
					<Box ref={ref_one}>
						<Zoom>
							<img
								src={"/assets/Virbusser website-37.png"}
								alt=""
								style={{
									position: "absolute",
									top: -50,
									left: 100,
									width: 100,
									zIndex: -1,
								}}
							/>
						</Zoom>
						<Typography component="h4">Mobile Enablement</Typography>
						<Typography paragraph>
							Enhance your customer’s experience by creating mobile apps for
							daily use placing & tracking orders, status reporting
						</Typography>
						<img
							src={"/assets/Virbusser website-30.png"}
							alt="mobile enablement"
						/>
					</Box>
					<Box ref={ref_two}>
						<Typography component="h4">Infrastructure</Typography>
						<Typography paragraph>
							Have the right IT infrastructure for your business, don’t over
							invest or under invest. Size it right and secure it right
						</Typography>
						<img
							src={"/assets/Virbusser website-33.png"}
							alt="infrastructure"
						/>
					</Box>
					<Box ref={ref_three}>
						<Typography component="h4">
							Workflow tracking & Document management
						</Typography>
						<Typography paragraph>
							Track the status of all your business activities online, approve
							transactions on the move, so that you are not the bottleneck
						</Typography>
						<img
							src={"/assets/Virbusser website-32.png"}
							alt="workflow tracking & document management"
						/>
					</Box>
					<Box
					// ref={ref_four}
					>
						<Typography component="h4">
							ERP & Accounting tools support
						</Typography>
						<Typography paragraph>
							Find the right off the shelf products for your business. Don’t
							invest and understand, anlalyse and invest
						</Typography>
						<img
							src={"/assets/Virbusser website-35.png"}
							alt="erp & accounting tools support"
						/>
					</Box>
					<Box ref={ref_five}>
						<Typography component="h4">Low cost automation</Typography>
						<Typography paragraph>
							Introduce low cost tools (excel macros and access programs) that
							reduce time in churning out the same reports every weak
						</Typography>
						<img
							src={"/assets/Virbusser website-34.png"}
							alt="low cost automation"
						/>
					</Box>

					<Zoom>
						<img
							src={"/assets/Virbusser website-37.png"}
							alt=""
							style={{
								position: "absolute",
								width: 100,
								bottom: -50,
								left: 300,
								zIndex: -1,
							}}
						/>
					</Zoom>
				</Box>
				{/* end of types grid */}

				{/* why virbusser grid */}
				<Box sx={classes.whyContainer} id="why-us">
					<Fade bottom>
						<Typography component="h5">Why Virbusser?</Typography>
					</Fade>
					<Box sx={classes.whyGrid}>
						<Box>
							<Typography paragraph>
								One stop shop for all things CFO, <span>and a little more</span>
							</Typography>
						</Box>
						<Box>
							<Typography paragraph>
								Trained finance & Accounting professionals <span>with</span>{" "}
								industry experience
							</Typography>
						</Box>
						<Box>
							<Typography paragraph>
								End-to-end landscape including payroll, InfoSec{" "}
								<span>and technology</span>
							</Typography>
						</Box>
						<Box>
							<Typography paragraph></Typography>
						</Box>
					</Box>
				</Box>
				{/* end of why virbusser */}

				{/* get in touch */}
				<Pulse>
					<Box
						id="contact"
						sx={{
							...classes.getInTouch,
							position: "relative",
							"&:before": {
								content: "''",
								width: "100%",
								height: "100%",
								position: "absolute",
								border: `100px solid ${colors.bgPrimary}`,
								borderRadius: 30,
								zIndex: 10,
							},
						}}
					>
						<Box sx={{ position: "absolute", zIndex: 11 }}>
							<Fade bottom>
								<Typography component="section">
									<h4>Get in touch with us</h4>
									<div>For more details get in touch with us</div>
								</Typography>
								<Button variant="contained" disableElevation disableRipple>
									Contact
								</Button>
							</Fade>
						</Box>
						<img
							src={"/assets/Virbusser website-37.png"}
							height={250}
							width="auto"
							alt=""
							style={{ position: "absolute", top: -50, left: -50 }}
						/>
						<img
							src={"/assets/Virbusser website-39.png"}
							height={250}
							width="auto"
							alt=""
							style={{ position: "absolute", bottom: -75, right: -85 }}
						/>
					</Box>
				</Pulse>

				{/* esteemed clients */}
				<Box sx={classes.clientsContainer}>
					<Fade bottom cascade>
						<Typography paragraph>Esteemed Clients</Typography>
						<Box sx={classes.clientBox}>
							{[1, 2, 3, 4, 5, 6].map((i) => (
								<AccountBalanceOutlined key={i} />
							))}
						</Box>
					</Fade>
				</Box>
			</Container>
		</Box>
	);
}

const useStyles = ({ theme, animations }) => ({
	clientsContainer: {
		mt: 16,
		mb: 16,
		textAlign: "center",

		"& p": {
			fontSize: 38,
			fontWeight: "bold",
			color: "whitesmoke",
			mb: 8,
			[theme.breakpoints.down("md")]: {
				fontSize: 32,
			},
			[theme.breakpoints.down("sm")]: {
				fontSize: 26,
			},
		},
		[theme.breakpoints.down("md")]: {
			mb: 10,
		},
	},

	clientBox: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		[theme.breakpoints.down("sm")]: {
			justifyContent: "center",
		},

		flexWrap: "wrap",

		"& svg": {
			fontSize: 65,
			color: colors.dimBg,
			mx: 3.5,
			my: 2,
			transition: ".25s ease",
			"&:hover": {
				color: "whitesmoke",
				transition: "color .25s ease",
			},
		},
	},

	whyContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",

		"& h5": {
			fontSize: 38,
			fontWeight: "bold",
			color: "whitesmoke",
			mb: 10,
			[theme.breakpoints.down("md")]: {
				fontSize: 34,
				mb: 7.5,
			},
		},
	},

	whyGrid: {
		display: "flex",
		flexWrap: "wrap",
		alignItems: "center",
		justifyContent: "center",
		rowGap: 7.5,
		columnGap: 7.5,
		"& div": {
			width: 500,
			minHeight: 300,
			backgroundColor: colors.darkTile,
			borderRadius: 5,
			p: 5,
			display: "flex",
			alignItems: "flex-end",
			[theme.breakpoints.down("md")]: { width: 275, height: 275 },
			cursor: "pointer",
			backgroundSize: "cover",
			"&:nth-child(1)": {
				backgroundImage: "url('/assets/pexels-sora-shimazaki-5673488.jpg')",
			},
			"&:nth-child(2)": {
				backgroundImage: "url('/assets/planning.jpg')",
			},
			"&:nth-child(3)": {
				backgroundImage: "url('/assets/pexels-pixabay-326576.jpg')",
			},
			"&:nth-child(4)": {
				backgroundImage: "url('/assets/pexels-andrea-piacquadio-3769021.jpg')",
			},

			"& p": {
				width: "80%",
				fontWeight: "bold",
				fontSize: 22,
				color: "whitesmoke",
				transition: ".25s ease",
				"& span": { color: colors.dimText },
			},
			boxShadow: "inset 0px 0px 100px 125px rgba(0, 0, 0, 0.5)",
			transition: ".25s ease",
			"&:hover": {
				transform: "scale(1.05)",
				transition: "transform .25s ease",

				"& p": {
					transform: "translateY(-1rem)",
					transition: "transform .25s ease",
				},
			},
		},
	},

	typesGridContainer: {
		mb: 20,
		columnGap: 5,
		rowGap: 5,
		display: "flex",
		flexWrap: "wrap",
		alignItems: "center",
		justifyContent: "center",
		position: "relative",

		"& div": {
			borderRadius: 5,
			backgroundColor: colors.darkTile,
			p: 5,
			fontWeight: "bold",
			fontSize: 20,
			color: "whitesmoke",
			height: 300,
			width: 500,
			flexGrow: 1,
			position: "relative",
			"& h4": { width: 225, fontSize: 22.5, fontWeight: "bold", mt: 3.5 },
			"& p": {
				mt: 2,
				fontSize: 20,
				width: 400,
				color: "rgb(100,100,100)",
				fontWeight: 400,
				lineHeight: 1.8,
			},
			"& img": {
				width: 185,
				height: "auto",
				position: "absolute",
				bottom: 0,
				right: 5,
				transition: "all 1s ease",
			},

			"&:nth-child(1)": {
				"& img": {
					bottom: 0,
					width: 200,
					transform: `translateX(${animations[0] / 100}rem)`,
				},
			},

			"&:nth-child(2)": {
				"& img": {
					width: 375,
					right: -40,
					transform: `translateX(${-(animations[1] / 100)}rem)`,
				},
			},
			"&:nth-child(3)": {
				"& img": {
					width: 300,
					top: 0,
					right: 0,
				},
			},
			"&:nth-child(4)": {
				"& img": {
					width: "100%",
					bottom: 0,
					left: 0,
					transform: `translateY(${animations[2] / 100}rem)`,
				},
				"& p": { width: 450 },
			},
			"&:nth-child(5)": {
				"& img": {
					width: 200,
					bottom: 20,
					right: 20,
					transform: `translateX(${animations[3] / 100}rem)`,
				},
				"& p": { width: "50%" },
				flexGrow: 1,
			},

			[theme.breakpoints.down("sm")]: {
				"& h4": { width: 200 },
				"& p": { width: 250, fontSize: 16 },
				"& img": { width: 100 },
				"&:nth-child(1)": {
					"& img": {
						transform: `translateX(${animations[0] / 250}rem)`,
						width: 115,
					},
				},
				"&:nth-child(2)": { "& img": { width: 300, right: -25 } },
				"&:nth-child(5)": {
					"& img": {
						width: 125,
						bottom: 5,
						right: 2.5,
						transform: `translateX(${animations[3] / 250}rem)`,
					},
					"& p": { width: 200 },
				},
				"&:nth-child(3)": {
					pb: 7.5,
					"& img": {
						width: 200,
					},
				},
				"&:nth-child(4)": {
					"& img": { width: "100%", bottom: 0, left: 0 },
					"& p": { width: 200 },
				},
			},
		},
	},

	getInTouch: {
		width: "100%",
		height: 400,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#3e3f42",
		borderRadius: 4.5,
		textAlign: "center",
		mt: 16,
		"& section": {
			"& h4": {
				fontSize: 35,
				color: "whitesmoke",
			},
			"& div": {
				fontSize: 20,
				color: colors.dimText,
				mt: 2,
				mb: 4.5,
			},
		},
		"& button": {
			backgroundColor: colors.paleYellow,
			textTransform: "capitalize",
			fontSize: 18,
			px: 2.5,
			color: colors.bgLanding,
			boxShadow: `0px 0px 15px -2.5px ${colors.paleYellow}`,
			"&:hover": { backgroundColor: colors.paleYellow },
		},
		[theme.breakpoints.down("md")]: {
			"& section": {
				textAlign: "center",
				"& h4": { fontSize: 24 },
				"& div": { fontSize: 16 },
			},
			"& button": { fontSize: 16 },
			"& img": {
				width: 175,
				height: "auto",
			},
			height: 350,
		},
	},
});

export default TypeGrid;
