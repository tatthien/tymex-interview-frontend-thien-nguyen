export function removeUndefined(obj: Record<string, any>) {
  return Object.entries(obj).reduce<Record<string, any>>(
    (acc, [key, value]) => {
      if (value !== undefined) {
        if (
          value !== null &&
          !Array.isArray(value) &&
          typeof value === 'object'
        ) {
          acc[key] = removeUndefined(value)
        } else {
          acc[key] = value
        }
      }

      return acc
    },
    {}
  )
}
