/*
    Create By Piny
    2017.06.06
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Layout, Menu, Breadcrumb, BackTop, Row, Col } from 'antd';
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
                        <div className="row">
                            <div className="container about row-body">
                                <header >
                                    联系我们
                                </header>
                                <section style={{marginTop: '50px', padding: '30px', background: '#fff'}}>
                                    <Row type="flex" justify="left" gutter={20}>
                                        <Col span={24}>
                                            <div>
                                                <img style={{width: '100%'}} src='/images/aboutme.jpg'/>
                                            </div>
                                        </Col>
                                        <Col span={24}>
                                            <div style={{borderBottom: '1px solid #e1e1e1', margin: '20px 0'}}></div>
                                        </Col>
                                        <Col span={24}>
                                            <div style={{padding: '10px 0', textAlign: 'left'}}>
                                                <p style={{marginBottom: "16px", fontSize: '18px', lineHeight: "1.8", fontWeight: '700'}}>江西艾麦达科技有限公司</p>
                                                <p style={{marginBottom: "16px", fontSize: '18px', lineHeight: "1.8"}}>地址：江西省南昌市南昌经济技术开发区昌北钢材大市场4号楼133号商铺（第1-2层）</p>
                                                <p style={{marginBottom: "16px", fontSize: '18px', lineHeight: "1.8"}}>联系人：华永祥</p>
                                                <p style={{marginBottom: "16px", fontSize: '18px', lineHeight: "1.8"}}>联系方式：15170454792</p>
                                                <p style={{marginBottom: "16px", fontSize: '18px', lineHeight: "1.8"}}>邮箱：lizilin1919@sina.com</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </section>
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
