/*
 * @Author: chengxinyu
 * @Date: 2021-12-19 08:39:29
 * @LastEditors: chengxinyu
 * @LastEditTime: 2021-12-19 08:40:31
 */ import React, { useState, useEffect } from 'react';
import './index.less';
export default function (props) {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <div className="more">
      <p>加载更多...</p>
    </div>
  );
}
