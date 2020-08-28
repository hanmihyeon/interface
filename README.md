# 5G 인공지능 기반의 터널형 공공시설물 안전 사고 예방 대응

## 기본 구조
--------------
<img width="221" alt="structure" src="https://user-images.githubusercontent.com/48468078/89877812-9c133480-dbfb-11ea-8e70-b95b655bbb36.PNG">

## 사용한 라이브러리 정리
- Frontend
  * [antd](https://ant.design/): React UI Framework, 전체적인 디자인은 모두 AntD 사용
  * [moment](https://www.npmjs.com/package/moment): 날짜 관련 작업
  * [react-live-clock](https://www.npmjs.com/package/react-live-clock): header의 현재 시간 표시
  * [video-react](https://www.npmjs.com/package/video-react): 모니터링 페이지의 관제 화면에 사용되는 React 플레이어. 변경 가능성 있음
  * [react-trafficlight](https://www.npmjs.com/package/react-trafficlight): 헬스 체크 페이지의 device 상태를 표현하기 위해 사용
  * [rc-tween-one](https://www.npmjs.com/package/rc-tween-one): 터널의 로봇 움직임을 표현하기 위해 사용. 임시로 사용된 것으로 변경 가능성 있음
  * [react-joystick-component](https://www.npmjs.com/package/react-joystick-component): 로봇 제어 페이지, 터널 운영 페이지의 로봇 컨트롤에 사용. 변경 가능성 있음

  + 차트
    * [highcharts](https://www.highcharts.com/): 로봇 제어 페이지의 환경 센서 column 차트, 로봇 상태 추이 area 차트, 터널 운영 페이지의 FBG 센서 column 차트, Sagnac 센서의 line 차트에 사용
    * [highcharts-react-official](https://www.npmjs.com/package/highcharts-react-official): Highcharts의 React 사용을 위한 라이브러리
    * [apexcharts](https://apexcharts.com/): 터널 운영 페이지의 현황 donut 차트, 환경 센서 radial 차트에 사용
    * [react-apexcharts](https://www.npmjs.com/package/react-apexcharts): Apexcharts의 React 사용을 위한 라이브러리
    * [react-d3-speedometer](https://www.npmjs.com/package/react-d3-speedometer): 로봇 제어 페이지의 전압, 전류를 표현하기 위해 사용
    * [react-thermometer-ecotropy](https://www.npmjs.com/package/react-thermometer-ecotropy): 로봇 제어 페이지의 온도를 표현하기 위해 사용

  + 기타 미사용하는 라이브러리(사용할 수 있어 삭제하지 않은 라이브러리)
    * [react-animated-tree](https://www.npmjs.com/package/react-animated-tree): 트리 구조 표현할 때 사용
    * [react-download-link](https://www.npmjs.com/package/react-download-link): 파일 다운로드에 사용
    * [react-audio-spectrum](https://www.npmjs.com/package/react-audio-spectrum): audio spectrum 표현
    * [recharts](http://recharts.org/en-US): 이전 대시보드 페이지의 센서 차트에 사용



- Backend
_**담당이 아니기때문에 정확하지 않으며 추후 수정 예정_
  + 서버
    * axios
    * body-parser
    * cors
    * crypto
    * express
    * http-proxy-middleware

  + 데이터베이스
    * pg
    * pg-pool
    * pg-promise
    
--------------
