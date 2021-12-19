/*
 * @Author: chengxinyu
 * @Date: 2021-12-19 08:39:29
 * @LastEditors: chengxinyu
 * @LastEditTime: 2021-12-19 08:55:27
 */ import React, { useState, useEffect } from 'react';
import './index.less';
export default function (props) {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <div className="more">
      <p>加载完成，没有更多数据！</p>
    </div>
  );
}
