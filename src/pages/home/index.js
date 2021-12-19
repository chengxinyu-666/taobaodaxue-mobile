/*
 * @Author: chengxinyu
 * @Date: 2021-12-18 14:11:21
 * @LastEditors: chengxinyu
 * @LastEditTime: 2021-12-19 15:51:19
 */
import React, { useState, useEffect } from 'react';
import './index.less';
import HeaderInfo from '@/components/HeaderInfo';
import Hzjs from './components/hzjs';
import Jsfx from './components/jsfx';
import Rzjs from './components/rzjs';
import Tpjs from './components/tpjs';
export default function (props) {
  const [state, setState] = useState();
  const [active, setActive] = useState(0);
  const teacherList = ['认证讲师', '特聘讲师', '合作讲师', '讲师分彩'];
  useEffect(() => {}, []);
  const changeItem = (idx) => {
    setActive(idx);
    console.log(active);
  };

  return (
    <div className="home">
      {/* 顶部轮播图，简介区域 */}
      <HeaderInfo />
      <div className="home_content">
        {/* 根据时间来显示这块倒计时区域 */}
        <div className="cutTime">距离课程开始还有2天：10：08：36</div>
        {/* 列表切换 */}
        <div className="chose_list">
          <ul>
            {teacherList.map((item, idx) => {
              return (
                <li
                  className={active == idx ? 'act' : ''}
                  onClick={changeItem.bind(this, idx)}
                  key={idx}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        {active == 0 ? (
          <Rzjs />
        ) : active == 1 ? (
          <Tpjs />
        ) : active == 2 ? (
          <Hzjs />
        ) : active == 3 ? (
          <Jsfx />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
