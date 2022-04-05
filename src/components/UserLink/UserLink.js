import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function UserLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{
                    padding: match ? "20px" : "none",
                    borderRadius: match ? "30px" : "none",
                    backgroundColor: match ? "dark" : "slate",
                    boxShadow: match ? "0 0 5px #888888" : "none",
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}
export default UserLink;