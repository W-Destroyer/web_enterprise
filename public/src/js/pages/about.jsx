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
            title: data.sysconfig.title
        }
        var footerData = {
            friendLinkList: data.sysconfig.friendLinkList
        }
        // var productData = {
        //     classifyList: data.classifyList
        // }
        // var newsData = {
        //     newsList: data.newsList
        // }
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
                            <AboutUS />
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

// class Partner extends Component {
//     constructor() {
//         super();
//     }

//     render() {

//         return (
//             <div className="container about row-body">
//                 <header >
//                     合作伙伴
//                 </header>
//                 <p className="describe">
//                     我们致力于让科技改善人们的生活
//                 </p>
//                 <div className="news-list" style={{marginTop: '30px'}}>
//                     <Row type="flex" justify="left" gutter={20}>
//                         <Col span={3}>1</Col>
//                         <Col span={3}>1</Col>
//                         <Col span={3}>1</Col>
//                         <Col span={3}>1</Col>
//                         <Col span={3}>1</Col>
//                         <Col span={3}>1</Col>
//                         <Col span={3}>2</Col>
//                         <Col span={3}>2</Col>
//                         <Col span={3}>2</Col>
//                         <Col span={3}>2</Col>
//                     </Row>
//                 </div>
//             </div>
//         )
//     }
// }


ReactDOM.render(<App data={initialProps}/>, document.getElementById('main'));
