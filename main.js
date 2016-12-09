"use struct";

const dashButton = require("node-dash-button");

const dash = dashButton("34:d2:70:e6:59:15", null, null, "all");
dash.on("detected", () => {
    console.info("omg found")
});
