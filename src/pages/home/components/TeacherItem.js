/* eslint-disable react/prop-types */
/*
 * @Author: chengxinyu
 * @Date: 2021-12-18 14:12:02
 * @LastEditors: chengxinyu
 * @LastEditTime: 2021-12-20 15:56:08
 */
import React, { useState, useEffect } from 'react';
import './index.less';

function TeacherItem(props) {
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState();
  // eslint-disable-next-line react/prop-types
  const { img, username, position, introduce, tags } = props.teacherData;

  useEffect(() => {}, []);

  return (
    <div className="teacherItem">
      <div className="box">
        <div className="box_top">
          <div className="pic">
            <img src={img} alt="teacher_Pic"></img>
          </div>
          <div className="name">
            <p className="p_name">{username}</p>
            <p className="p_info">{position}</p>
          </div>
        </div>
        <div className="box_info">
          <p>{introduce}</p>
        </div>
        <div className="show_tips">
          {tags.includes('新手') ? <span className="col1">新手</span> : ''}
          {tags.includes('产品') ? <span className="col2">店铺运营</span> : ''}
          {tags.includes('服饰服装') ? (
            <span className="col3">服饰服装</span>
          ) : (
            ''
          )}
          {tags.includes('数据运营') ? (
            <span className="col4">数据运营</span>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}
export default TeacherItem;
