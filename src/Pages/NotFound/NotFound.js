import React from 'react'
import { Link } from 'react-router-dom'
import notFound from '../../images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <img src={notFound} alt="not found image"></img>
            <Link to="/"><button>Go Back</button></Link>
        </div>
    )
}

export default NotFound
