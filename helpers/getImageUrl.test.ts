import { getImageUrl } from './getImageUrl'

describe('getImageUrl', () => {
  it('returns the-dj.webp for imageId 1-4', () => {
    expect(getImageUrl(1)).toBe('/assets/the-dj.webp')
    expect(getImageUrl(2)).toBe('/assets/the-dj.webp')
    expect(getImageUrl(3)).toBe('/assets/the-dj.webp')
    expect(getImageUrl(4)).toBe('/assets/the-dj.webp')
  })

  it('returns assassin.webp for imageId 5-8', () => {
    expect(getImageUrl(5)).toBe('/assets/assassin.webp')
    expect(getImageUrl(6)).toBe('/assets/assassin.webp')
    expect(getImageUrl(7)).toBe('/assets/assassin.webp')
    expect(getImageUrl(8)).toBe('/assets/assassin.webp')
  })

  it('returns mafia-england.webp for imageId 9-12', () => {
    expect(getImageUrl(9)).toBe('/assets/mafia-england.webp')
    expect(getImageUrl(10)).toBe('/assets/mafia-england.webp')
    expect(getImageUrl(11)).toBe('/assets/mafia-england.webp')
    expect(getImageUrl(12)).toBe('/assets/mafia-england.webp')
  })

  it('returns neon-guy.webp for imageId 13-16', () => {
    expect(getImageUrl(13)).toBe('/assets/neon-guy.webp')
    expect(getImageUrl(14)).toBe('/assets/neon-guy.webp')
    expect(getImageUrl(15)).toBe('/assets/neon-guy.webp')
    expect(getImageUrl(16)).toBe('/assets/neon-guy.webp')
  })

  it('returns bassketball-girl.webp for imageId 17-20', () => {
    expect(getImageUrl(17)).toBe('/assets/bassketball-girl.webp')
    expect(getImageUrl(18)).toBe('/assets/bassketball-girl.webp')
    expect(getImageUrl(19)).toBe('/assets/bassketball-girl.webp')
    expect(getImageUrl(20)).toBe('/assets/bassketball-girl.webp')
  })

  it('returns the-dj.webp as fallback for imageId > 20', () => {
    expect(getImageUrl(21)).toBe('/assets/the-dj.webp')
    expect(getImageUrl(100)).toBe('/assets/the-dj.webp')
  })

  it('returns the-dj.webp as fallback for negative imageId', () => {
    expect(getImageUrl(-1)).toBe('/assets/the-dj.webp')
    expect(getImageUrl(-100)).toBe('/assets/the-dj.webp')
  })
})
