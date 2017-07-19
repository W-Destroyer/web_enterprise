/**
 * Create By Piny 
 * 2017/06/20
 */

import React, { Component } from 'react';

import {Row, Col, Menu, Icon} from 'antd';

export class ProductNav extends Component {
    constructor() {
        super();
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
    }
    render() {
        var menuItem = this.nav.map((item, index) => {
            return (
                <Menu.Item key={index}>
                    <div>
                        <span>{item.name}</span>
                    </div>
                </Menu.Item>
            )
        });
        return (
            <div className="product-nav" style={{
                overflow: 'hidden',
                overflowX: 'auto',
                display: 'flex',
                justifyContent: 'flex-start'
            }}>
                <Menu style={{
                    border: 'none',
                    background: 'transparent',
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '0 auto'
                }} mode="horizontal" defaultSelectedKeys={['1']}>
                    { menuItem }
                </Menu>
            </div>
        )
    }
}

export class ProductList extends Component {
    constructor() {
        super();
        this.productList = [{
            name: '洁净大褂',
            imgSrc: '/images/pic1.png'
        }, {
            name: '洁净大褂',
            imgSrc: '/images/pic1.png'
        }, {
            name: '洁净大褂',
            imgSrc: '/images/pic1.png'
        }, {
            name: '洁净大褂',
            imgSrc: '/images/pic1.png'
        }, {
            name: '洁净大褂',
            imgSrc: '/images/pic1.png'
        }]
    }
    render() {
        var productList = this.productList;
        var productListDom = productList.map((item,index) => {
            return (
                <Col span={6} key={index}>
                    <div className="product-item" >
                        <div className="product-item-image" >
                            <img src={item.imgSrc}/>
                        </div>
                        <div className="product-item-name">{item.name}</div>
                    </div>
                </Col>
            )
        });
        return (
            <div className="product-list">
                <Row type="flex" justify="left" gutter={10}>
                    { productListDom }
                </Row>
            </div>
        )
    }
}

export default class Product extends Component {


    render() {
        return (
            <div className="container product row-body">
                <header >
                    科技产品
                </header>
                <p className="describe">
                    我们致力于让科技改善人们的生活
                </p>
                <ProductNav />
                <ProductList />
            </div>
            
        )
    }
}