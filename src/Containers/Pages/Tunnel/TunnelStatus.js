import React, { Fragment, useState } from 'react';
import { ArrowRightOutlined, VideoCameraOutlined } from '@ant-design/icons';
import TweenOne from 'rc-tween-one';
import BezierPlugin from 'rc-tween-one/lib/plugin/BezierPlugin';

TweenOne
    .plugins
    .push(BezierPlugin);

export const TunnelStatus = () => {
    const eL = [1, 1, 1, 1, 2, 2, 2, 1, 1, 1];
    const [eventlocation, setEventlocation] = useState(0);
    const distance = [0, 48, 96, 144, 192, 240, 288, 336, 384, 432, 480];
    const animation = {
        bezier: {
            type: 'soft',
            vars: [
                {
                    x: 0,
                    y: 0
                }, {
                    x: 1000,
                    y: 0
                }
            ]
        },
        repeat: -1,
        yoyo: true,
        duration: 20000
    };

    const StatusAlert = () => {
        setEventlocation(2);
    };

    return (
        <Fragment>
            <div className="robot-tunnel">
                {eL.map(eL => (<div className={eventlocation === eL ? 'tunnel-section-red' : 'tunnel-section'}><span className="section-distance">&nbsp;0m</span></div>))}
                {/*<span className="section-distance">{distance.map(distance => distance+'m')}</span>*/}
                <div className="robot-tunnel-direction">
                    <ArrowRightOutlined />
                </div>
                <div className="robot-tunnel-rail">
                    <div className="robot-cctv">
                        <VideoCameraOutlined /><VideoCameraOutlined /><VideoCameraOutlined /><VideoCameraOutlined />
                    </div>
                    <TweenOne animation={animation}>
                        <div className="robot" onClick={StatusAlert}></div>
                    </TweenOne>
                </div>
            </div>
        </Fragment>
    )
}
