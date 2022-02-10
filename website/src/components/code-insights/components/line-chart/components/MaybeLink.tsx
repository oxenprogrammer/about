import React from 'react'

import { Link } from 'react-router-dom'

interface MaybeLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to?: string
}

/** Wraps the children in a link if to (link href) prop is passed. */
export const MaybeLink: React.FunctionComponent<MaybeLinkProps> = ({ children, to, ...props }) =>
    to ? (
        <Link {...props} to={to}>
            {children}
        </Link>
    ) : (
        (children as React.ReactElement)
    )
