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
  PUBLIC_SOME_BOOLEAN: asBoolean(import.meta.env.PUBLIC_SOME_BOOLEAN),
  PUBLIC_SOME_NUMBER: asNumber(import.meta.env.PUBLIC_SOME_NUMBER),
  PUBLIC_TIMESTAMP: asString(import.meta.env.PUBLIC_TIMESTAMP),
}

export { env }
