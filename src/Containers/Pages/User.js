import React, {Fragment, useState, useEffect} from 'react';
import {Breadcrumb, Table} from 'antd';
import {SettingOutlined, UserOutlined} from '@ant-design/icons';

import './Common.css';

const User = () => {
    let [data, setData] = useState(null);
    //let [user_key, setuser_key] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/a')
            .then(res => res.json())
            .then(res => setData(res))
    }, []);

    const columns = [
        {
            title: 'id',
            dataIndex: 'fbg_id'
        },
        {
            title:'ts',
            dataIndex: 'fbg_ts'
        },
        {
            title: 'temp',
            dataIndex: 'fbg_temp'
        }
    ]
   /* const columns = [
        {
            title: '이름',
            dataIndex: 'name'
        }, {
            title: '번호',
            dataIndex: 'p_number'
        }, {
            title: '이메일',
            dataIndex: 'email'
        }, {
            title: '부서',
            dataIndex: 'departs'
        }, {
            title: '아이디',
            dataIndex: 'id'
        }, {
            title: '상태',
            dataIndex: 'level'
        }
    ];

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(
                `selectedRowKeys: ${selectedRowKeys}`,
                'selectedRows: ',
                selectedRows
            );
            setuser_key(selectedRowKeys);
        },
        getCheckboxProps: record => ({
            disabled: record.level === 'master',
            // Column configuration not to be checked
            level: record.level
        })
    };
*/

    return (
        <Fragment>
            <Breadcrumb className="bread">
                <Breadcrumb.Item><SettingOutlined/>&nbsp;&nbsp;Setting</Breadcrumb.Item>
                <Breadcrumb.Item><UserOutlined/>&nbsp;User</Breadcrumb.Item>
            </Breadcrumb>

            <div className="user contents">User</div>
            <div>
                <Table
                    bordered="bordered"
                    columns={columns}
                    dataSource={data}
                    
                    simple="simple" />
            </div>
        </Fragment>
    );
};

export default User;