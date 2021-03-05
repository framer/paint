import * as React from "react"
import { WorkletDefinition } from "../../worklets/types"

export interface PaintOptions {
    background?: WorkletDefinition
    mask?: WorkletDefinition
}

export function usePaint({ background, mask }: PaintOptions) {
    React.useLayoutEffect(() => {
        background && registerPaintWorklet(background)
        mask && registerPaintWorklet(mask)
    }, [])

    const styles: React.CSSProperties = {}

    if (background) {
        styles.background = `paint(${background.name})`
    }

    if (mask) {
        styles.WebkitMaskImage = `paint(${mask.name})`
    }

    return styles
}

const registeredPaintWorklets = new Set<string>()
function registerPaintWorklet({ name, vars, blob }: WorkletDefinition) {
    if (registeredPaintWorklets.has(name)) return

    registeredPaintWorklets.add(name)

    vars.forEach((variable) => {
        ;(CSS as any).registerProperty({
            ...variable,
            name: `--${name}-${variable.name}`,
        })
    })
    ;(CSS as any).paintWorklet.addModule(blob)
}
