// Get image url based on imageId.
// This is just a mock implementation.
export function getImageUrl(imageId: number) {
  if (imageId <= 4) return '/assets/the-dj.webp'
  if (imageId <= 8) return '/assets/assassin.webp'
  if (imageId <= 12) return '/assets/mafia-england.webp'
  if (imageId <= 16) return '/assets/neon-guy.webp'
  if (imageId <= 20) return '/assets/bassketball-girl.webp'
  return '/assets/the-dj.webp'
}
