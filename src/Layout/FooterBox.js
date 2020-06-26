import React, {Component} from 'react';
import './Footer.css';

import {Layout} from 'antd';

const {Footer} = Layout;

class FooterBox extends Component {
    render() {
        return (
            <Footer className='footer'>
            <div> h4tech tunnel system by Ant Design ©2020</div></Footer>
        )
    }
}

export default FooterBox;