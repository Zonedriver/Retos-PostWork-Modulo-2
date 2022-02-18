import React from 'react'

function Herobox({className, name, heroName, children}) {
    return (
        <div className={className}>
            <h1>Mi Nombre es {name} y yo soy {heroName}</h1>
            {children}
        </div>
    )
}

export default Herobox
