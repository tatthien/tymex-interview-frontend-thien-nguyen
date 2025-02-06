import type { SVGProps } from 'react'
import * as React from 'react'

export function IconHandset(props: SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm3.93 11.393-.053.054a2.46 2.46 0 0 1-3.05.333 14.473 14.473 0 0 1-4.617-4.607 2.46 2.46 0 0 1 .333-3.05l.053-.053a.803.803 0 0 1 1.227.107l1.09 1.56a.797.797 0 0 1-.09 1.026l-.063.067a.607.607 0 0 0-.1.743 5.037 5.037 0 0 0 1.767 1.76c.24.143.548.101.743-.1l.066-.063a.797.797 0 0 1 1.027-.09l1.56 1.09a.804.804 0 0 1 .107 1.223Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
