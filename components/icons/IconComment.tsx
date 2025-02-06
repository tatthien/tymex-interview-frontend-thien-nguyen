import type { SVGProps } from 'react'
import * as React from 'react'

export function IconComment(props: SVGProps<SVGSVGElement>) {
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
        d="M18.095 4H5.905A1.905 1.905 0 0 0 4 5.905v9.143c0 1.052.853 1.904 1.905 1.904H7.81v2.286a.762.762 0 0 0 1.299.537l2.822-2.823h6.164A1.905 1.905 0 0 0 20 15.048V5.905A1.905 1.905 0 0 0 18.095 4Zm-4.571 8.952H8.57a.762.762 0 1 1 0-1.523h4.953a.762.762 0 1 1 0 1.523Zm1.905-3.428H8.57a.762.762 0 0 1 0-1.524h6.858a.762.762 0 1 1 0 1.524Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
