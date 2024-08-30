import './Style/App.css'
import { useState } from 'react'

function Button({n, to, className = 'Button'}) {

    return (
        <button className={className} onClick={() => to && to(n)}>{n}</button>
    )
}

export default Button