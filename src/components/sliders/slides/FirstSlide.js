import React from 'react'
import FirstContent from "./slideContent/firstContent"

function FirstSlide({ wordVariants, letterVariants }) {
    return (
        <React.Fragment> 
            <FirstContent wordVariants={wordVariants} letterVariants={letterVariants} />
        </React.Fragment>
    )
}

export default FirstSlide