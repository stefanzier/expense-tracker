import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "login-container": {
        "textAlign": "center",
        "paddingTop": "10%"
    },
    "login-container h1": {
        "color": "#27AE60",
        "letterSpacing": 5
    },
    "login-input": {
        "textAlign": "center",
        "width": "30%",
        "height": 40,
        "marginBottom": 5,
        "border": "1px solid #27AE60",
        "borderRadius": 5,
        "fontSize": 18,
        "color": "#27AE60",
        "outline": "none"
    },
    "::placeholder": {
        "fontSize": 18,
        "marginTop": 10
    },
    "login-button": {
        "width": 200,
        "height": 40,
        "borderRadius": 50,
        "backgroundColor": "#44A4D9",
        "border": "none",
        "marginTop": 20
    },
    "login-button a": {
        "textDecoration": "none",
        "fontSize": 20,
        "color": "white",
        "fontWeight": "600"
    }
});