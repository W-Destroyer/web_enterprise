/**
 * Create By Piny 
 * 2017/06/20
 */

import React, { Component } from 'react';

import {Row, Col, Menu, Icon, Dropdown} from 'antd';

const { SubMenu } = Menu;

export class ProductNav extends Component {
    constructor() {
        super();
    }

    handleClick = event => {
        this.props.handleChange(event.key);
    }

    render() {
        var { classifyList } = this.props;
        var menu = classifyList.map((item, index) => {
            return (
                <Dropdown key={item.id} overlay={
                    <Menu onClick={this.handleClick} >
                        {
                            item.children ? item.children.map(child => {
                                return (
                                     <Menu.Item key={child.id}>
                                        <div style={{
                                            height: 25,
                                            lineHeight: '25px',
                                        }}>
                                            <span>{child.name}</span>
                                        </div>
                                    </Menu.Item>
                                )
                            }) : (
                                <Menu.Item disabled> 暂无分类 </Menu.Item>
                            )
                        }
                    </Menu>
                }>
                    
                    <a className="ant-dropdown-link" href="javascript:;">
                        <div style={{
                            height: 40,
                            width: 100,
                            lineHeight: '40px',
                            background: 'white'
                        }}>
                            { item.name } <Icon type="down" />
                        </div>
                    </a>
                </Dropdown>
            )
        });
        return (
            <div className="product-nav" style={{
                overflow: 'hidden',
                overflowX: 'auto',
                display: 'flex',
                justifyContent: 'flex-start'
            }}>
                <div style={{
                    height: 40,
                    width: 100,
                    lineHeight: '40px',
                    background: 'white',
                    color: '#0e77ca',
                    cursor: 'pointer'
                }} onClick={this.handleClick}>
                    { '全部' }
                </div>
                {menu}
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
                <Col span={6} key={item.id}>
                    <a href={`/product/${item.id}`}>
                        <div className="product-item" style={{color: "#666"}} >
                            <div className="product-item-image" >
                                <img src={item.masterPic}/>
                            </div>
                            <div className="product-item-name">{item.name}</div>
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
            productType: 0,
            productList: []
        }
    }

    componentDidMount() {
        this.handleChange(this.state.productType);
    }

    handleChange = (type) => {
        type = type || 0;
        fetch(`/api/product/list?type=${type}`)
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