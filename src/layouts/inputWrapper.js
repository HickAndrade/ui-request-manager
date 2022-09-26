import React from 'react'

const InputWrapper = ({ inputId, inputName, htmlFor, styleWrapper, handlingEvent, name, transition }) =>(
  <div className='input-wrapper' style={styleWrapper}>
    <input type='text' id={inputId} className='form-input' placeholder=' '  name={name} onInput={handlingEvent} style={{transition: transition}}/>
    <div className='animated-focus'>
      <span className='focus-input'></span>
      <label htmlFor={htmlFor}>{inputName}</label>
    </div>
  </div>
)


export default InputWrapper