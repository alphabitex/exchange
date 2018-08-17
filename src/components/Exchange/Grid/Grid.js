import React from 'react';

import Header from '../Header';
import Market from '../../../containers/Exchange/Market';
import Notice from '../Notice';
import Mscy from '../Mscy';
import TradePanel from '../TradePanel';
import Order from '../Order';
import MarketTrade from '../MarketTrade';
import Chart from '../Chart';
import './Grid.css';

const Grid = () => {
  return (
    <div styleName="container">
      {/*头部*/}
      <div styleName="header">
        <Header />
      </div>
      {/*边栏*/}
      <div styleName="aside">
        {/*行情*/}
        <Market />
        {/*通知*/}
        <Notice />
      </div>
      {/*走势图*/}
      <div styleName="chart">
        <Chart />
      </div>
      {/*交易面板*/}
      <div styleName="trade-panel">
        <TradePanel />
      </div>
      {/*对手盘*/}
      <div styleName="order">
        <Order />
      </div>
      {/*深度图*/}
      <div styleName="depth" />
      {/*实时成交*/}
      <div styleName="market-trades">
        <MarketTrade />
      </div>
      {/*币种信息*/}
      <div styleName="token-details">
        <Mscy />
      </div>
      {/* <div styleName="footer">
        <Footer />
      </div> */}
    </div>
  );
};

export default Grid;
