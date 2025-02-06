export type ListResponse<T> = {
  first: number
  prev: number | null
  next: number
  last: number
  pages: number
  items: number
  data: T[]
}
