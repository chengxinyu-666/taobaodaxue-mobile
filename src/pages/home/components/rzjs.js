/*
 * @Author: chengxinyu
 * @Date: 2021-12-18 16:34:06
 * @LastEditors: chengxinyu
 * @LastEditTime: 2021-12-19 12:58:10
 */
import React, { useState, useEffect } from 'react';

import myIcom from '@/assets/iconfont/iconfont.css';
import { history } from 'umi';
import TeacherItem from '@/components/TeacherItem';
import Loading from '../../../components/Loading';
import Loadmore from '../../../components/Loadmore';

import axios from 'axios';
export default function (props) {
  const [state, setState] = useState();
  // const [issearch, setIssearch] = useState(0);//搜索组件是否在搜索输入状态
  const [searchtxt, setSearchtxt] = useState(''); //搜索框内容
  const [teachList, setTeachList] = useState([]); //讲师数据
  const [data, setDate] = useState({
    //默认搜索条件
    pageSize: 4,
    pageNo: 1,
  });

  useEffect(() => {
    let url =
      'https://www.fastmock.site/mock/fe1e37e0a331bc6177530e288327c374/api/api/testInterface';
    axios
      .get(url, {
        params: {
          ...data,
        },
      })
      .then((res) => {
        if (res.data.data.List.length != 0) {
          //后台返回了数据
          console.log(999, res.data.data);
          setTeachList([...teachList, ...res.data.data.List]);
        }
      });
  }, []);
  const toSearch = () => {
    // history.push('./search')
  };

  const searchChange = (e) => {
    console.log(e.target.value);
    setSearchtxt(e.target.value);
  };

  return (
    <div className="rzjs">
      <span onClick={() => console.log('观察数据', teachList)}>观察数据</span>
      {/* 认证讲师搜索部分 */}
      <div className="rzjs_search">
        <div className="inner_search">
          <div className="inner_search_bor">
            <div className="lef">
              <span className={`${myIcom.iconfont}`}> &#xe617; </span>
              <input value={searchtxt} onChange={searchChange} type="text" />
            </div>
            <div className="rig">
              <span className="search_btn" onClick={toSearch}>
                搜索
              </span>
            </div>
          </div>
        </div>
        <div className="choose">
          {!searchtxt.length ? (
            <div className="inner_choose">
              <span className={`${myIcom.iconfont}`}>筛选 &#xe689;</span>
            </div>
          ) : (
            <div className="inner_choose" onClick={() => setSearchtxt('')}>
              <span>取消 </span>
            </div>
          )}
        </div>
      </div>
      {teachList.length == 0 ? (
        <Loading />
      ) : (
        teachList.map((item, idx) => (
          <div key={item.id}>
            {' '}
            <TeacherItem teacherData={item} />
          </div>
        ))
      )}

      {/* <Loadmore /> */}
    </div>
  );
}
