/*
 * @Author: chengxinyu
 * @Date: 2021-12-18 14:33:26
 * @LastEditors: chengxinyu
 * @LastEditTime: 2021-12-18 17:57:37
 */

import React, { useState, useEffect } from 'react';
//  import { Swiper, Toast } from 'antd-mobile'
import AwesomeSwiper from 'react-awesome-swiper';
import './index.less';
export default function (props) {
  const [state, setState] = useState();
  const bannerList = [
    '../assets/img/banner.jpg',
    '../assets/img/banner.jpg',
    '../assets/img/banner.jpg',
  ];
  const [config, setConfig] = useState({
    loop: true,
    autoplay: {
      delay: 1500,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  useEffect(() => {}, []);

  return (
    <div className="headerInfo">
      {/* 头部公共组件 */}

      <AwesomeSwiper className="banner" config={config}>
        <div className="swiper-wrapper">
          {bannerList.map((item, idx) => (
            <div className="swiper-slide" key={idx}>
              <img src={require('../assets/img/banner.jpg')} />
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </AwesomeSwiper>
      <div className="jianjie_info">
        <div className="info_1">
          <h2>淘宝大学讲师简介</h2>
          <p>COMPANY PROFILE</p>
        </div>
        <div className="info_2">
          <p>
            淘宝大学成立于2006年，是阿里巴巴旗下核心培训平台，为商家，企业，品牌等不同阶段的电商，新零售从业提供多元化的学习和赋能。十年来，淘宝大学始终把握最新的商业风向，进行多维度的商业赋能，已覆盖133个国家的近千万用户。
          </p>
          <p>
            淘宝大学成立于2006年，是阿里巴巴旗下核心培训平台，为商家，企业，品牌等不同阶段的电商，新零售从业提供多元化的学习和赋能。十年来，淘宝大学始终把握最新的商业风向，进行多维度的商业赋能，已覆盖133个国家的近千万用户。
          </p>
        </div>
      </div>
    </div>
  );
}
