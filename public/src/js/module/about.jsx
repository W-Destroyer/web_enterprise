/**
 * Create By Piny 
 * 2017/06/30
 */

import React, { Component } from 'react';

import {Row, Col, Menu, Icon} from 'antd';

export class AboutContent extends Component {
    constructor() {
        super();
        this.abstract = {
            info: `<span style="font-size: 18px;">深圳市海威达航科技有限公司是一家从事研发、制造、销售为一体的专业从事防静电产品、无尘室净化用品。产品性能已达到国际同类产品的先进水平，广泛应用于电子、半导体、LCD制造、PCB制造、精密机械、食品加工及生化制药等行业。我们的宗旨是以人为本、全员环保、节能降耗、持续改进。为客户提供优质产品和高效服务。
                   专业生产：无尘布、超细无尘布、MF超细无尘布、1200超细无尘布、HW超细无尘布、2000超细无尘布、7100超细无尘布、7000超细无尘布、2009超细无尘布、1100超细无尘布、激光封边无尘布、超声波宽封边涤纶无尘布、1000LE激光封边绦纶无尘布、鞋套机、防静电手套、防静电防滑手套、防静电服、防静电连体服、防静电大褂、防静电分体服、防静电夹克、防静电工帽、防静电鞋、EVA导电拖鞋、粘尘垫、粘尘滚筒、防静电毛刷、离子风机、风淋室、防静电屏蔽袋、防静电周转箱、防静电元件盒、防静电条形架、防静电平行周转架、防静电椅子、防静电圆凳、SMT上下料架、防静电台垫、防静电手推车、防静电镀铬货架、防静电手腕带及手腕带在线监视器等。
                   <br />ACL中国总代理：美国ACL380表面电阻测试仪、ACL-300B静电压测试仪、ACL-350静电电压测试仪、ACL-800兆欧仪、ACL-750人体静电检测仪、ACL-600人体静电放电检测仪、ACL-400离子环境静电检测仪、ACL-780手腕带及鞋检测仪、ACL-781人体综合测试仪、ACL-2003静电剂、ACL-2005强力型静电剂、ACL-3000G浓缩型静电剂。</span>`
        }
    }
    render() {
        return (
            <div>
                <section style={{marginTop: '50px', padding: '30px', background: '#fff'}}>
                    <Row type="flex" justify="left" gutter={20}>
                        <Col span={24}>
                            <div>
                                <img style={{width: '100%'}} src='/images/aboutme.jpg'/>
                            </div>
                        </Col>
                        <Col span={24}>
                            <div style={{borderBottom: '1px solid #e1e1e1', margin: '20px 0'}}>
                            </div>
                        </Col>
                        <Col span={24}>
                            <div style={{padding: '10px 0', textAlign: 'left'}}>
                                {this.abstract.info}
                            </div>
                        </Col>
                    </Row>
                </section>
            </div>
        )
    }
}

export default class AboutUS extends Component {
    render() {
        return (
            <div className="container about row-body">
                <header >
                    关于我们
                </header>
                <p className="describe">
                    我们致力于让科技改善人们的生活
                </p>
                <AboutContent />
            </div>
            
        )
    }
}