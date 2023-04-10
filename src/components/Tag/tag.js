import React from 'react'

const Tag = ({
    content,
}) => {

    const tagStyle = {
        borderRadius: '5px',
        color: '#4A4754',
        backgroundColor: '#E8E8EA',
        padding: '6px 8px 6px 8px',
        width: 'fit-content',
        margin: '0 8px 8px 0',
        float: 'left',
        fontSize: '12px',
    }

    return (
        <>
        <div style={tagStyle}>
            {content}
        </div>
        </>
    )
}

export default Tag