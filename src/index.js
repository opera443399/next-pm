import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Nav, Menu, Table, Pagination, Button } from '@alifd/next';
import moment from 'moment';
import './index.css';

const { Row, Col } = Grid;
const { Item, SubNav } = Nav;
const header = <span className="fusion">nextPM Demo</span>;
const footer = <a className="login-in" href="javascript:;">Login in</a>;
const { SubMenu, ItemMenu } = Menu;

const onRowClick = function (record, index, e) {
    console.log(record, index, e);
},
    dataSource = (j) => {
        const result = [];
        for (let i = 0; i < 5; i++) {
            result.push({
                title: { name: `project ${10000 + i + j * 100}` },
                id: 10000 + i + j * 100,
                time: moment().format()
            });
        }
        return result;
    };

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: dataSource(5)
        };
    }

    onAdd = () => {
        const { dataSource } = this.state;
        dataSource.push({
            title: {
                name: 'new project',
            },
            id: moment().unix(),
            time: moment().format()
        });
        this.setState({
            dataSource
        });
    }

    onRemove = (id) => {
        const { dataSource } = this.state;
        let index = -1;
        dataSource.forEach((item, i) => {
            if (item.id === id) {
                index = i;
            }
        });
        if (index !== -1) {
            dataSource.splice(index, 1);
            this.setState({
                dataSource
            });
        }
    }

    onChange = (currentPage) => {
        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                dataSource: dataSource(currentPage * 5),
                loading: false
            });
        }, 200);
    }

    render() {
        const renderOper = (value, index, record) => {
            return <a onClick={this.onRemove.bind(this, record.id)}>Remove({record.id})</a>;
        };

        return (
            <div>
                <Nav className="nav-top" direction="hoz" type="primary" header={header} footer={footer} defaultSelectedKeys={['project']} triggerType="hover">
                    <Item key="home">Home</Item>
                    <Item key="project">Project</Item>
                    <Item key="about">About</Item>
                </Nav>
                <div className="content">
                    <Row>
                        <Col xs={4} s={4} m={4}>
                            <Menu defaultOpenKeys="1" className="my-menu-demo" openMode="single">
                                <SubMenu key="0" label="Sub menu 1">
                                    <Item key="0-0">Sub option 1</Item>
                                    <Item key="0-1">Sub option 2</Item>
                                    <Item key="0-2">Sub option 3</Item>
                                </SubMenu>
                                <SubMenu key="1" label="Sub menu 2">
                                    <Item key="1-0">Sub option 1</Item>
                                    <Item key="1-1">Sub option 2</Item>
                                    <Item key="1-2">Sub option 3</Item>
                                </SubMenu>
                                <SubMenu key="2" label="Sub menu 3">
                                    <Item key="2-0">Sub option 1</Item>
                                    <Item key="2-1">Sub option 2</Item>
                                    <Item key="2-2">Sub option 3</Item>
                                </SubMenu>
                                <SubMenu key="3" label="Sub menu 4">
                                    <Item key="3-0">Sub option 1</Item>
                                    <Item key="3-1">Sub option 2</Item>
                                    <Item key="3-2">Sub option 3</Item>
                                </SubMenu>
                            </Menu>
                        </Col>
                        <Col xs={20} s={20} m={20}>
                            <div>
                                <p><Button type="primary" onClick={this.onAdd}>Add Item</Button></p>
                                <Table dataSource={this.state.dataSource}
                                    loading={this.state.loading}
                                    onRowClick={onRowClick}>
                                    <Table.Column title="Id" dataIndex="id" />
                                    <Table.Column title="Title" dataIndex="title.name" />
                                    <Table.Column title="Time" dataIndex="time" />
                                    <Table.Column cell={renderOper} width="20%" />
                                </Table>
                                <Pagination onChange={this.onChange} className="my-page-demo" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
