import React from 'react';
import { Line , GroupedColumn } from '@ant-design/charts';


export const GraphsTemp = () => {


   let today = new Date();
   let hours = today.getHours();
   const data = [];
   let temp =27;


//////////// 온도 배열 ///////////////
   let avg=0;
   let arr=[];

   for(let j=1; j<=1440; j++)
   {
     let math =  Math.floor(Math.random() * 100) ;
     if(math>= 0 && math < 2){
       temp+=1;
     }else if( math >= 2 && math< 4){
       temp-=1;
     }else{
       temp+=0;
     }

     avg+=temp;
     if( j%60 === 0 ){
       arr.push(avg/60);
       avg=0;
     }
   }

/////////////////////////////////  data값을 10으로 나눠준다는 가정하에 1440 이 가능하지만 그래프가 디지털처럼보인다.
   for(let i=0; i<arr.length; i++)
   {

     if(i<=hours){
        data.splice(i, 0, { "state": "온도", "date": i, "value": Math.round(arr[i]*10)/10});
     }else{
          if(i===23){
                data.splice(i, 0, { "state":"온도", "date": i , "value": {} });
          }else{
                data.splice(i, 0, { "state":"온도", "date": {}, "value": 100 });
          }
     }
   }


 const config = {
   title: {
     visible: true,
      text: '당일 온도 추이',
   },
   description: {
     visible: true,
     text:
       '당일 시간별 온도 선형 그래프.',
   },
   padding: [20, 60, 30, 80],
   forceFit: true,
   data,
   xField: 'date',
   yField: 'value',
   seriesField: 'state',
   xAxis: {
     type: 'dateTime',
     formatter: (d) => `${d}시` ,
     label: {
       visible: true,
       autoHide: true
     },
   },
   yAxis: { formatter: (d) => `${d} ℃` },   //   yAxis: { formatter: (v) => `${(v / 1000000000).toFixed(1)} B` },
   legend: { visible: false },
   label: {
     visible: true,
     type: 'line',
   },


 };
//둘다 사이즈 조정해야 화면에서 조정됨
    return (
        <div  style={{ width:'100%' , height:'100%' }}>
          <Line {...config} style={{ width:'100%' , height:'100%' }} />

        </div>

    );
};


export const GraphsEvent = () => {

    let today = new Date();
    let hours = today.getHours();
    let eventNum =5;


 //////////// 온도 배열 ///////////////
    let avg=0;
    let arr=[];
    for(let j=1; j<=1440; j++)
    {
      let math =  Math.floor(Math.random() * 100) ;
      if(math>= 0 && math < 1){
        eventNum+=1;
      }else if( math >= 1 && math< 2){
        eventNum-=1;
      }else{
        eventNum+=0;
      }

      avg+=eventNum;
      if( j%60 === 0 ){
        arr.push(avg/60);
        avg=0;
      }
    }

   const data = [];
   for(let i=0; i<24; i++)
   {

     if(i<=hours){
      data.splice(i, 0, { "state": "사고", "date": i, "value": Math.round(arr[i])});
     }else{
       if(i===23){
             data.splice(i, 0, { "state":"사고", "date": i , "value": {} });
       }else{
                 data.splice(i, 0, { "state":"사고", "date": {}, "value": 30 });
       }
     }
   }



 const config = {
   title: {
     visible: true,
     text: '당일 사고 추이',
   },
   description: {
     visible: true,
     text:
       '당일 시간별 사고 선형 그래프.',
   },
   padding: [20, 60, 30, 80],
   forceFit: true,
   data,
   xField: 'date',
   yField: 'value',
   seriesField: 'state',
   xAxis: {
     type: 'dateTime',
     formatter: (d) => `${d}시` ,
     label: {
       visible: true,
       autoHide: true
     },
   },
   yAxis: { formatter: (d) => `${d}횟수` },   //   yAxis: { formatter: (v) => `${(v / 1000000000).toFixed(1)} B` },
   legend: { visible: false },
   color:['black'],
   label: {
     visible: true,
     type: 'line',
   },
  // animation: { appear: { animation: 'clipingWithData' } },
  // smooth: true,
 };
//둘다 사이즈 조정해야 화면에서 조정됨
    return (
        <div  style={{ width:'100%' , height:'100%' }}>
          <Line {...config} style={{ width:'100%' , height:'100%' }} />
        </div>

    );
};


export const GraphsCotwo = () => {

  let today = new Date();
  let hours = today.getHours();
  let cotwo =0.04;


//////////// 온도 배열 ///////////////
  let avg=0;
  let arr=[];
  for(let j=1; j<=1440; j++)
  {
    let math =  Math.floor(Math.random() * 100) ;
    if(math>= 0 && math < 1){
      cotwo+=0.001;
    }else if( math >= 1 && math< 2){
      cotwo-=0.001;
    }else{
      cotwo+=0;
    }

    avg+=cotwo;
    if( j%60 === 0 ){
      arr.push(avg/60);
      avg=0;
    }
  }

 const data = [];
 for(let i=0; i<24; i++)
 {

   if(i<=hours){
    data.splice(i, 0, { "state": "농도", "date": i, "value": Math.round(arr[i]*1000)/1000 } );
   }else{
     if(i===23){
           data.splice(i, 0, { "state":"농도", "date": i , "value": {} });
     }else{
              data.splice(i, 0, { "state":"농도", "date": {}, "value": 0.1 });
     }

   }
 }




 const config = {
   title: {
     visible: true,
     text: '당일 Co2 추이',
   },
   description: {
     visible: true,
     text:
       '당일 시간별 Co2 선형 그래프.',
   },
   padding: [20, 60, 30, 80],
   forceFit: true,
   data,
   xField: 'date',
   yField: 'value',
   seriesField: 'state',
   xAxis: {
     type: 'dateTime',
     formatter: (d) => `${d}시` ,
     label: {
       visible: true,
       autoHide: true
     },
   },
   yAxis: { formatter: (d) => `${d} %` },   //   yAxis: { formatter: (v) => `${(v / 1000000000).toFixed(1)} B` },
   legend: { visible: false },
   color:['orange'],
   label: {
     visible: true,
     type: 'line',
   },
  // animation: { appear: { animation: 'clipingWithData' } },
  // smooth: true,
 };
//둘다 사이즈 조정해야 화면에서 조정됨
    return (
        <div  style={{ width:'100%' , height:'100%' }}>
          <Line {...config} style={{ width:'100%' , height:'100%' }} />
        </div>

    );
};



export const GraphsAccid = () => {

  const data = [
     {
       name: '이상',
       day: '월',
       value: 1,
     },
     {
       name: '이상',
       day: '화',
       value: 2,
     },
     {
       name: '이상',
       day: '수',
       value: 3,
     },
     {
       name: '이상',
       day: '목',
       value: 8,
     },
     {
       name: '이상',
       day: '금',
       value: 4,
     },
     {
       name: '이상',
       day: '토',
       value: {},
     },
     {
       name: '이상',
       day: '일',
       value: {},
     },
     {
       name: '사고',
       day: '월',
       value: 3,
     },
     {
       name: '사고',
       day: '화',
       value: 4,
     },
     {
       name: '사고',
       day: '수',
       value: 2,
     },
     {
       name: '사고',
       day: '목',
       value: 3,
     },
     {
       name: '사고',
       day: '금',
       value: 9,
     },
     {
       name: '사고',
       day: '토',
       value: {},
     },
     {
       name: '사고',
       day: '일',
       value: {},
     },

   ];
   const config = {
     title: {
       visible: true,
       text: '터널 금주 추이 그래프',
     },

     data,
     xField: 'day',
     yField: 'value',
     yAxis: { min: 0 },
     label: { visible: true },
     groupField: 'name',
     color: ['#fff58c', '#FFCB8C'],
   };
    return (
          <div  style={{ width:'100%' , height:'110%' }}  >
            <GroupedColumn  {...config}  style={{ width:'100%' , height:'100%' }} />
          </div>
          );
};
