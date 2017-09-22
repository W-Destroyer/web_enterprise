/*
    Create By Piny
    2017.06.06
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Layout, Menu, Breadcrumb, BackTop, Row, Col, Pagination } from 'antd';
const { Content } = Layout;
const { SubMenu, Item } = Menu;

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
                    <Banner data={bannerData}/>
                    <div style={{
                        background: '#fff',
                        minHeight: 380,
                    }}>
                        <div className="row"></div>
                        <div className="row">
                            <div className="container product row-body">
                                
                                <Product classifyList={productData.classifyList} />
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

class Product extends Component {
    constructor() {
        super();
        this.state = {
            productType: 0,
            productList: [],
            total: 0
        }
    }

    componentDidMount() {
        this.handleClick(this.state.productType);
    }

    handleClick = type => {
        type = type || 0;
        fetch(`/api/product/list?type=${type}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)

                this.setState({
                    productType: type,
                    productList: res.data.productList,
                    total: res.data.total
                })
            })
    }

    changePage = index => {
        this.setState({

        })
    }

    render() {
        var {classifyList} = this.props;
        var menuDom = classifyList.map((item, index) => {
            return (
                <SubMenu key={item.id} title={<div className="product-nav-list" style={{cursor: 'pointer'}}>{item.name}</div>} >
                    {
                        item.children ? item.children.map(child => {
                            return (
                                <Menu.Item key={child.id}>
                                    <div className="product-nav-child-list" style={{cursor: 'pointer'}}>{child.name}</div>
                                </Menu.Item>
                            )
                        }) : (
                            <Item disabled> 
                                <div className="product-nav-child-list" > 暂无分类 </div>
                            </Item>
                        )
                    }
                </SubMenu>
            )
        });
        return (
            <div>
                <header >
                    无尘产品
                </header>
                <p className="describe">
                    我们致力于让科技改善人们的生活
                </p>
                <Row type="flex" justify="left" gutter={20}>
                    <Col span={6}>
                        <Menu
                            className="product-nav"
                            defaultSelectedKeys={[this.state.productType]}
                            mode="inline"
                            onClick={e => this.handleClick(e.key)}
                        >
                            <Item key='0'>
                                <div className="product-nav-list" style={{cursor: 'pointer'}}>全部</div>
                            </Item>
                            {menuDom}
                        </Menu>
                    </Col>
                    <Col span={18}>
                        <ProductList productList={this.state.productList}/>
                        {this.state.productList.length !== 0 && (<div style={{marginTop: '30px'}}>
                            <Pagination defaultCurrent={1} total={this.state.productList.length} />
                        </div>)}
                    </Col>
                </Row>
            </div>
        )
    }
}

ReactDOM.render(<App data={initialProps}/>, document.getElementById('main'));
