const path = require("path")
const config = require("../../webpack.config")
const webpack = require("webpack")
const chalk = require("chalk")
const fs = require("fs")

const DEV_SERVER_PORT = 9990

console.log(
    chalk.bold.green(`\nRunning at: https://localhost:${DEV_SERVER_PORT}/\n`)
)

config.entry = {
    framer: [
        "react-dev-utils/webpackHotDevClient",
        path.join(__dirname, "..", "..", "src", "index"),
        path.join(__dirname, "index"),
    ],
}

config.devServer = {
    contentBase: path.join(__dirname),
    hot: false,
    inline: false,
    // quiet: true,
    // open: true,
    // openPage: "/",
    stats: "errors-only",
    port: DEV_SERVER_PORT,
    https: true,
    // https: {
    //     key: fs.readFileSync("localhost-key.pem"),
    //     cert: fs.readFileSync("localhost.pem"),
    //     // ca: fs.readFileSync("/path/to/ca.pem"),
    // },
}

Object.assign(exports, config)
