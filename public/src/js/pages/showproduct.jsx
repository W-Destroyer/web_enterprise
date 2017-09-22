/*
    Create By Piny
    2017.06.06
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Layout, Menu, Breadcrumb, BackTop, Row, Col, Pagination, Carousel, Tabs, Icon } from 'antd';
const { Content } = Layout;
const { TabPane } = Tabs;

// 加载样式文件
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

        var productInfo = data.productInfo;

        return(
            <Layout style={{backgroundColor: "#fff"}}>
                <Header data={headerData}/>
                <Content style={{marginTop: 164}}>
                    <div style={{
                        background: '#fff',
                        minHeight: 380,
                    }}>
                        <div className="row">
                            <div className="container product row-body">
                                <Row type="flex" justify="left" gutter={20}>
                                    <Col span={10}>
                                        <ProductImage />
                                    </Col>
                                    <Col span={14} style={{textAlign: 'left', }}>
                                        <ProductSize
                                            name={productInfo.name}
                                            price={productInfo.price}
                                            size={productInfo.size}
                                            color={productInfo.color}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="row">
                            <div className="container">
                                <Row type="flex" justify="left" gutter={40}>
                                    <Col span={18}>
                                        <ProductInfo />
                                    </Col>
                                    <Col span={6}>
                                        <ProductRecommend />
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

class ProductImage extends Component {
    constructor() {
        super();
        this.state = {
            current: '0'
        }
    }

    beforeChange = (fromId, toId) => {
        Array.from(this.refs.imagesThumbList.children).map(child => {
            child.className = "list-thumb-item";
        });
        this.refs.imagesThumbList.children[toId].className = 'list-thumb-item thumb-active';
    }

    afterChange = (current) => {
        // console.log(current)
    }

    previous = () => {
        this.carousel.slickPrev()
    }

    next = () => {
        this.carousel.slickNext()

    }

    handleClick = (e, slideNumber) => {
        this.carousel.slickGoTo(slideNumber)
    }

    render() {
        return (
            <div className="product-images">
                <div style={{position: 'relative'}} className="product-images-container">
                    <Carousel 
                        ref={carousel => this.carousel = carousel.refs.slick }
                        autoplay
                        dots={true}
                        dotsClass="product-images-dots"
                        fade={true}
                        autoplaySpeed='5000'
                        beforeChange={this.beforeChange}
                        afterChange={this.afterChange}
                    >
                        <div key='0' style={{display: 'flex', justifyContent: 'center'}}>
                            <img src='//localhost:8080/product/pic1.png' />
                        </div>
                        <div key='1' style={{display: 'flex', justifyContent: 'center'}}>
                            <img src='//localhost:8080/product/pic1.png' />
                        </div>
                        <div key='2' style={{display: 'flex', justifyContent: 'center'}}>
                            <img src='//localhost:8080/product/pic1.png' />
                        </div>
                        <div key='3' style={{display: 'flex', justifyContent: 'center'}}>
                            <img src='//localhost:8080/product/pic1.png' />
                        </div>
                        <div key='4' style={{display: 'flex', justifyContent: 'center'}}>
                            <img src='//localhost:8080/product/pic1.png' />
                        </div>
                        <div key='5' style={{display: 'flex', justifyContent: 'center'}}>
                            <img src='//localhost:8080/product/pic1.png' />
                        </div>
                        <div key='6' style={{display: 'flex', justifyContent: 'center'}}>
                            <img src='//localhost:8080/product/pic1.png' />
                        </div>
                    </Carousel>
                    <div className="image-turn image-turn-left" onClick={this.previous}>
                        <div></div>
                    </div>
                    <div className="image-turn image-turn-right" onClick={this.next}>
                        <div></div>
                    </div>
                </div>
                <div className="images-thumb">
                    <div className="images-thumb-left">
                        <Icon type="left" style={{ fontSize: 24, color: '#fff' }} />
                    </div>
                    <div className="images-thumb-content">
                        <div className="images-thumb-list" ref="imagesThumbList">
                            <div className="list-thumb-item thumb-active" onClick={(e) => this.handleClick(e, 0)}>
                                <img src="//localhost:8080/product/pic1.png"/>
                            </div>
                            <div className="list-thumb-item" onClick={(e) => this.handleClick(e, 1)}>
                                <img src="//localhost:8080/product/pic1.png"/>
                            </div>
                            <div className="list-thumb-item" onClick={(e) => this.handleClick(e, 2)}>
                                <img src="//localhost:8080/product/pic1.png"/>
                            </div>
                            <div className="list-thumb-item" onClick={(e) => this.handleClick(e, 3)}>
                                <img src="//localhost:8080/product/pic1.png"/>
                            </div>
                            <div className="list-thumb-item" onClick={(e) => this.handleClick(e, 4)}>
                                <img src="//localhost:8080/product/pic1.png"/>
                            </div>
                            <div className="list-thumb-item" onClick={(e) => this.handleClick(e, 5)}>
                                <img src="//localhost:8080/product/pic1.png"/>
                            </div>
                            <div className="list-thumb-item" onClick={(e) => this.handleClick(e, 6)}>
                                <img src="//localhost:8080/product/pic1.png"/>
                            </div>
                            <div className="list-thumb-item" onClick={(e) => this.handleClick(e, 7)}>
                                <img src="//localhost:8080/product/pic1.png"/>
                            </div>

                        </div>
                    </div>
                    <div className="images-thumb-right">
                        <Icon type="right" style={{ fontSize: 24, color: '#fff' }} />
                    </div>
                </div>
            </div>
        )
    }
}

class ProductSize extends Component {
    constructor() {
        super();
    }

    render() {
        const { name, price, size, color } = this.props;
        return (
            <div>
                <div clasName="product-name" style={{fontSize: '18px', marginBottom: '10px', color: '#000'}}>{name}</div>
                <div className="product-price" style={{padding: '20px', backgroundColor: '#fafafa', color: '#f96868', fontSize: '20px'}}>￥{price}</div>
                <div className="product-size" style={{marginTop: '15px'}}>
                    <Row>
                        <Col span={4}><div style={{color: '#9e9e9e', fontSize: '14px'}}>颜色</div></Col>
                        <Col span={20}><div>{color}</div></Col>
                    </Row>
                </div>
                <div className="product-size" style={{marginTop: '15px'}}>
                    <Row>
                        <Col span={4}><div style={{color: '#9e9e9e', fontSize: '14px'}}>尺码</div></Col>
                        <Col span={20}><div>{size}</div></Col>
                    </Row>
                </div>
                <div className="product-num" style={{marginTop: '15px'}}>
                    <Row>
                        <Col span={4}><div style={{color: '#9e9e9e', fontSize: '14px'}}>数量</div></Col>
                        <Col span={20}><div>不限</div></Col>
                    </Row>
                </div>
            </div>
        )
    }
}

class ProductInfo extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='product-detail'>
                <Tabs defaultActiveKey="1" onChange={index => console.log(index)}>
                    <TabPane tab={'详情'} key="1">
                        <div style={{padding: '15px', borderBottom: '1px solid #f0f2f5'}}>
                            <Row  type="flex" justify="left" gutter={20}>
                                <Col span={6} style={{lineHeight: '30px'}}>编码：MD-1101</Col>
                                <Col span={6} style={{lineHeight: '30px'}}>材质：涤纶长丝、导电纤维</Col>
                                <Col span={6} style={{lineHeight: '30px'}}>颜色：多色可选</Col>
                                <Col span={6} style={{lineHeight: '30px'}}>表面电阻：106-109Ω</Col>
                                <Col span={6} style={{lineHeight: '30px'}}></Col>
                            </Row>
                        </div>
                        <div></div>
                        <div></div>
                    </TabPane>
                    <TabPane tab={'功能'} key="2">
                        <div></div>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

class ProductRecommend extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div style={{backgroundColor: '#fff'}}>
                
            </div>
        )
    }
}

ReactDOM.render(<App data={initialProps}/>, document.getElementById('main'));
