/*
 * @Author: chengxinyu
 * @Date: 2021-12-18 14:12:02
 * @LastEditors: chengxinyu
 * @LastEditTime: 2021-12-18 16:28:27
 */ import React, { useState, useEffect } from 'react';

export default function (props) {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <div className="teacherItem">
      <div className="box">
        <div className="box_top">
          <div className="pic">
            <img
              src="https://gitee.com/static/images/logo-black.svg?t=158106664"
              alt="teacher_Pic"
            ></img>
          </div>
          <div className="name">
            <p className="p_name">远冲</p>
            <p className="p_info">运营经理运营经理运营经理运营经理</p>
          </div>
        </div>
        <div className="box_info">
          <p>
            2131年接触阿里巴巴，2131年接触阿里巴巴2131年接触阿里巴巴2131年接触阿里巴巴2131年接触阿里巴巴2131年接触阿里巴巴2131年接触阿里巴巴2131年接触阿里巴巴2131年接触阿里巴巴2131年接触阿里巴巴2131年接触阿里巴巴2131年接触阿里巴巴2131年接触阿里巴巴2131年接触阿里巴巴2131年接触阿里巴巴2131年接触阿里巴巴
          </p>
        </div>
        <div className="show_tips">
          <span className="col1">新手</span>
          <span className="col2">店铺运营</span>
          <span className="col3">服饰服装</span>
          <span className="col4">数据运营</span>
        </div>
      </div>
    </div>
  );
}
