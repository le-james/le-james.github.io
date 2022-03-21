import React from 'react'
import Content from "./slideContent/fourthContent"

function FourthSlide({ wordVariants, letterVariants }) {
    return (
        <React.Fragment >
            <Content wordVariants={wordVariants} letterVariants={letterVariants} />
        </React.Fragment>
    )
}

export default FourthSlide