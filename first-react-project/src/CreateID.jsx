import React from 'react'
import './Content.css'
import './CreateID.css'

const CreateID = () => {
  return (
    <div className="content">
      <h3><span className="material-symbols-outlined">add_circle</span>ID＆QRコード生成</h3>
      <label for="initial-balance">初期残高</label>
      <div className="input-before">
        <span>$</span>
        <input type="number" id='initial-balance' value='100' placeholder='0' />
      </div>
      <button className='btn'><span class="material-symbols-outlined">library_add</span>ID＆QRコードを生成</button>
    </div>
  )
}

export default CreateID