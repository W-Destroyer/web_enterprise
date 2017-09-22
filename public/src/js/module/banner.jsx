/*
    Create By Piny
    2017.06.06
 */

import React, { Component } from 'react';

import { Carousel } from 'antd';

export default class Banner extends Component {
    constructor() {
        super();
    }

    beforeChange(from, to) {
        // console.log('before', from, to)
    }

    afterChange(data) {
        // console.log('after', data)
    }

    render() {
        var { data } = this.props;
        var bannerDom = data.list.map(item => {
            return (
                <div key={item.id}>
                    <img src={item.value} />
                </div>
            )
        })
        return (
            <div className='banner' style={{
                margin: '0'
            }}>
                <Carousel autoplay autoplaySpeed='2000' beforeChange={this.beforeChange} afterChange={this.afterChange}>
                    { bannerDom }
                </Carousel>
            </div>
        )
    }
}