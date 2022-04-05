import React from 'react'
import { Link } from 'react-router-dom'
import GoogleOath from './GoogleOath'
const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
            <Link to='/'>
                Streamy
            </Link>
            <div className='right menu'>
                <Link to='/'>All Streams</Link>
            </div>
            <div style={{ paddingLeft: '10px' }}>
                <GoogleOath />
            </div>
        </div >
    )
}

export default Header