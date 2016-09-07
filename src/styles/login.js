import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "login-container": {
        "display": "flex",
        "minHeight": 750,
        "textAlign": "center"
    },
    "brand-container": {
        "flex": 1,
        "minHeight": 750,
        "marginTop": 270
    },
    "button-container": {
        "flex": 1,
        "backgroundColor": "#27AE60",
        "minHeight": 750
    },
    "login-title": {
        "color": "#27AE60"
    },
    "login-button": {
        "marginTop": 300,
        "height": 50,
        "width": 200,
        "borderRadius": 20,
        "border": "none",
        "backgroundColor": "white"
    },
    "login-button a": {
        "color": "#27AE60",
        "fontSize": 20
    }
});