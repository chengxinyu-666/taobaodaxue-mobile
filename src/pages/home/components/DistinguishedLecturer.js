/*
 * @Author: chengxinyu
 * @Date: 2021-12-18 16:34:06
 * @LastEditors: chengxinyu
 * @LastEditTime: 2021-12-21 09:37:42
 */
import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import myIcom from '@/assets/iconfont/iconfont.css';
// import { history } from 'umi';
import TeacherItem from './TeacherItem';
import Loading from '@/components/Loading';
import ShowLoading from '@/components/showLoading';
// import Choose from './Choose';
// import ModalContainer from '@/components/ModalContainer';
import ReactPullLoad, { STATS } from 'react-pullload'; //加载更多

import axios from 'axios';
function DistinguishedLecturer() {
  // const [state, setState] = useState();
  //  const [searchtxt, setSearchtxt] = useState(''); //搜索框内容
  const [teachList, setTeachList] = useState([]); //讲师数据
  // const [ischose, setIschose] = useState(false); //显示筛选条件
  const [showLoading, setShowLoading] = useState(true);
  const [allNum, setAllNum] = useState(0);
  // const choseTags = ['新手', '店铺运营', '服饰服装', '数据运营'];

  const [action, setAction] = useState(STATS.init);
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

        {teachList.length == 0 ? (
          <Loading />
        ) : (
          <ReactPullLoad action={action} handleAction={handleAction}>
            {teachList.map((item) => (
              <div key={item.id}>
                {' '}
                <TeacherItem teacherData={item} />
              </div>
            ))}
          </ReactPullLoad>
        )}

        <ShowLoading showLoading={showLoading} />
      </div>
      {/* {ischose ? (
        <ModalContainer>
          <Choose
            ischose={ischose}
            setIschose={setIschose}
            setDate={setDate}
            choseTags={choseTags}
            data={data}
          />
        </ModalContainer>
      ) : null} */}
    </>
  );
}
export default DistinguishedLecturer;
