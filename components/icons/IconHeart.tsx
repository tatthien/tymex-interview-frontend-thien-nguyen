import * as React from 'react'
import { SVGProps } from 'react'

export function IconHeart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <path
        fill="#fff"
        stroke="#fff"
        strokeWidth={2}
        d="m11.32 6.005.68.63.68-.63A3.693 3.693 0 0 1 15.206 5c.99 0 1.934.395 2.663 1.133 1.51 1.544 1.506 3.937.002 5.467L12 17.573 6.13 11.6a3.87 3.87 0 0 1-.002-5.464C6.861 5.395 7.805 5 8.795 5c.932 0 1.82.351 2.525 1.005Z"
      />
    </svg>
  )
}
