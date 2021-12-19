/*
 * @Author: chengxinyu
 * @Date: 2021-12-19 08:38:55
 * @LastEditors: chengxinyu
 * @LastEditTime: 2021-12-19 08:48:27
 */
import React, { useState, useEffect } from 'react';
import './index.less';
export default function (props) {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <div className="loading">
      {/* <p>加载中...</p> */}
      <img src={require('@/assets/img/ing.gif')}></img>
    </div>
  );
}
