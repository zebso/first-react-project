import React from 'react'
import InfoContent from './InfoContent'
import './Information.css'

const Information = () => {
  return (
    <div className='informations'>
      <div>
        <InfoContent icon='supervisor_account' title='有効ID数' num='1' />
        <InfoContent icon='request_quote' title='合計発行通貨' num='￥9,500' />
      </div>
      <div>
        <InfoContent icon='sync_alt' title='今日の取引数' num='2' />
        <InfoContent icon='qr_code' title='発行QRコード数' num='1' />
      </div>
    </div>
  )
}

export default Information