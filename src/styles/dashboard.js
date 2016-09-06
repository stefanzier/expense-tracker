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
        "fontWeight": "200",
        "marginTop": 20
    },
    "transactions-container": {
        "width": "100%",
        "height": "auto",
        "marginTop": 20
    },
    "transactions-header": {
        "textAlign": "center",
        "textTransform": "uppercase",
        "color": "#27AE60",
        "letterSpacing": 3,
        "fontSize": 10
    },
    "transaction-history": {
        "marginTop": 20
    },
    "transaction-container": {
        "display": "flex",
        "backgroundColor": "#ECF0F1",
        "borderTopWidth": 2,
        "borderBottomWidth": 2,
        "border": "1px solid #27AE60",
        "borderLeftWidth": 0,
        "borderRightWidth": 0,
        "marginTop": 3
    },
    "transaction-title-container": {
        "flex": 1,
        "paddingLeft": 20,
        "textAlign": "left"
    },
    "transaction-title": {
        "color": "#27AE60",
        "fontWeight": "400"
    },
    "transaction-amount-container": {
        "flex": 1,
        "textAlign": "right",
        "paddingRight": 20
    },
    "transaction-amount": {
        "color": "#E74C3C",
        "fontWeight": "700"
    }
});