/*
 * @Author: chengxinyu
 * @Date: 2021-12-19 15:50:42
 * @LastEditors: chengxinyu
 * @LastEditTime: 2021-12-19 15:55:36
 */
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CreatePortal extends Component {
  constructor(props) {
    super(props);
    this.body = document.querySelector('body');
    this.el = document.createElement('div');
  }

  componentDidMount() {
    this.el.setAttribute('id', 'portal-root');
    this.body.appendChild(this.el);
  }

  componentWillUnmount() {
    this.body.removeChild(this.el);
  }

  render() {
    // eslint-disable-next-line react/prop-types
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
