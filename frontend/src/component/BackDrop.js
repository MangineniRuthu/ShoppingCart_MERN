import React from 'react';
import "../index"

export default function BackDrop({show,click}) {
  return (
    show && <div className='backdrop' onClick={click}>

    </div>
  )
}
