import React from 'react';

const HorizontalLine = (params) => {
    var style = {
        position: 'absolute',
        border: 'none',
        height: params.size,
        width:  params.width ,
        left: params.left,
        backgroundColor: params.color
    };

    return(
        <div style={style}></div>
    )
}

export default HorizontalLine;