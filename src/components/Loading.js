/*
 * @Author: chengxinyu
 * @Date: 2021-12-19 08:38:55
 * @LastEditors: chengxinyu
 * @LastEditTime: 2021-12-20 15:54:16
 */
import React, { useEffect } from 'react';
import './index.less';
function Loading() {
  // const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <div className="loading">
      {/* <p>加载中...</p> */}
      <img src={require('@/assets/img/ing.gif')}></img>
    </div>
  );
}
export default Loading;
