/*
    Create By Piny
    2017.06.06
 */

import React, { Component } from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header } = Layout;

import '../../css/header.less';

export default class extends Component {
    constructor() {
        super();
    }

    state = {
        titleHeight: 100,
        navHeight: 64,
        navList: [{
            name: '网站首页',
            pathname: '/'
        }, {
            name: '公司简介',
            pathname: '/about'
        }, {
            name: '产品展厅',
            pathname: '/product'
        }, {
            name: '新闻中心',
            pathname: '/news'
        }, {
            name: '售后服务',
            pathname: '/service'
        }, {
            name: '在线留言',
            pathname: '/messages'
        }, {
            name: '联系我们',
            pathname: '/contact'
        }]
    }

    fixedTop() {
        
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.scrollTop < 164;
    }

    componentWillMount() {
        window.removeEventListener('scroll', this.handler);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handler.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handler);
    }

    handler(err) {
        var offset = this.state.titleHeight - window.pageYOffset < 0 ? 0 : this.state.titleHeight - window.pageYOffset;
        this.refs.title.style.height = offset + 'px';
        this.refs.nav.style.marginTop = offset + 'px';
        this.refs.logo.style.paddingLeft = 100 + offset + 'px';
        this.refs.logo.style.width = 220 + offset + 'px';
        this.refs.logo.style.height = 64 + 36 / 100 * offset + 'px';
        console.log(this.refs.companyName.style.transform)
        this.refs.companyName.style.transform = 'scale(' + offset / 100 + ')';
        this.refs.companyName.style.marginTop = (offset/2 - 50) + 'px';
    }

    render() {
        var title = this.props.data.title;
        var pathname = window.location.pathname;
        var defaultSeletedKey = [];
        var navListDom = this.state.navList.map((item, index) => {
            if(pathname == item.pathname)
                defaultSeletedKey.push(index.toString());
            return (
                <Menu.Item key={index}><a href={item.pathname}>{item.name}</a></Menu.Item>
            )
        })
        return (
            <Header ref='header' className="header" >
                <div ref="title" className="title" >
                    <div ref='logo' className="logo">
                        <img src="/images/logo.png" style={{height: '100%'}}/>                        
                    </div>
                    <div ref="companyName" className="company-name">{ title }</div>
                </div>
                <div ref='nav' className="nav" >
                    <div className="logo"></div>
                    <Menu theme="light" mode="horizontal" defaultSelectedKeys={defaultSeletedKey} style={{ 
                        lineHeight: '64px',
                    }} >
                        { navListDom }
                    </Menu>
                </div>
            </Header>
        )
    }
}

// <Menu.Item key="8"></Menu.Item>
