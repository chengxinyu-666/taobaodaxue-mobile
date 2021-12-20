/*
 * @Author: chengxinyu
 * @Date: 2021-12-18 14:11:21
 * @LastEditors: chengxinyu
 * @LastEditTime: 2021-12-20 15:58:01
 */
import React, { useState, useEffect } from 'react';
import './index.less';
import HeaderInfo from './components/HeaderInfo';
import CooperativeLecturer from './components/CooperativeLecturer';
import LecturerStyle from './components/lecturerStyle';
import CertifiedLecturer from './components/CertifiedLecturer';
import DistinguishedLecturer from './components/DistinguishedLecturer';
import moment from 'moment';
function Home() {
  // const [state, setState] = useState();
  const [active, setActive] = useState(0);
  const teacherList = ['认证讲师', '特聘讲师', '合作讲师', '讲师分彩'];

  const changeItem = (idx) => {
    setActive(idx);
    console.log(active);
  };

  const endTime = moment(new Date('2037/1/1')); //结束时间

  useEffect(() => {
    countDown(endTime);

    setInterval(() => {
      countDown(endTime);
    }, 1000);
  }, []);

  const zero = (res) => {
    if (res < 10) {
      return '0' + res;
    } else {
      return res;
    }
  };

  const countDown = (endTime) => {
    let start = moment(new Date()); // 当前时间
    let diff = endTime.diff(start); //时间差
    let years = zero(moment.duration(diff).years());
    let months = zero(moment.duration(diff).months());
    let days = zero(moment.duration(diff).days());
    let hours = zero(moment.duration(diff).hours());
    let minutes = zero(moment.duration(diff).minutes());
    let seconds = zero(moment.duration(diff).seconds());

    document.querySelector('.cutTime').innerHTML = `距离课程开始还有 ${
      years == 0 ? '' : years + '年'
    } ${months == 0 ? '' : months + '月'} ${
      days == 0 ? '' : days + '天'
    }  ${hours}：${minutes}：${seconds}`;
  };

  return (
    <div className="home">
      {/* 顶部轮播图，简介区域 */}
      <HeaderInfo />
      <div className="home_content">
        {/* 根据时间来显示这块倒计时区域 */}
        <div className="cutTime"> </div>
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
          <CertifiedLecturer />
        ) : active == 1 ? (
          <DistinguishedLecturer />
        ) : active == 2 ? (
          <CooperativeLecturer />
        ) : active == 3 ? (
          <LecturerStyle />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
export default Home;
