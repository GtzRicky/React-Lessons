import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({children}) => {
    return (
        <div style={{display: 'flex'}}>
            <div style={{ flexBasis: 200 }}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>
            </div>
            <div style={{flex: 1}}>
                {children}
            </div>            
        </div>
    )
}

export default Layout