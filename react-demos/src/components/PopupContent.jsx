import React from 'react'

const PopupContent = ({copied}) => {
  return (
    <section>
        {copied && (
            <div style ={{position:'absolute', bottom:'3rem'}}>
                copied to clipboard
            </div>
        )}
    </section>)
  
}

export default PopupContent