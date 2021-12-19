/*
 * @Author: chengxinyu
 * @Date: 2021-12-18 14:07:30
 * @LastEditors: chengxinyu
 * @LastEditTime: 2021-12-19 15:20:02
 */
import styles from './index.css';
import { useLocation } from 'umi';
import '@/utils/rem';

function BasicLayout(props) {
  const location = useLocation();

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
    <div>{props.children} </div>
  );
}

export default BasicLayout;
