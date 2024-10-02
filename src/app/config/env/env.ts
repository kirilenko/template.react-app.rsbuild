const asBoolean = (value: string | null = null): boolean | null => {
  if (value === null) return null
  return value === 'true'
}

const asNumber = (value: string | null = null): number | null => {
  if (value === null) return null
  const numberValue = Number(value)
  return Number.isNaN(numberValue) ? null : numberValue
}

const asString = (value: string | null = null): string => {
  return value ?? ''
}

const env = {
  PUBLIC_COMMON_VAR: asString(process.env.PUBLIC_COMMON_VAR),
  PUBLIC_SOME_BOOLEAN: asBoolean(process.env.PUBLIC_SOME_BOOLEAN),
  PUBLIC_SOME_NUMBER: asNumber(process.env.PUBLIC_SOME_NUMBER),
  PUBLIC_TIMESTAMP: asString(process.env.PUBLIC_TIMESTAMP),
}

export { env }
