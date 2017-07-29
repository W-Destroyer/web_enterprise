/*
    Create By Piny
    2017.06.06
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Layout, Menu, Breadcrumb, BackTop, Row, Col, Input, Button, Icon, Pagination } from 'antd';
const { Content } = Layout;

import '../../css/style.less';
import '../../css/news.less';

import Header from '../module/header';
import Footer from '../module/footer';
import Banner from '../module/banner';
import Product from '../module/productlist';
import News from '../module/news';
import AboutUS from '../module/about';

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
        // var productData = {
        //     classifyList: data.classifyList
        // }
        // var newsData = {
        //     newsList: data.newsList
        // }
        var bannerData = {
            list: data.bannerList
        }
        return(
            <Layout style={{backgroundColor: "#fff"}}>
                <Header data={headerData}/>
                <Content style={{marginTop: 164}}>
                    <Banner data={bannerData}/>
                    <div style={{
                        background: '#fff',
                        minHeight: 380,
                    }}>
                        <div className="row breadcrumb">
                            <div className="container">

                            </div>
                        </div>
                        <div className="row">
                            <div className="container">
                                <Row type="flex" justify="left" gutter={10}>
                                    <Col span={18}>
                                        <NewsList />
                                    </Col>
                                    <Col span={6}>
                                        <MessageFrom />
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

class NewsList extends Component {
    render() {

        return (
            <div className="news-list" style={{
                
            }}>
                <Row type="flex" justify="left">
                    <Col span={24}>
                        <div className="news-list-item">
                            <Row type="flex" justify="left" gutter={20}>
                                <Col span={6}>
                                    <div className="news-item-image">
                                        <img width="100%" src="/images/news.jpg"/>
                                    </div>
                                </Col>
                                <Col span={18}>
                                    <div className="news-item-content" >
                                        <p className="news-content-heading">
                                            <a href="/">机械设备与广汽三菱洽谈平行进口业务</a>
                                        </p>
                                        <p className="news-content-body">
                                            近日，国机汽车与广汽三菱汽车、三菱汽车销售（中国）公司在长沙就三菱平行进口相关业务进行深入交流。 国机汽车结合自身进口汽车贸易服务方面的优势和以往的成功案例向广汽三菱阐述了公司的核心能力，就三菱相关车型的平行进口业务做了详细介绍。交流内容得到广汽三菱方面的高度...
                                        </p>
                                        <p className="news-content-footer">
                                            <span className="news-content-time">2017-07-24</span>
                                            <span className="news-content-author">Piny</span>
                                            <span className="news-content-viewcount">
                                                <Icon type="eye" style={{fontSize: '14px', marginRight: '4px'}}/>
                                                999
                                            </span>
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div> 
                    </Col>
                </Row>
                { 0 ? (<div style={{marginTop: '30px', textAlign: 'center'}}>
                    <Pagination defaultCurrent={1} total={500} />
                    </div>) : (<div></div>)
            }
            </div>
        )
    }
}

class MessageFrom extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        var fromGroup = {
            marginBottom: '20px'
        }
        return (
            <div style={{
                background: "#ffffff",
                padding: "30px",
                boxShadow: "0 1px 1px rgba(0, 0, 0, 0.05)"
            }}>
                <div >
                    <header style={{padding: "10px", backgroundColor: "#305dc3", color: "#fff", borderRadius: "3px", margin: "20px 0"}}>
                        科技资讯
                    </header>
                    <Menu style={{borderRight: 'none'}}>
                        <Menu.Item>
                            <div style={{height: "100%", borderBottom: '1px solid #f0f2f5', margin: "0 -16px"}}>
                                <Icon type="right"/>产品资讯
                            </div>
                        </Menu.Item>
                        <Menu.Item>
                            <div style={{height: "100%", borderBottom: '1px solid #f0f2f5', margin: "0 -16px"}}>
                                <Icon type="right"/>行业动态
                            </div>
                        </Menu.Item>
                        <Menu.Item>
                            <div style={{height: "100%", borderBottom: '1px solid #f0f2f5', margin: "0 -16px"}}>
                                <Icon type="right"/>国际资讯
                            </div>
                        </Menu.Item>
                    </Menu>
                </div>
                <div >
                    <header style={{padding: "10px", backgroundColor: "#305dc3", color: "#fff", borderRadius: "3px", margin: "20px 0"}}>
                        最新资讯
                    </header>
                    <Menu style={{borderRight: 'none'}}>
                        <Menu.Item>
                            <div style={{height: "100%", borderBottom: '1px solid #f0f2f5', margin: "0 -16px"}}>
                                <Icon type="right"/>机械设备与广汽三菱洽谈平行进口业务
                            </div>
                        </Menu.Item>
                        <Menu.Item>
                            <div style={{height: "100%", borderBottom: '1px solid #f0f2f5', margin: "0 -16px"}}>
                                <Icon type="right"/>机械设备与广汽三菱洽谈平行进口业务
                            </div>
                        </Menu.Item>
                        <Menu.Item>
                            <div style={{height: "100%", borderBottom: '1px solid #f0f2f5', margin: "0 -16px"}}>
                                <Icon type="right"/>机械设备与广汽三菱洽谈平行进口业务
                            </div>
                        </Menu.Item>
                    </Menu>
                </div>
                <div >
                    <header style={{padding: "10px", backgroundColor: "#305dc3", color: "#fff", borderRadius: "3px", margin: "20px 0"}}>
                        新闻中心
                    </header>
                    <Menu style={{borderRight: 'none'}}>
                        <Menu.Item>
                            <div style={{height: "100%", borderBottom: '1px solid #f0f2f5', margin: "0 -16px"}}>
                                <Icon type="right"/>产品资讯
                            </div>
                        </Menu.Item>
                        <Menu.Item>
                            <div style={{height: "100%", borderBottom: '1px solid #f0f2f5', margin: "0 -16px"}}>
                                <Icon type="right"/>行业动态
                            </div>
                        </Menu.Item>
                        <Menu.Item>
                            <div style={{height: "100%", borderBottom: '1px solid #f0f2f5', margin: "0 -16px"}}>
                                <Icon type="right"/>国际资讯
                            </div>
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App data={initialProps}/>, document.getElementById('main'));
