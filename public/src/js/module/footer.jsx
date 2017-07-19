/*
    Create By Piny
    2017.06.06
 */

import React, { Component } from 'react';

import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
const { Footer } = Layout;

export default class extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Footer className="footer text-center" style={{padding: '0'}}>
                <div className="footer-nav" style={{padding: '30px 0', borderBottom: '1px solid #f0f2f5'}}>
                    <div className="container">
                        <Row type="flex" justify="left" gutter={20}>
                            <Col span={4}>
                                <div className="footer-nav-head"><a href="/">友情链接</a></div>
                                <ul className="footer-nav-body">
                                    <li><a href="/">淘宝</a></li>
                                    <li><a href="/">天猫</a></li>
                                    <li><a href="/">京东</a></li>
                                    <li><a href="/">亚马逊</a></li>
                                </ul>
                            </Col>
                            <Col span={4}>
                                <div className="footer-nav-head"><a href="/">技术支持</a></div>
                                <ul className="footer-nav-body">
                                    <li><a href="/">售后服务</a></li>
                                    <li><a href="/">相关下载</a></li>
                                </ul>
                            </Col>
                            <Col span={4}>
                                <div className="footer-nav-head"><a href="/">博客动态</a></div>
                                <ul className="footer-nav-body">
                                    <li><a href="/">产品资讯</a></li>
                                    <li><a href="/">行业动态</a></li>
                                    <li><a href="/">国际资讯</a></li>
                                </ul>
                            </Col>
                            <Col span={4}>
                                <div className="footer-nav-head"><a href="/">关于公司</a></div>
                                <ul className="footer-nav-body">
                                    <li><a href="/">关于我们</a></li>
                                    <li><a href="/">联系我们</a></li>
                                    <li><a href="/">加入我们</a></li>
                                    <li><a href="/">意见反馈</a></li>
                                </ul>
                            </Col>
                            <Col span={6} offset={1}>
                                <div>400-000-000</div>
                                <div>周一至周五 08:30~17:30</div>
                                <div><span>微信</span><span>微博</span><span>QQ</span></div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div style={{padding: '30px 0'}}>
                    <div className="container">
                        <p>科技公司 版权所有 &copy; 2017 赣ICP备17009031号-1</p>
                        <p>Powered By Piny</p>
                    </div>
                </div>
            </Footer>
        )
    }
}