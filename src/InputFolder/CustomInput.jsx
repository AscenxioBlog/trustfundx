import React from 'react'

function CustomInput({ type, name, value, onInput, placeholder, className, style, ...rest }) {
  return (
    <div>
           <input
            type={type}
            name={name}
            value={value}
            onInput={onInput}
            placeholder={placeholder}
            className={className}
            style={style}
            {...rest}
        />
    </div>
  )
}

export default CustomInput
