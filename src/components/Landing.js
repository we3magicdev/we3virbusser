import { Button, Container, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import colors from "../utils/myColors";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

function Landing() {
	const theme = useTheme();

	const classes = useStyles(theme);

	return (
		<Box sx={classes.root}>
			<Container maxWidth="xl" sx={classes.content}>
				<Fade bottom>
					<Box sx={classes.introText}>
						<Typography component="h5">
							One Stop Solution for all your CFO needs
						</Typography>
						<Typography component="section">
							Enabling entrepreneurs to focus on business, leave finance support
							functions to trained professionals.
						</Typography>
						<Button variant="contained" disableElevation disableRipple>
							Get started
						</Button>
					</Box>
				</Fade>

				<Reveal effect="zoomBigToSmall">
					<Box
						sx={{
							maxWidth: 650,
							width: "100%",
							position: "relative",

							"& .logo": {
								position: "absolute",
								top: "50%",
								left: "50%",
								transform: "translate(-50%, -50%)",
								width: 275,
								[theme.breakpoints.down("md")]: {
									width: 135,
								},
								[theme.breakpoints.between("md", "lg")]: {
									width: 175,
								},
							},
							[theme.breakpoints.down("sm")]: { maxWidth: 450 },
							[theme.breakpoints.between("sm", "md")]: { maxWidth: 500 },
							[theme.breakpoints.between("md", "lg")]: { maxWidth: 550 },
							[theme.breakpoints.between("lg", "xl")]: { maxWidth: 600 },
						}}
					>
						<img
							src={"/assets/logo-circle.svg"}
							width="100%"
							alt=""
							className="logo-outer"
						/>
						<img
							src={"/assets/Virbusser website-40.png"}
							alt=""
							className="logo"
						/>

						<Box sx={classes.circles}>
							<Controller>
								{/* from left */}
								<Scene duration={1750} triggerElement={"body"}>
									<Tween from={{ x: 150 }} to={{ x: -50 }}>
										<Box
											component="img"
											src={"/assets/svg-1.svg"}
											alt=""
											sx={{
												top: 0,
												left: 0,
												[theme.breakpoints.down("sm")]: {
													left: -50,
												},
											}}
										/>
									</Tween>
								</Scene>
								<Scene duration={1750} triggerElement={"body"}>
									<Tween from={{ x: 150 }} to={{ x: -50 }}>
										<Box
											component="img"
											src={"/assets/svg-2.svg"}
											alt=""
											sx={{
												top: 275,
												left: -125,
												[theme.breakpoints.down("sm")]: {
													top: 130,
													left: -100,
												},
											}}
										/>
									</Tween>
								</Scene>
								<Scene duration={1750} triggerElement={"body"}>
									<Tween from={{ x: 150 }} to={{ x: -50 }}>
										<Box
											component="img"
											src={"/assets/svg-3.svg"}
											alt=""
											sx={{
												bottom: 0,
												left: 0,
												[theme.breakpoints.down("sm")]: {
													left: -45,
												},
											}}
										/>
									</Tween>
								</Scene>

								<Scene duration={1750} triggerElement={"body"}>
									<Tween from={{ x: -150 }} to={{ x: 50 }}>
										<Box
											component="img"
											src={"/assets/svg-4.svg"}
											alt=""
											sx={{
												top: 0,
												right: 0,
												[theme.breakpoints.down("sm")]: {
													right: -50,
												},
											}}
										/>
									</Tween>
								</Scene>

								<Scene duration={1750} triggerElement={"body"}>
									<Tween from={{ x: -150 }} to={{ x: 50 }}>
										<Box
											component="img"
											src={"/assets/svg-5.svg"}
											alt=""
											sx={{
												top: 275,
												right: -125,
												[theme.breakpoints.down("sm")]: {
													top: 130,
													right: -100,
												},
											}}
										/>
									</Tween>
								</Scene>

								<Scene duration={1750} triggerElement={"body"}>
									<Tween from={{ x: -150 }} to={{ x: 50 }}>
										<Box
											component="img"
											src={"/assets/svg-6.svg"}
											alt=""
											sx={{
												bottom: 0,
												right: 0,
												[theme.breakpoints.down("sm")]: {
													right: -45,
												},
											}}
										/>
									</Tween>
								</Scene>
							</Controller>
						</Box>
					</Box>
				</Reveal>
			</Container>
		</Box>
	);
}

const useStyles = (theme) => ({
	root: {
		backgroundColor: colors.bgLanding,
		minHeight: "100vh",
		width: "100vw",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	content: {
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		mx: 7.5,
		[theme.breakpoints.down("md")]: {
			flexDirection: "column-reverse",
			p: 3.5,
			mx: 0,
			mt: 10,
		},
	},
	introText: {
		maxWidth: 500,
		width: "100%",
		"& h5": {
			fontSize: 42,
			color: "whitesmoke",
			fontWeight: "bold",
			lineHeight: 1.35,
		},
		"& section": {
			fontWeight: 400,
			fontSize: 22,
			color: colors.dimText,
			mt: 4,
			mb: 6.5,
			lineHeight: 2,
		},
		"& button": {
			backgroundColor: colors.paleYellow,
			textTransform: "capitalize",
			fontSize: 18,
			px: 2.5,
			py: 1.5,
			color: colors.bgLanding,
			boxShadow: `0px 0px 15px -2.5px ${colors.paleYellow}`,
			"&:hover": { backgroundColor: colors.paleYellow, boxShadow: "none" },
		},
		[theme.breakpoints.down("sm")]: {
			"& button": {
				width: "100%",
			},
		},

		[theme.breakpoints.down("md")]: {
			"& h5": { fontSize: 28 },
			"& section": { fontSize: 18, lineHeight: 1.8 },
			"& button": { fontSize: 16 },
			mt: 7.5,
		},
		[theme.breakpoints.between("md", "lg")]: {
			"& h5": { fontSize: 27 },
			"& section": { fontSize: 20, mr: 3 },
			"& button": { fontSize: 16 },
		},
	},

	circles: {
		"& img": {
			width: 110,
			position: "absolute",
			transition: "all .25s ease",

			[theme.breakpoints.down("md")]: {
				width: 75,
			},
		},
	},
});

export default Landing;
