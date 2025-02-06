import styles from './Skeleton.module.css'

type SkeletonProps = {
  width?: number | string
  height?: number | string
  radius?: number | string
  circle?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export function Skeleton({ width, height, radius, ...props }: SkeletonProps) {
  return (
    <div
      style={{
        ...props.style,
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        borderRadius: typeof radius === 'number' ? `${radius}px` : radius,
      }}
      {...props}
      className={styles.root}
    />
  )
}
