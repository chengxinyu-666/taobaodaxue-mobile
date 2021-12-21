/*
 * @Author: chengxinyu
 * @Date: 2021-12-18 16:34:06
 * @LastEditors: chengxinyu
 * @LastEditTime: 2021-12-21 14:33:24
 */
import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import myIcom from '@/assets/iconfont/iconfont.css';
// import { history } from 'umi';
import TeacherItem from './TeacherItem';
import Loading from '@/components/Loading';
import ShowLoading from '@/components/showLoading';
import Choose from './Choose';
import ModalContainer from '@/components/ModalContainer';
// import ReactPullLoad, { STATS } from 'react-pullload'; //加载更多
import $ from 'jquery';

import axios from 'axios';
const CertifiedLecturer = () => {
  // const [state, setState] = useState();
  const [searchtxt, setSearchtxt] = useState(''); //搜索框内容
  const [teachList, setTeachList] = useState([]); //讲师数据
  const [ischose, setIschose] = useState(false); //显示筛选条件
  const [showLoading, setShowLoading] = useState(true);
  // const [allNum, setAllNum] = useState(0);
  const choseTags = ['新手', '店铺运营', '服饰服装', '数据运营'];

  // const [action, setAction] = useState(STATS.init);
  const [data, setDate] = useState({
    //默认搜索条件
    pageSize: 4,
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
        // setAllNum(res.data.data.totalRecord);

        if (res.data.data.totalRecord > teachList.length) {
          setShowLoading(true);
        } else {
          return setShowLoading(false);
        }
        if (res.data.data.List.length != 0) {
          //后台返回了数据
          console.log(999, res.data.data);
          setTeachList([...teachList, ...res.data.data.List]);
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

  useEffect(() => {
    myScroll();
  }, []);
  const myScroll = () => {
    var timer = false;
    window.addEventListener('scroll', function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        // console.log('页面被卷起的高度', $(window).scrollTop() );
        // console.log('屏幕高度',$(window).height())
        // console.log( ' 高度差', $('#showLoading').offset().top-$(window).scrollTop())
        console.log('teachList', teachList.length);
        if (
          $(window).height() >
          $('#showLoading').offset().top - $(window).scrollTop()
        ) {
          console.log('进入区域');
          setDate({
            ...data,
            tags: data.tags,
            pageNo: data.pageNo + 1,
          });
        } else {
          console.log('不在区域');
        }
      }, 500);
    });
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
          // <ReactPullLoad action={action} handleAction={handleAction}>
          //   {teachList.map((item) => (
          //     <div key={item.id}>
          //       {' '}
          //       <TeacherItem teacherData={item} />
          //     </div>
          //   ))}
          // </ReactPullLoad>
          <>
            {teachList.map((item) => (
              <div key={item.id}>
                {' '}
                <TeacherItem teacherData={item} />
              </div>
            ))}
          </>
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
            setTeachList={setTeachList}
          />
        </ModalContainer>
      ) : null}
    </>
  );
};

export default CertifiedLecturer;
