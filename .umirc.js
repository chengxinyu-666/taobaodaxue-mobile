/*
 * @Author: chengxinyu
 * @Date: 2021-12-18 13:49:21
 * @LastEditors: chengxinyu
 * @LastEditTime: 2021-12-19 07:12:21
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/',
          component: './home/index',
          title: '首页',
        },
        // {
        //   path: '/search',
        //   component: './search/index',
        //   title: '搜索列表',
        // },
      ],
    },
  ],
  fastRefresh: {},
});
