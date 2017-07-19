/**
 * Create By Piny 
 * 2017/06/30
 */

import React, { Component } from 'react';

import {Row, Col, Menu, Icon} from 'antd';

export class NewsList extends Component {
    constructor() {
        super();
        this.newsList = [{
            title: "静电接地工程让最高学府爱上它",
            image: "/images/news.jpg",
            digest: "十多年前海威达航的技术队伍开始帮客户做静电接地，当时只是想帮客户解决生产车间静电释放问题，没想到十多年后，重视静电释放的客户不止是电子制造业，有很多研究所、实验室，机房等重视静电接地释放，静电放电抗扰度测试容易出现问题，设备的抗静电干扰能力有多种，出现问题有：A、设备通讯暂时性异常中断。B显示器闪道、闪屏、黑屏。C、设备故障，如死机需要人工重启。D设备内部继电器误动作。以上多种问题都足于让很多设备用户重视静电的释放，这也是最高学府多次邀请海威达航施工的主要原因",
            author: 'Piny',
            date: '2017-06-06',
            times: '999'
        }, {
            title: "静电防护淡薄才是静电危害的罪魁祸首",
            image: "/images/news.jpg",
            digest: "作为一名合格的防静电产品供应商，绝对要对产品性能、质量负责，而在目前电商竞争激烈的情况下，有很多劣质产品大量流进市场，防静电劣质产品危害性超大，市场上有很多没有经过严格检测的防静电产品，追求价格完美的用户几乎都会选择劣质产品，劣质产品要想达到防静电标准那是不可能，更换繁率高，劳命伤财，得不偿失。",
            author: 'Piny',
            date: '2017-06-07',
            times: '999'
        }, {
            title: "车间防静电设计方案",
            image: "/images/news.jpg",
            digest: "十多年前海威达航的技术队伍开始帮客户做静电接地，当时只是想帮客户解决生产车间静电释放问题，没想到十多年后，重视静电释放的客户不止是电子制造业，有很多研究所、实验室，机房等重视静电接地释放，静电放电抗扰度测试容易出现问题，设备的抗静电干扰能力有多种，出现问题有：A、设备通讯暂时性异常中断。B显示器闪道、闪屏、黑屏。C、设备故障，如死机需要人工重启。D设备内部继电器误动作。以上多种问题都足于让很多设备用户重视静电的释放，这也是最高学府多次邀请海威达航施工的主要原因",
            author: 'Piny',
            date: '2017-06-06',
            times: '999'
        }, {
            title: "静电检测仪器作用之大在哪？",
            image: "/images/news.jpg",
            digest: "十多年前海威达航的技术队伍开始帮客户做静电接地，当时只是想帮客户解决生产车间静电释放问题，没想到十多年后，重视静电释放的客户不止是电子制造业，有很多研究所、实验室，机房等重视静电接地释放，静电放电抗扰度测试容易出现问题，设备的抗静电干扰能力有多种，出现问题有：A、设备通讯暂时性异常中断。B显示器闪道、闪屏、黑屏。C、设备故障，如死机需要人工重启。D设备内部继电器误动作。以上多种问题都足于让很多设备用户重视静电的释放，这也是最高学府多次邀请海威达航施工的主要原因",
            author: 'Piny',
            date: '2017-06-06',
            times: '999'
        }, {
            title: "静电检测仪器作用之大在哪？",
            image: "/images/news.jpg",
            digest: "十多年前海威达航的技术队伍开始帮客户做静电接地，当时只是想帮客户解决生产车间静电释放问题，没想到十多年后，重视静电释放的客户不止是电子制造业，有很多研究所、实验室，机房等重视静电接地释放，静电放电抗扰度测试容易出现问题，设备的抗静电干扰能力有多种，出现问题有：A、设备通讯暂时性异常中断。B显示器闪道、闪屏、黑屏。C、设备故障，如死机需要人工重启。D设备内部继电器误动作。以上多种问题都足于让很多设备用户重视静电的释放，这也是最高学府多次邀请海威达航施工的主要原因",
            author: 'Piny',
            date: '2017-06-06',
            times: '999'
        }, {
            title: "静电检测仪器作用之大在哪？",
            image: "/images/news.jpg",
            digest: "十多年前海威达航的技术队伍开始帮客户做静电接地，当时只是想帮客户解决生产车间静电释放问题，没想到十多年后，重视静电释放的客户不止是电子制造业，有很多研究所、实验室，机房等重视静电接地释放，静电放电抗扰度测试容易出现问题，设备的抗静电干扰能力有多种，出现问题有：A、设备通讯暂时性异常中断。B显示器闪道、闪屏、黑屏。C、设备故障，如死机需要人工重启。D设备内部继电器误动作。以上多种问题都足于让很多设备用户重视静电的释放，这也是最高学府多次邀请海威达航施工的主要原因",
            author: 'Piny',
            date: '2017-06-06',
            times: '999'
        }, {
            title: "静电检测仪器作用之大在哪？",
            image: "/images/news.jpg",
            digest: "十多年前海威达航的技术队伍开始帮客户做静电接地，当时只是想帮客户解决生产车间静电释放问题，没想到十多年后，重视静电释放的客户不止是电子制造业，有很多研究所、实验室，机房等重视静电接地释放，静电放电抗扰度测试容易出现问题，设备的抗静电干扰能力有多种，出现问题有：A、设备通讯暂时性异常中断。B显示器闪道、闪屏、黑屏。C、设备故障，如死机需要人工重启。D设备内部继电器误动作。以上多种问题都足于让很多设备用户重视静电的释放，这也是最高学府多次邀请海威达航施工的主要原因",
            author: 'Piny',
            date: '2017-06-06',
            times: '999'
        }, {
            title: "静电检测仪器作用之大在哪？",
            image: "/images/news.jpg",
            digest: "十多年前海威达航的技术队伍开始帮客户做静电接地，当时只是想帮客户解决生产车间静电释放问题，没想到十多年后，重视静电释放的客户不止是电子制造业，有很多研究所、实验室，机房等重视静电接地释放，静电放电抗扰度测试容易出现问题，设备的抗静电干扰能力有多种，出现问题有：A、设备通讯暂时性异常中断。B显示器闪道、闪屏、黑屏。C、设备故障，如死机需要人工重启。D设备内部继电器误动作。以上多种问题都足于让很多设备用户重视静电的释放，这也是最高学府多次邀请海威达航施工的主要原因",
            author: 'Piny',
            date: '2017-06-06',
            times: '999'
        }, ]
    }
    render() {
        var newsListDom = this.newsList.map((item, index) => {
            return (
                <Col span={12} key={index}>
                    <div className="news-item">
                        <Row type="flex" justify="left">
                            <Col span={6}>
                                <div className="news-item-image">
                                    <img src={item.image}/>
                                </div>
                            </Col>
                            <Col span={18}>
                                <div className="news-item-content" >
                                    <p className="news-content-heading">
                                        <a href="/"> {item.title}</a>
                                    </p>
                                    <p className="news-content-body">
                                        {item.digest}
                                    </p>
                                    <p className="news-content-footer">
                                        <span className="news-content-time">{item.date}</span>
                                        <span className="news-content-author">{item.author}</span>
                                        <span className="news-content-viewcount">
                                            <Icon type="eye" style={{fontSize: '14px', marginRight: '4px'}}/>
                                            {item.times}
                                        </span>
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            )
        })
        return (
            <div className="news-list">
                <Row type="flex" justify="left" gutter={20}>
                    { newsListDom }
                </Row>
            </div>
        )
    }
}

export default class News extends Component {
    render() {
        return (
            <div className="container news row-body">
                <header >
                    博客资讯
                </header>
                <p className="describe">
                    分享最新科技资讯，关注智能硬件
                </p>
                <NewsList />
            </div>
            
        )
    }
}