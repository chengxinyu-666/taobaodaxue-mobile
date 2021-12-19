/*
 * @Author: chengxinyu
 * @Date: 2021-12-18 14:07:30
 * @LastEditors: chengxinyu
 * @LastEditTime: 2021-12-19 05:54:16
 */
import styles from './index.css';
import { useLocation } from 'umi';
import '@/utils/rem';
// import { StoreProvider } from 'think-react-store';
// import * as store from '../stores';

function BasicLayout(props) {
  const location = useLocation();
  const paths = ['/', '/order', '/user'];

  return (
    // <StoreProvider store={store}>
    //   <MenuBar
    //     show={paths.includes(location.pathname)}
    //     pathname={location.pathname}
    //   />
    //   <ErrorBoundary>

    //   {props.children}
    //   </ErrorBoundary>
    // </StoreProvider>
    <div>{props.children}</div>
  );
}

export default BasicLayout;
