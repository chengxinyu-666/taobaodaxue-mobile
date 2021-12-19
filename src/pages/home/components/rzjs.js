/*
 * @Author: chengxinyu
 * @Date: 2021-12-18 16:34:06
 * @LastEditors: chengxinyu
 * @LastEditTime: 2021-12-19 21:41:38
 */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import myIcom from '@/assets/iconfont/iconfont.css';
import { history } from 'umi';
import TeacherItem from '@/components/TeacherItem';
import Loading from '@/components/Loading';
import ShowLoading from '@/components/showLoading';
import Choose from '@/components/Choose';
import ModalContainer from '@/components/ModalContainer';
import ReactPullLoad, { STATS } from 'react-pullload'; //加载更多

import axios from 'axios';
export default function (props) {
  const [state, setState] = useState();
  const [searchtxt, setSearchtxt] = useState(''); //搜索框内容
  const [teachList, setTeachList] = useState([]); //讲师数据
  const [ischose, setIschose] = useState(false); //显示筛选条件
  const [showLoading, setShowLoading] = useState(true);
  const [allNum, setAllNum] = useState(0);
  const choseTags = ['新手', '店铺运营', '服饰服装', '数据运营'];

  const [action, setAction] = useState(STATS.init);
  const [data, setDate] = useState({
    //默认搜索条件
    pageSize: 24,
    pageNo: 1,
    tags: [],
    username: '',
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
        setAllNum(res.data.data.totalRecord);
        if (res.data.data.List.length != 0) {
          //后台返回了数据
          console.log(999, res.data.data);
          setTeachList([...res.data.data.List]);
          setAction(STATS.reset);
        }
        if (res.data.data.totalRecord > teachList.length) {
          setShowLoading(true);
        } else {
          setShowLoading(false);
        }
      });
  }, [data]);

  const toSearch = () => {
    // history.push('./search')
  };

  const chose = () => {
    setIschose(true);
  };

  const searchChange = (e) => {
    console.log(e.target.value);
    setSearchtxt(e.target.value);
  };

  // 下拉加载更多
  const handleAction = (action1) => {
    //new action must do not equel to old action
    if (action1 == action) {
      return false;
    }

    if (action1 === STATS.refreshing) {
      //   this.handRefreshing();
      return;
    } else if (action1 === STATS.loading) {
      handLoadMore();
    } else {
      //DO NOT modify below code
      setAction(action);
    }
  };

  const handLoadMore = () => {
    if (data.pageSize > allNum) {
      return setShowLoading(false);
    }

    setTimeout(() => {
      setDate({
        ...data,
        pageSize: data.pageSize + 4,
      });
    }, 1000);

    setAction(STATS.loading);
  };

  return (
    <>
      <div className="rzjs">
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
                <span onClick={chose} className={`${myIcom.iconfont}`}>
                  筛选 &#xe689;
                </span>
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
          <ReactPullLoad action={action} handleAction={handleAction}>
            {teachList.map((item, idx) => (
              <div key={item.id}>
                {' '}
                <TeacherItem teacherData={item} />
              </div>
            ))}
          </ReactPullLoad>
        )}

        <ShowLoading showLoading={showLoading} />
      </div>
      {ischose ? (
        <ModalContainer>
          <Choose
            setIschose={setIschose}
            setDate={setDate}
            choseTags={choseTags}
            data={data}
          />
        </ModalContainer>
      ) : null}
    </>
  );
}
