import React, {Fragment ,useState, useEffect} from 'react';
import {Breadcrumb, Row, Col, Card} from 'antd';
import {DashboardOutlined,DatabaseOutlined} from '@ant-design/icons';
import { Line , StackedArea} from '@ant-design/charts';

import { GraphsTemp , GraphsEvent , GraphsCotwo} from './Graphs';

export default class TunnelCurrentB extends React.Component {

//border:'solid 1px black'
/*
  refreshDiv =()=>{
    this.setState({});
  }{setTimeout(this.refreshDiv , 10000)}
                  */
  render(){
    return (
        <Fragment>
            <div style={{
                    marginLeft: '15px'
                }}>
                <Breadcrumb>
                    <Breadcrumb.Item><DashboardOutlined/>&nbsp;&nbsp;Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item><DatabaseOutlined/>&nbsp;Data</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{marginTop:'5px'}}>.</div>


                  <Row justify="center" >
                      <Col  style={{background: '#F9F9F9' ,width:'20%' , height:'40px',boxShadow:'5px 5px 5px 5px gray' }} >
                          <h2 style={{ textAlign:'left' , marginLeft:'20px'}}>Tunnel Name</h2>
                        </Col>
                        <Col   style={{background: '#F9F9F9' ,width:'70%',height:'40px' ,boxShadow:'5px 5px 5px 5px gray' }} >
                            <h2 style={{ textAlign:'left' ,  marginLeft:'20px'}}>Graph</h2>
                        </Col>
                  </Row>

                  <Row justify="center" >
                      <Col  style={{background: '#DEEBF7' ,width:'20%' , height:'300px' ,boxShadow:'5px 5px 5px 5px gray' }} >
                        <ul><br/>
                            터널 A 상행
                            <li>위치설명 : 어디어디 위치한 터널 입니다.</li>
                            <li>온도</li>
                            <li>혼잡도</li>
                            <li>사고</li>

                        </ul>
                        </Col>
                        <Col   style={{background: 'white' ,width:'70%',height:'300px' ,boxShadow:'5px 5px 5px 5px gray' }} >
                          <div  style={{background: 'white'  ,width:'33%',height:'300px' , float:'left'}}>   <GraphsTemp/></div>
                            <div  style={{background: 'white'  ,width:'33%',height:'300px' , float:'left'}}><GraphsEvent/></div>
                            <div  style={{background: 'white'  ,width:'33%',height:'300px' , float:'left'}}><GraphsCotwo/></div>
                        </Col>
                  </Row>

                  <Row justify="center"  >
                      <Col  style={{background: '#DEEBF7' ,width:'20%' , height:'300px' ,boxShadow:'5px 5px 5px 5px gray' }} >
                      <ul><br/>
                          터널 A 하행
                          <li>위치설명 : 어디어디 위치한 터널 입니다.</li>
                          <li>온도</li>
                          <li>혼잡도</li>
                          <li>사고</li>
                      </ul>
                        </Col>
                        <Col   style={{background: 'white' ,width:'70%',height:'300px' ,boxShadow:'5px 5px 5px 5px gray' }} >
                          <div  style={{background: 'white'  ,width:'33%',height:'300px' , float:'left'}}>   <GraphsTemp/></div>
                            <div  style={{background: 'white'  ,width:'33%',height:'300px' , float:'left'}}><GraphsEvent/></div>
                            <div  style={{background: 'white'  ,width:'33%',height:'300px' , float:'left'}}><GraphsCotwo/></div>
                        </Col>
                  </Row>


            </div>
        </Fragment>
    );
  }
};
//<GraphsTemp/>
