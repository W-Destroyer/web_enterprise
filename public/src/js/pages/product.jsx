/*
    Create By Piny
    2017.06.06
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Layout, Menu, Breadcrumb, BackTop, Row, Col, Pagination } from 'antd';
const { Content } = Layout;

import '../../css/style.less';

import Header from '../module/header';
import Footer from '../module/footer';
import Banner from '../module/banner';
import Product from '../module/productlist';
import News from '../module/news';
import AboutUS from '../module/about';

import {ProductList} from '../module/productlist';

class App extends Component {
    constructor() {
        super();
    }

    render() {
        var data = this.props.data;
        console.log(data);
        var headerData = {
            title: data.baseinfo.title
        }
        var footerData = {
            firendLink: data.baseinfo.friendLink
        }
        this.nav = [{
            name: '防静电服系列'
        }, {
            name: '防静电鞋系列'
        }, {
            name: '无尘布系列'
        }, {
            name: '无尘纸系列'
        }, {
            name: '防静电手套系列'
        }, {
            name: '防静电手腕带系列'
        }, {
            name: '防静电贴系列'
        }, {
            name: '防静电椅系列'
        }, {
            name: '胶带系列'
        }, {
            name: '净化棉签系列'
        }, {
            name: '防静电台垫系列'
        }, {
            name: '防静电抗疲劳地垫'
        }, {
            name: '防静电PVC门帘'
        }, {
            name: '周转车系列'
        }, {
            name: '防静电周转盘'
        }, {
            name: '离子风机'
        }, {
            name: '防静电镊子系列'
        }, {
            name: '防静电工作台系列'
        }, ]
        var menuDom = this.nav.map((item, index) => {
            return (
                <Menu.Item key={index}>
                    <div style={{textAlign: 'left', paddingLeft: '20px'}}>{item.name}</div>
                </Menu.Item>
            )
        })
        return(
            <Layout style={{backgroundColor: "#fff"}}>
                <Header data={headerData}/>
                <Content style={{marginTop: 164}}>
                    <Banner />
                    <div style={{
                        background: '#fff',
                        minHeight: 380,
                    }}>
                        <div className="row"></div>
                        <div className="row">
                            <div className="container product row-body">
                                <header >
                                    无尘产品
                                </header>
                                <p className="describe">
                                    我们致力于让科技改善人们的生活
                                </p>
                                <Row type="flex" justify="left" gutter={20}>
                                    <Col span={6}>
                                        <Menu style={{marginTop: "10px"}}>
                                            {menuDom}
                                        </Menu>
                                    </Col>
                                    <Col span={18}>
                                        <ProductList />
                                        <div style={{marginTop: '30px'}}>
                                            <Pagination defaultCurrent={1} total={500} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Content>
                <Footer data={footerData}/>
                <div id="components-back-top-custom">
                    <BackTop />
                </div>
            </Layout>
        )
    }
}

ReactDOM.render(<App data={initialProps}/>, document.getElementById('main'));
