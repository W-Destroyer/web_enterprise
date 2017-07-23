/*
    Create By Piny
    2017.06.06
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Layout, Menu, Breadcrumb, BackTop, Row, Col, Input, Button } from 'antd';
const { Content } = Layout;

import '../../css/style.less';

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
            title: data.baseinfo.title
        }
        var footerData = {
            firendLink: data.baseinfo.friendLink
        }
        return(
            <Layout style={{backgroundColor: "#fff"}}>
                <Header data={headerData}/>
                <Content style={{marginTop: 164}}>
                    <Banner />
                    <div style={{
                        background: '#fff',
                        // padding: 24,
                        // marginTop: '20px',
                        minHeight: 380,
                        // border: '1px solid #e1e1e1'
                    }}>
                        <div className="row"></div>
                        <div className="row">
                            <div className="container">
                                <Row type="flex" justify="left" gutter={10}>
                                    <Col span={16}>
                                        <MessageList />
                                    </Col>
                                    <Col span={8}>
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

class MessageList extends Component {
    render() {
        var listGroupItem = {
            position: "relative",
            display: "block",
            padding: "10px 0",
            backgroundColor: "#fff",
            border: "1px solid transparent",
            borderBottomColor: '#e4eaec'
        }

        return (
            <div style={{
                background: "#ffffff",
                padding: "30px",
                boxShadow: "0 1px 1px rgba(0, 0, 0, 0.05)"
            }}>
                <ul>
                    <li style={listGroupItem}>
                        <h3 className="message-list-header" style={{marginBottom: '5px'}}>
                            <span style={{fontSize: "14px", fontWeight: "700"}}>Name</span>
                            <time datetime='2012-07-16 14:21:13' style={{float: 'right', fontWeight: "300", color: "#a3afb7"}}>2012-07-16 14:21:13</time>
                        </h3>
                        <p className="message-list-content" style={{
                            fontSize: "14px",
                            color: "#76838f",
                            marginBottom: "10px"
                        }}>访问网站出现MySQL Server Error错误怎么办？</p>
                        <p className="message-list-reply" style={{
                            minHeight: "20px",
                            padding: "19px",
                            marginBottom: "20px",
                            backgroundColor: "#f3f7f9",
                            border: "1px solid #e4eaec",
                            borderRadius: "3px",
                            fontSize: '14px',
                            boxShadow: "inset 0 1px 1px rgba(0,0,0,.05)"
                        }}>出现这样的报错不用过于紧张，空间和程序都没有问题，这是由于数据库无法连接造成的。详细请查看：http://www.metinfo.cn/faq/shownews329.htm</p>
                    </li>
                    <li style={listGroupItem}>
                        <h3 className="message-list-header" style={{marginBottom: '5px'}}>
                            <span style={{fontSize: "14px", fontWeight: "700"}}>Name</span>
                            <time datetime='2012-07-16 14:21:13' style={{float: 'right', fontWeight: "300", color: "#a3afb7"}}>2012-07-16 14:21:13</time>
                        </h3>
                        <p className="message-list-content" style={{
                            fontSize: "14px",
                            color: "#76838f",
                            marginBottom: "10px"
                        }}>访问网站出现MySQL Server Error错误怎么办？</p>
                        <p className="message-list-reply" style={{
                            minHeight: "20px",
                            padding: "19px",
                            marginBottom: "20px",
                            backgroundColor: "#f3f7f9",
                            border: "1px solid #e4eaec",
                            borderRadius: "3px",
                            fontSize: '14px',
                            boxShadow: "inset 0 1px 1px rgba(0,0,0,.05)"
                        }}>出现这样的报错不用过于紧张，空间和程序都没有问题，这是由于数据库无法连接造成的。详细请查看：http://www.metinfo.cn/faq/shownews329.htm</p>
                    </li>
                </ul>
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
                <div style={fromGroup}>
                    <Input placeholder="姓名"/>
                </div>
                <div style={fromGroup}>
                    <Input placeholder="电话"/>
                </div>
                <div style={fromGroup}>
                    <Input placeholder="Email"/>
                </div>
                <div style={fromGroup}>
                    <Input  placeholder="其他联系方式"/>
                </div>
                <div style={fromGroup}>
                    <Input type="textarea" placeholder="留言内容"/>
                </div>
                {
                // <div style={fromGroup}>
                //     <Input placeholder="验证码"/>
                // </div>
                }<div style={fromGroup}>
                    <Button type="primary">提交</Button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App data={initialProps}/>, document.getElementById('main'));
