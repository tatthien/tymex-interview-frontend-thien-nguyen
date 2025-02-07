import { removeUndefined } from './removeUndefined'

describe('removeUndefined', () => {
  it('removes undefined values from object', () => {
    const input = {
      name: 'John',
      age: 30,
      email: undefined,
      address: undefined,
      active: true,
    }

    const expected = {
      name: 'John',
      age: 30,
      active: true,
    }

    expect(removeUndefined(input)).toEqual(expected)
  })

  it('returns empty object when all values are undefined', () => {
    const input = {
      name: undefined,
      age: undefined,
      email: undefined,
    }

    expect(removeUndefined(input)).toEqual({})
  })

  it('returns same object when no undefined values exist', () => {
    const input = {
      name: 'John',
      age: 30,
      active: false,
    }

    expect(removeUndefined(input)).toEqual(input)
  })

  it('handles nested objects correctly', () => {
    const input = {
      name: 'John',
      details: {
        age: 30,
        email: undefined,
      },
      preferences: undefined,
    }

    const expected = {
      name: 'John',
      details: {
        age: 30,
        email: undefined,
      },
    }

    expect(removeUndefined(input)).toEqual(expected)
  })

  it('preserves null values', () => {
    const input = {
      name: 'John',
      age: null,
      email: undefined,
    }

    const expected = {
      name: 'John',
      age: null,
    }

    expect(removeUndefined(input)).toEqual(expected)
  })

  it('works with different value types', () => {
    const input = {
      string: 'text',
      number: 42,
      boolean: true,
      array: [1, 2, 3],
      object: { key: 'value' },
      null: null,
      undefined: undefined,
    }

    const expected = {
      string: 'text',
      number: 42,
      boolean: true,
      array: [1, 2, 3],
      object: { key: 'value' },
      null: null,
    }

    expect(removeUndefined(input)).toEqual(expected)
  })
})
