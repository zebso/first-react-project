import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
      <header>
        <h1>カジノ通貨管理</h1>
        <div className="logos">
          <span className="material-symbols-outlined">currency_exchange</span>
          <div className="contents-right">
            <h4>通貨システム</h4>
            <p>管理アプリ</p>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header