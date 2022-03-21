import React from 'react'
import Content from "./slideContent/thirdContent"

function ThirdSlide({ wordVariants, letterVariants }) {
    return (
        <React.Fragment >
            <Content wordVariants={wordVariants} letterVariants={letterVariants} />
        </React.Fragment>
    )
}

export default ThirdSlide