/**
 * Create By Piny 
 * 2017/06/20
 */

import React, { Component } from 'react';

import {Row, Col, Menu, Icon} from 'antd';

export class ProductNav extends Component {
    constructor() {
        super();
    }

    handleClick = event => {
        this.props.handleChange(event.key);
        // console.log(item, key, keyPath)
    }

    render() {
        var { classifyList } = this.props;
        var menuItem = classifyList.map((item, index) => {
            return (
                <Menu.Item key={item['t_id']}>
                    <div>
                        <span>{item['t_typename']}</span>
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
                }} mode="horizontal"
                    defaultSelectedKeys={['1']}
                    onClick={this.handleClick}
                >
                    { menuItem }
                </Menu>
            </div>
        )
    }
}

export class ProductList extends Component {
    constructor() {
        super();
        this.productList = [];

        this.state = {
            switchCount: 0
        }
    }

    render() {
        var { productList } = this.props;
        // console.log(this.productList)
        var productListDom = productList.length ? productList.map((item,index) => {
            return (
                <Col span={6} key={item['p_id']}>
                    <a href="#">
                        <div className="product-item" style={{color: "#666"}} >
                            <div className="product-item-image" >
                                <img src={item['p_picture']}/>
                            </div>
                            <div className="product-item-name">{item['p_name']}</div>
                        </div>
                    </a>
                </Col>
            )
        }) : ( <Col className="product-list-none" span={24}>
            <span>该分类暂无产品</span>
        </Col> )
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
    constructor() {
        super();
        this.state = {
            productType: 1,
            productList: []
        }
    }

    componentDidMount() {
        this.handleChange(this.state.productType);
    }

    handleChange = (type) => {
        fetch(`/api/product/listByType?type=${type}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)

                this.setState({
                    productType: type,
                    productList: res.data.productList
                })
            })
    }

    render() {

        var { productData } = this.props;
        return (
            <div className="container product row-body">
                <header >
                    无尘产品
                </header>
                <p className="describe">
                    我们致力于让科技改善人们的生活
                </p>
                <ProductNav classifyList={productData.classifyList} handleChange={(type) => this.handleChange(type)}/>
                <ProductList productList={this.state.productList}/>
            </div>
            
        )
    }
}