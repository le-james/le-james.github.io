import React from 'react'
import Content from "./slideContent/secondContent"

function SecondSlide({ wordVariants, letterVariants }) {
    return (
        <React.Fragment >
            <Content wordVariants={wordVariants} letterVariants={letterVariants} />
        </React.Fragment>
    )
}

export default SecondSlide