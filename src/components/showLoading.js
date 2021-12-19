/*
 * @Author: chengxinyu
 * @Date: 2021-12-19 08:39:29
 * @LastEditors: chengxinyu
 * @LastEditTime: 2021-12-19 13:37:35
 */

import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

import './index.less';

export default function ShowLoading(props) {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <div>
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

// ShowLoading.defaultProps = {
//   showLoading: true,
// };

// ShowLoading.propTypes = {
//   showLoading: PropTypes.bool
// };
