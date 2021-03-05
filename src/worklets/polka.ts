export const polka = {
    name: "polka",
    vars: [
        {
            name: "color",
            syntax: "<color>",
            initialValue: "#09f",
            inherits: false,
        },
        {
            name: "background-color",
            syntax: "<color>",
            initialValue: "rgba(0,0,0,0)",
            inherits: false,
        },
        {
            name: "size",
            syntax: "<number>",
            initialValue: 60,
            inherits: false,
        },
        {
            name: "gap",
            syntax: "<number>",
            initialValue: 25,
            inherits: false,
        },
        {
            name: "offset-x",
            syntax: "<number>",
            initialValue: 0,
            inherits: false,
        },
        {
            name: "offset-y",
            syntax: "<number>",
            initialValue: 0,
            inherits: false,
        },
    ],
    // TODO Generate these from compiled typescript
    blob: URL.createObjectURL(
        new Blob(
            [
                `function wrap(min, max, v) {
                const rangeSize = max - min
                return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
            }
            
            registerPaint(
                "polka",
                class {
                    static get inputProperties() {
                        return [
                            "--polka-color",
                            "--polka-background-color",
                            "--polka-size",
                            "--polka-gap",
                            "--polka-offset-x",
                            "--polka-offset-y",
                        ]
                    }
            
                    static get inputArguments() {
                        return ["<length>"]
                    }
            
                    paint(ctx, { width, height }, styles) {
                        const size = styles.get("--polka-size").value
                        const gap = styles.get("--polka-gap").value
                        const offsetX = styles.get("--polka-offset-x").value
                        const offsetY = styles.get("--polka-offset-x").value
            
                        ctx.fillStyle = styles.get("--polka-background-color")
                        ctx.fillRect(0, 0, width, height)
            
                        const numCirclesX = width / (size + gap) + 1
                        const numCirclesY = height / (size + gap) + 1

                        ctx.fillStyle = styles.get("--polka-color")

                        for (let xIndex = 0; xIndex <= numCirclesX; xIndex++) {
                            for (let yIndex = 0; yIndex <= numCirclesY; yIndex++) {
                                let xOffset = offsetX + ((size + gap) * xIndex - gap)
                                if (yIndex % 2) xOffset = xOffset + (size + gap) / 2
                                const x = wrap(0 - size, width + size + gap, xOffset)
                                const y = wrap(
                                    0 - size,
                                    height + size + gap,
                                    offsetY + ((size + gap) * yIndex - gap)
                                )
                                ctx.beginPath()
                                ctx.arc(x, y, size / 2, 0, 2 * Math.PI)
                                ctx.fill()
                            }
                        }
                    }
                }
            )
            `,
            ],
            { type: "application/javascript" }
        )
    ),
}
