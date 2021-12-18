/*
 * @Author: chengxinyu
 * @Date: 2021-12-18 14:19:22
 * @LastEditors: chengxinyu
 * @LastEditTime: 2021-12-18 14:31:37
 */

window.onload = function () {
  remChange(750, 100);
};
window.onresize = function () {
  remChange(750, 100);
};

function remChange(sz1, sz2) {
  var html = document.getElementsByTagName('html')[0];
  var oWidth =
    document.body.clientWidth || document.documentElement.clientWidth;
  html.style.fontSize = (oWidth / sz1) * sz2 + 'px';
}
