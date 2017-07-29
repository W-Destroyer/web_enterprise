/*
    Create By Piny
    2017.06.06
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Layout, Menu, Breadcrumb, BackTop, Row, Col, Pagination, Carousel, Tabs } from 'antd';
const { Content } = Layout;
const { TabPane } = Tabs;

import '../../css/style.less';
import '../../css/product.less';

import Header from '../module/header';
import Footer from '../module/footer';
import Banner from '../module/banner';
import News from '../module/news';
import AboutUS from '../module/about';

import {ProductNav, ProductList} from '../module/productlist';

class App extends Component {
    constructor() {
        super();
    }

    render() {
        var data = this.props.data;
        console.log(data);
        var headerData = {
            title: data.sysconfig.title
        }
        var footerData = {
            friendLinkList: data.sysconfig.friendLinkList
        }
        var productData = {
            classifyList: data.classifyList
        }

        var bannerData = {
            list: data.bannerList
        }

        return(
            <Layout style={{backgroundColor: "#fff"}}>
                <Header data={headerData}/>
                <Content style={{marginTop: 164}}>
                    <div style={{
                        background: '#fff',
                        minHeight: 380,
                    }}>
                        <div className="row">
                            <div className="container product row-body">
                                <Row type="flex" justify="left" gutter={20}>
                                    <Col span={14}>
                                        <Carousel autoplay autoplaySpeed='3000' beforeChange={this.beforeChange} afterChange={this.afterChange}>
                                            <div key='0' style={{display: 'flex', justifyContent: 'center'}}>
                                                <img src='//localhost:8080/product/pic1.png' />
                                            </div>
                                        </Carousel>
                                    </Col>
                                    <Col span={10}>
                                        <div clasName="product-name">name</div>
                                        <div className="product-price">name</div>
                                        <div className="product-size">name</div>
                                        <div className="product-num">name</div>
                                        <div className="product-num">name</div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="row">
                            <div className="container">
                                <Row type="flex" justify="left" gutter={40}>
                                    <Col span={18}>
                                        <div style={{backgroundColor: '#fff', padding: '30px', minHeight: '300px'}}>
                                            <Tabs defaultActiveKey="1" onChange={index => console.log(index)}>
                                                <TabPane tab={'详情'} key="1">
                                                    <div style={{padding: '15px', borderBottom: '1px solid #f0f2f5'}}>
                                                        <Row  type="flex" justify="left" gutter={20}>
                                                            <Col span={6} style={{lineHeight: '30px'}}>编码：MD-1101</Col>
                                                            <Col span={6} style={{lineHeight: '30px'}}>材质：涤纶长丝、导电纤维</Col>
                                                            <Col span={6} style={{lineHeight: '30px'}}>颜色：多色可选</Col>
                                                            <Col span={6} style={{lineHeight: '30px'}}>表面电阻：106-109Ω</Col>
                                                            <Col span={6} style={{lineHeight: '30px'}}></Col>
                                                        </Row>
                                                    </div>
                                                    <div></div>
                                                    <div></div>
                                                </TabPane>
                                                <TabPane tab={'功能'} key="2">
                                                    <div></div>
                                                </TabPane>
                                            </Tabs>
                                        </div>
                                        
                                    </Col>
                                    <Col span={6}>
                                        <div style={{backgroundColor: '#fff'}}>
                                            推荐
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
