/*
    Create By Piny
    2017.06.06
 */

import React, { Component } from 'react';

import { Layout, Menu, Breadcrumb, Row, Col, Icon } from 'antd';
const { Footer } = Layout;

export default class extends Component {
    constructor() {
        super();
    }

    render() {
        const { friendLinkList } = this.props.data;
        const friendLinkListDom = friendLinkList.map((item, index) => {
            return (
                <li>
                    <a href={item.value} target="_black">{item.name}</a>
                </li>
            )
        })
        return (
            <Footer className="footer text-center" style={{padding: '0'}}>
                <div className="footer-nav" style={{padding: '30px 0', borderTop: '1px solid #f0f2f5', borderBottom: '1px solid #f0f2f5'}}>
                    <div className="container">
                        <Row type="flex" justify="left" gutter={20}>
                            <Col span={4}>
                                <div className="footer-nav-head"><a href="/">友情链接</a></div>
                                <ul className="footer-nav-body">
                                    {friendLinkListDom}
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
                                <div style={{lineHeight: '40px', height: "40px"}}>
                                    <a href="tel:15170454792" titel="15170454792" style={{fontSize: "28px", color: "#5e7387"}}>15170454792</a>
                                </div>
                                <div style={{color: "#aaa", marginBottom: "10px"}}>周一至周五 08:30~17:30</div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    padding: '0 25%',
                                }}>
                                    <a href="http://wpa.qq.com/msgrd?v=3&uin=&site=qq&menu=yes" target="_blank"><i className="iconfont icon-qq" style={{color: '#4E94E8', fontSize: '24px'}}></i></a>
                                    <a href="/"><i className="iconfont icon-weixin" style={{color: '#70B12D', fontSize: '24px'}}></i></a>
                                    <a href="/"><i className="iconfont icon-weibo" style={{color: '#F84E52', fontSize: '24px'}}></i></a>
                                </div>
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