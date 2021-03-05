import * as React from "react"
import { usePaint, squircle, polka } from "@framer"

export function App() {
    const paintStyle = usePaint({
        background: polka,
        mask: squircle,
    })

    return (
        <>
            <div style={{ ...box, ...paintStyle }} />
            <Logo />
        </>
    )
}

const box = {
    width: 300,
    height: 300,
}

function Logo() {
    return (
        <h1 style={logo}>
            Framer <span style={{ color: "#ff0055" }}>P</span>
            <span style={{ color: "#ffaa00" }}>a</span>
            <span style={{ color: "#22cc88" }}>i</span>
            <span style={{ color: "#0099ff" }}>n</span>
            <span style={{ color: "#8855ff" }}>t</span>
        </h1>
    )
}

// import { motion } from "@framer"

// if (CSS.paintWorklet) {
//     CSS.registerProperty({
//         name: "--squircle-radius",
//         syntax: "<number>",
//         initialValue: 0,
//         inherits: false,
//     })
//     CSS.registerProperty({
//         name: "--squircle-color",
//         syntax: "<color>",
//         initialValue: "black",
//         inherits: false,
//     })
//     CSS.registerProperty({
//         name: "--polka-color",
//         syntax: "<color>",
//         initialValue: "#09f",
//         inherits: false,
//     })
//     CSS.registerProperty({
//         name: "--polka-background-color",
//         syntax: "<color>",
//         initialValue: "rgba(0,0,0,0)",
//         inherits: false,
//     })
//     CSS.registerProperty({
//         name: "--polka-size",
//         syntax: "<number>",
//         initialValue: 60,
//         inherits: false,
//     })
//     CSS.registerProperty({
//         name: "--polka-gap",
//         syntax: "<number>",
//         initialValue: 30,
//         inherits: false,
//     })
//     CSS.registerProperty({
//         name: "--polka-offset-x",
//         syntax: "<number>",
//         initialValue: 0,
//         inherits: false,
//     })
//     CSS.registerProperty({
//         name: "--polka-offset-y",
//         syntax: "<number>",
//         initialValue: 0,
//         inherits: false,
//     })
//     CSS.paintWorklet.addModule("worklets/squircle.js")
//     CSS.paintWorklet.addModule("worklets/polka.js")
// }

// /**
//  * An example of animating the filter property.
//  */

// const style = {
//     width: 300,
//     height: 300,
//     // WebkitMaskImage: "paint(squircle)",
//     // background: "paint(polka)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     // "--polka-color": "#ff0055",
//     // "--polka-background-color": "#ffaa00",
// }

// const dot = {
//     width: 60,
//     height: 60,
//     backgroundColor: "#09f",
//     borderRadius: "50%",
// }

// export const App = () => {
//     return (
//         <div style={stretch}>
//             <motion.div
//                 // initial={{ "--polka-offset-x": 0, "--polka-offset-y": 0 }}
//                 // animate={{
//                 //     "--polka-offset-x": 1000,
//                 //     "--polka-offset-y": 1000,
//                 // }}
//                 transition={{
//                     duration: 60,
//                     repeat: Infinity,
//                     ease: "linear",
//                 }}
//                 style={style}
//             >
//                 {/* <motion.div
//                     drag
//                     dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
//                     dragElastic={1}
//                     style={dot}
//                 /> */}
//             </motion.div>
//             <h1 style={logo}>
//                 Framer <span style={{ color: "#ff0055" }}>P</span>
//                 <span style={{ color: "#ffaa00" }}>a</span>
//                 <span style={{ color: "#22cc88" }}>i</span>
//                 <span style={{ color: "#0099ff" }}>n</span>
//                 <span style={{ color: "#8855ff" }}>t</span>
//             </h1>
//         </div>
//     )
// }

// const stretch = {
//     position: "fixed",
//     background: "white",
//     inset: 0,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "column",
// }

const logo = {
    lineHeight: 1.08,
    letterSpacing: "-.046em",
    fontFamily: "GT Walsheim",
    marginTop: 40,
    fontSize: 48,
}
