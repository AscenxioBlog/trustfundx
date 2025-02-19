import React from 'react'

function CustomBtn(props) {
    const btnStyle = {
        height: props.height,
        width: props.width,
        backgroundColor: props.backgroundColor,
        borderRadius: props.borderRadius,
        label: props.label,
        color: props.color || 'white',
        border: props.border || 'none',
        cursor: 'pointer',
        fontWeight: 'medium',
        marginTop: props.marginTop

    }
  return (
    <div>
      <button className={props.className} style={btnStyle} onClick={props.onClick}>{props.label}</button>
    </div>
  )
}

export default CustomBtn
