import React from 'react'
import "./Border.css"

function Border() {
  return (
    <div className='border'>
      <button><a href="#/">home page</a></button>
      <div className='score'>your score is: (adding score mecanizem!!)</div>
      <div><button>easy</button><button>medium</button><button>hard</button></div>
    </div >
  )
}

export default Border
