export interface VariableDefinition {
    name: string
    syntax: string
    initialValue: string | number
    inherits: boolean
}

export interface WorkletDefinition {
    name: string
    vars: VariableDefinition[]
    blob: Blob
}
