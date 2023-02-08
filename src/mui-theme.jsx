import { createTheme } from "@mui/material/styles";

export const theme = createTheme( {
    palette: {
        primary: {
          main: "#594A26",
          light: "#97ABB1",
        },
        secondary: {
          main: "#97ABB1",
        },
        success: {
          main: "#76B561",
        },
      },
	typography: {
		fontSize: 14,
		fontFamily: "Urbanist, sans-serif",
		h1: {
			fontFamily: "Urbanist, sans-serif",
			color: "#243748",
			fontSize: "24px",
			fontWeight: 700,
		},
		h2: {
			fontFamily: "Urbanist, sans-serif",
			color: "#243748",
			fontSize: "22px",
			fontWeight: 700
		},
		h3: {
			fontFamily: "Urbanist, sans-serif",
			color: "#243748",
			fontSize: "18px",
			fontWeight: 700
		},
		subtitle1: {
			fontFamily: "Urbanist, sans-serif",
			color: "#243748",
			fontSize: "12px",
			fontWeight: 500
		},
		subtitle2: {
			fontFamily: "Urbanist, sans-serif",
			color: "#243748",
			fontSize: "20px",
			fontWeight: 800
		},
		subtitle3: {
			fontFamily: "Urbanist, sans-serif",
			color: "#243748",
			fontSize: "18px",
			fontWeight: 700
		},
		caption: {
			fontFamily: "Urbanist, sans-serif",
			textTransform: "uppercase",
			fontWeight: 600,
			fontSize: "12px",
			lineHeight: "18px",
			color: "#5A7DA1"
		},
		body1: {
			fontFamily: "Urbanist, sans-serif",
			color: "#243748",
			fontSize: "14px",
			fontWeight: 400,
		},
		body2: {
			fontFamily: "Urbanist, sans-serif",
			color: "#243748",
			fontSize: "12px",
			fontWeight: 400,
		},
	},
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    height: "40px",
                    boxShadow: "0px 15px 35px rgba(32, 124, 254, 0.2)",
                    borderRadius: "24px",
                    textTransform: "none",
                    fontSize: "12px",
                    fontWeight: 600
                },
                containedPrimary: {
                    background: "linear-gradient(180deg, #44BBFE 0%, #1E78FE 100%)",
                }
            }
        },
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
                    border: "1px solid #EBEBEB",
					borderRadius: "30px",
					fontFamily: "Urbanist, sans-serif",
					color: "#0D1636",
					fontSize: "14px",
					fontWeight: 500,
					fontStyle: "normal",
					lineHeight: "120%",
					opacity: "0.7",
                },
			}
		}, 
		MuiLink: {
			styleOverrides: {
				root: {
					textDecoration: "none",
					color: "#0D1636",
				}
			}
		}
    }
} );


