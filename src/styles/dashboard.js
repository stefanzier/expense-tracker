import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "overview-container": {
        "display": "flex",
        "flexWrap": "wrap",
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textAlign": "center",
        "backgroundColor": "#27AE60"
    },
    "overview-item": {
        "flex": 1,
        "color": "white",
        "paddingTop": 30,
        "paddingBottom": 30
    },
    "overview-item p": {
        "fontSize": 20,
        "marginTop": 20
    }
});