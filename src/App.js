import React, { Component } from 'react';
import { BackTop, Icon } from 'antd';
import Header from './component/Header';
import Section from './component/Section';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Section />
        <footer className="footer_container">
        </footer>
        <BackTop>
          <div className="ant-back-top-inner"><Icon type="to-top" /></div>
        </BackTop>
      </div>
    )
  }
}

export default App;
