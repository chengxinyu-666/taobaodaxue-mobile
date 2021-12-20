/* eslint-disable react/prop-types */
/*
 * @Author: chengxinyu
 * @Date: 2021-12-19 14:56:11
 * @LastEditors: chengxinyu
 * @LastEditTime: 2021-12-20 18:09:19
 */
import React, { useEffect } from 'react';

function Choose(props) {
  // const [itemarr, setItemarr] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const { setIschose, setDate, choseTags, data, ischose } = props;
  console.log(77, setIschose, choseTags, data);

  useEffect(() => {}, []);

  const addItem = (item) => {
    console.log(item);
    if (data.tags.includes(item)) {
      console.log('有');
      let arr = data.tags.filter((it) => {
        return it != item;
      });
      setDate({
        ...data,
        tags: arr,
      });
      console.log(1, arr);
    } else {
      let arr = [...data.tags, item];
      console.log(2, arr);
      setDate({
        ...data,
        tags: arr,
      });
    }
  };

  const onReset = () => {
    setIschose(false);
    setDate({
      pageSize: 4,
      pageNo: 1,
      tags: [],
      username: '',
    });
  };
  const onDefine = () => {
    setIschose(false);
  };

  useEffect(() => {
    if (!ischose) {
      document.getElementById('shows').setAttribute('class', 'innch shows');
      document
        .getElementById('shows2')
        .setAttribute('class', 'chooseqq shows2');
    }
  }, []);
  return (
    <div id="shows2" className="chooseqq">
      <div className="leftwhitesl" onClick={() => setIschose(false)}></div>
      <div id="shows" className="innch">
        <div className="chose_box">
          {/* <div  className={ischose?'chose_box  ':'chose_box div3s'} > */}
          <div className="chose_top">
            <h3>擅长方向</h3>
            <div className="goodat">
              {choseTags.map((item, idx) => {
                return (
                  <div
                    className={
                      data.tags.includes(item)
                        ? 'chose_it chose_act'
                        : 'chose_it'
                    }
                    key={idx}
                  >
                    <span onClick={addItem.bind(this, item)}>{item}</span>
                    <img src={require('@/assets/img/sho.png')} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="chose_bon">
          {/* <div  className={ischose?'chose_bon  ':'chose_bon div3s'} > */}
          <div className="res_box">
            <span className="res" onClick={onReset}>
              重置
            </span>
            <span className="queding" onClick={onDefine}>
              确定
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Choose;
