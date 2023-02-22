import React from 'react';
import style from './Animation.module.css';
function Animation() {
  return (
    <div>
      <div className={style.area}>
        <ul className={style.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Animation;
