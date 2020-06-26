import React, {Fragment} from 'react';
import {Breadcrumb, Row, Col, Card , Tabs} from 'antd';
import {DashboardOutlined,DatabaseOutlined} from '@ant-design/icons';
// import { Line , StackedArea} from '@ant-design/charts';

import { GraphsTemp , GraphsEvent , GraphsCotwo} from './Graphs';

import './Common.css';

const { TabPane } = Tabs;

export default class TunnelCurrentB extends React.Component {

 state={
    tunnelName:'상행'
}

  setTunnel=(key)=>{
    if(key === 1){
      this.setState({  tunnelName:'상행'  })
    }else{
      this.setState({  tunnelName:'하행'  })
    }
  }

//border:'solid 1px black'
refreshDiv =()=>{
  this.setState({});
}

  render(){
    {setTimeout(this.refreshDiv , 15000)}
    return (
        <Fragment>

            <div>
                <Breadcrumb style={{
                            marginBottom: '20px'
                        }}>
                    <Breadcrumb.Item><DashboardOutlined/>&nbsp;&nbsp;Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item><DatabaseOutlined/>&nbsp;Data</Breadcrumb.Item>
                </Breadcrumb>

                <div>

                <Tabs defaultActiveKey="1" onChange={(key)=>{this.setTunnel(key)}}>
                  <TabPane tab="세종 A위치 터널 상행" key="1" />
                  <TabPane tab="세종 A위치 터널 하행" key="2" />
                </Tabs>
<Card>
                  <Row justify="center"  style={{ marginBottom:'3px'}} >
                      <Col  style={{background: '#F9F9F9' ,width:'20%' , height:'40px',boxShadow:'5px 5px 5px 5px gray' }} >
                          <h2 style={{ textAlign:'left' , marginLeft:'20px'}}>Tunnel Name</h2>
                        </Col>
                        <Col   style={{ marginLeft:'3px' ,background: '#F9F9F9' ,width:'70%',height:'40px' ,boxShadow:'5px 5px 5px 5px gray' }} >
                            <h2 style={{ textAlign:'left' ,  marginLeft:'20px'}}>Graph</h2>
                        </Col>
                  </Row>

                  <Row justify="center"  style={{ marginBottom:'3px'}} >
                      <Col  style={{  background: '#DEEBF7' ,width:'20%' , height:'500px' ,boxShadow:'5px 5px 5px 5px gray' }} >
                        <ul><br/>
                             세종 A터널 {this.state.tunnelName}<br/>
                            <li>위치설명 : 세종시 전동면 심중리 <br/> A 터널 {this.state.tunnelName} 입니다.</li>
                            <li>온도 : 현재 온도그래프의 <br/>기준온도 27℃입니다.</li>
                            <li>사고 : 금일의 사고 현황을 나타냅니다. </li>
                            <li>Co2  : 이산화탄소의 평균 농도는 0.04% 이고 <br/> 약간의 가중치로 변화량을 나타냈습니다. </li>

                        </ul>
                        </Col>
                        <Col   style={{  marginLeft:'3px' ,background: 'white' ,width:'70%',height:'500px' ,boxShadow:'5px 5px 5px 5px gray' }} >
                          <div  style={{borderRight:'2px solid #F1F1F1' ,background: 'white'  ,width:'33%',height:'300px' , float:'left'}}>   <GraphsTemp/></div>
                            <div  style={{borderRight:'2px solid #F1F1F1' , background: 'white'  ,width:'33%',height:'300px' , float:'left'}}><GraphsEvent/></div>
                            <div  style={{background: 'white'  ,width:'33%',height:'300px' , float:'left'}}><GraphsCotwo/></div>
                        </Col>
                  </Row></Card>
                  </div>
            </div>
        </Fragment>
    );
  }
};
//<GraphsTemp/>
