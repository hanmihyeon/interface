import React, {Component ,Fragment ,useState, useEffect} from 'react';
import {Breadcrumb, Row, Col, Card } from 'antd';
import {DashboardOutlined,DatabaseOutlined , SmileTwoTone } from '@ant-design/icons';

import './TunnelCurrentB.css'

import TweenOne from 'rc-tween-one';
import BezierPlugin from 'rc-tween-one/lib/plugin/BezierPlugin';
TweenOne.plugins.push(BezierPlugin);

export const TunnelList =({tList})=>{

  const animation = {
    bezier: {
      type: 'soft',
      vars: [
        { x: 500, y: 0 },
        { x: 600, y: 0 },
      ],
    },
    repeat: -1,
    yoyo: true,
    duration: 15000,
  };

  return(
    <>
    
          {/*<ul style={{position:'absolute',marginTop:'24%',fontSize:'110%' , border:'1px solid black', lineHeight:'130%'}}>
              <div style={{marginTop:'-19%'}}>범례</div>
              <li>내부 혼잡도: <SmileTwoTone twoToneColor="#eb2f96"/></li>
              <li>일반 카메라: <SmileTwoTone /> </li>
              <li>열화상 카메라: <SmileTwoTone twoToneColor="#00ff00" />  </li>
              <li>로봇 카메라: <SmileTwoTone twoToneColor="#3333cc"/> </li>
  </ul>*/}

                <div style={{position:'absolute',marginLeft:'25%' , marginTop:'6%',width:'50%' ,border:'4px solid #3333cc'  }}></div>
                <TweenOne animation={animation} > <div style={{position:'absolute',marginLeft:'25%' , marginTop:'5%' , width:'3%', height:'35px',border:'4px solid #3333cc' , background:'#7070db', borderRadius:'20%' }}></div></TweenOne>

                <div style={{position:'absolute',marginLeft:'29%' , marginTop:'9%',width:'55%' ,border:'1px solid black'  }}></div>

                <div style={{position:'absolute',marginLeft:'28%' , marginTop:'8%',width:'3%', height:'10%',border:'4px solid #00a000' , background:'#75ff75', borderRadius:'100%' }}></div>
                <div style={{position:'absolute',marginLeft:'46%' , marginTop:'8%',width:'3%', height:'10%',border:'4px solid #00a000' , background:'#75ff75',borderRadius:'100%' }}></div>
                <div style={{position:'absolute',marginLeft:'64%' , marginTop:'8%',width:'3%', height:'10%',border:'4px solid #00a000' , background:'#75ff75',borderRadius:'100%' }}></div>
                <div style={{position:'absolute',marginLeft:'82%' , marginTop:'8%',width:'3%', height:'10%',border:'4px solid #00a000' , background:'#75ff75',borderRadius:'100%' }}></div>

                <div style={{position:'absolute',marginLeft:'27%' , marginTop:'9%',width:'3%', height:'10%',border:'4px solid #1890ff' , background:'skyblue', borderRadius:'100%' }}></div>
                <div style={{position:'absolute',marginLeft:'45%' , marginTop:'9%',width:'3%', height:'10%',border:'4px solid #1890ff' , background:'skyblue',borderRadius:'100%' }}></div>
                <div style={{position:'absolute',marginLeft:'63%' , marginTop:'9%',width:'3%', height:'10%',border:'4px solid #1890ff' , background:'skyblue',borderRadius:'100%' }}></div>
                <div style={{position:'absolute',marginLeft:'81%' , marginTop:'9%',width:'3%', height:'10%',border:'4px solid #1890ff' , background:'skyblue',borderRadius:'100%' }}></div>

{/*
                <div style={{position:'absolute',marginLeft:'15%' , marginTop:'24%',width:'12%', height:'10%', background:'#e6f7ff',textAlign:'center',border:'4px solid #1890ff'  }}><h1>내부혼잡도: 원활</h1> </div>
                <div style={{position:'absolute',marginLeft:'28%' , marginTop:'24%',width:'10%', height:'10%', background:'#e6f7ff' ,textAlign:'center',border:'4px solid #1890ff' }}><h1>FBG: 24/24</h1></div>
                <div style={{position:'absolute',marginLeft:'39%' , marginTop:'24%',width:'10%', height:'10%', background:'#e6f7ff',textAlign:'center' ,border:'4px solid #1890ff' }}><h1>Sagnac: 정상</h1></div>
*/}

              <div   style={{float:'left',marginLeft:'23%' ,marginTop:'6%' ,width:'55%'  ,border:'3px solid black' }}></div>
              <div style={{float:'left' ,marginLeft:'15%' ,  width:'15%', height:'200px' ,border:'5px solid black' , borderRadius:'100px 100px 0px 0px' }}></div>

              <div style={{marginLeft:'70%' , marginTop:'6%',width:'16%', height:'200px'   ,borderRight:'5px solid black' , borderRadius:'100px 100px 0px 0px' }}></div>

    </>
  );
}

export default class TunnelCurrentB extends Component {

refreshDiv =()=>{
  this.setState({});
}

  render(){
    const tList = [1, 2 ];
    {setTimeout(this.refreshDiv , 15000)}
    return (
                <div></div>
    );
  }
};

