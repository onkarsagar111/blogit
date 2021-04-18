import React from 'react';

const VerticalLine = (params) => {
    var style = {
        position: 'absolute',
        border: 'none',
        width: params.size,
        height:  params.height ,
        left: params.left,
        backgroundColor: params.color
    };

    return(
        <div style={style}></div>
    )
}

export default VerticalLine;