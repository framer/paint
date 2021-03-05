export interface VariableDefinition {
    name: string
    syntax: string
    initialValue: string | number
    inherits: boolean
}

export interface WorkletDefinition<O = any> {
    name: string
    vars: VariableDefinition[]
    blob: string
    options: (options: O) => any
}
