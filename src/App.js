import React, {Component} from 'react';
import {Layout} from 'antd';
import Menu from './Layout/Menu';
import ContentBox from './Layout/ContentBox';
import HeaderBox from './Layout/HeaderBox';
import FooterBox from './Layout/FooterBox';
const {Content,Sider,Header,Footer} = Layout;

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Menu/>
                    <Layout>
                        <Header
                            style={{background:'#fff', borderBottomColor:'#0a0a0a'}}><HeaderBox/></Header>
                        <Content style={{height:'100%', margin: '30px 30px' ,background:'white'}}><ContentBox/></Content>
                        <Footer style={{margin:'0 30px', background:'white'}}><FooterBox/></Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default App;
