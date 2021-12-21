/* eslint-disable react/prop-types */
/*
 * @Author: chengxinyu
 * @Date: 2021-12-19 08:39:29
 * @LastEditors: chengxinyu
 * @LastEditTime: 2021-12-21 10:22:32
 */

import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

import './index.less';

function ShowLoading(props) {
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <div id="showLoading">
      {props.showLoading ? (
        <div className="loading-info">
          <p>加载更多...</p>
        </div>
      ) : (
        <div className="loading-info">
          <p>没有数据了...</p>
        </div>
      )}
    </div>
  );
}

export default ShowLoading;
