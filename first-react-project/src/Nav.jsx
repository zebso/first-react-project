import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <nav className="side-nav">
      <div className="logos">
        <span className="material-symbols-outlined">currency_exchange</span>
        <div className="contents-right">
          <h4>通貨システム</h4>
          <p>管理アプリ</p>
        </div>
      </div>
      <ul>
        <li className="current-page"><a href="#"><span className="material-symbols-outlined">finance</span>一覧</a></li>
        <li><a href="#"><span className="material-symbols-outlined">library_add</span>ID生成</a></li>
        <li><a href="#"><span className="material-symbols-outlined">wallet</span>残高更新</a></li>
        <li><a href="#"><span className="material-symbols-outlined">history</span>取引履歴</a></li>
        <li><a href="#"><span className="material-symbols-outlined">settings</span>設定</a></li>
      </ul>
    </nav>
  )
}

export default Nav