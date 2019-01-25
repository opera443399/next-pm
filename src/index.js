import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Nav, Menu, Table, Pagination, Button, Dialog } from '@alifd/next';
import moment from 'moment';
import './index.css';

const { Row, Col } = Grid;
const { Item, SubNav } = Nav;
const header = <span className="fusion">nextPM Demo</span>;
const footer = <a className="login-in" href="javascript:;">Login in</a>;
const { Group, Divider, SubMenu } = Menu;

const onRowClick = function (record, index, e) {
    console.log("event=onRowClick, " + record, index, e);
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
            dataSource: dataSource(5),
            dialogVisible: false,
            itemId: -1
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

    onChangePage = (currentPage) => {
        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                dataSource: dataSource(currentPage * 5),
                loading: false
            });
        }, 200);
    };

    onChangeSelect = function (...args) {
        console.log(args);
    };

    onOpen = (id) => {
        this.setState({
            dialogVisible: true,
            itemId: id
        });
    };

    onClose = reason => {
        console.log("event=" + reason + ", id=" + this.state.itemId);
        this.onRemove(this.state.itemId);
        this.setState({
            dialogVisible: false
        });
    };

    onDelete = (value, index, record) => {
        return <Button warning onClick={this.onOpen.bind(this, record.id)}>Remove({record.id})</Button>;
    };

    render() {
        return (
            <div>
                <Nav className="nav-top" direction="hoz" type="primary" header={header} footer={footer} defaultSelectedKeys={['project']} triggerType="hover">
                    <Item key="home">Home</Item>
                    <Item key="project">Project</Item>
                    <Item key="about">About</Item>
                </Nav>
                <div className="container">
                    <Row>
                        <Col xs={4} s={4} m={4}>
                            <Menu defaultOpenKeys="sub-menu" className="menu-left">
                                <Group label="Group1">
                                    <Item key="group-1-1">Option 1-1</Item>
                                    <Item key="group-2-2">Option 1-2</Item>
                                </Group>
                                <Divider key="divider" />
                                <Group label="Group2">
                                    <Item key="group-2-1">Option 2-1</Item>
                                    <Item key="group-2-2">Option 2-2</Item>
                                    <Item key="link-1">
                                        <a href="#" target="__blank">Option Link 1</a>
                                    </Item>
                                </Group>
                                <Divider />
                                <SubMenu key="sub-menu" label="Sub menu">
                                    <Item key="sub-1">Sub option 1</Item>
                                    <Item key="sub-2">Sub option 2</Item>
                                </SubMenu>
                            </Menu>
                        </Col>
                        <Col xs={18} s={18} m={18}>
                            <div>
                                <p><Button type="primary" onClick={this.onAdd}>Add Item</Button></p>
                                <Table dataSource={this.state.dataSource}
                                    loading={this.state.loading}
                                    onRowClick={onRowClick}
                                    rowSelection={{ onChange: this.onChangeSelect }}>
                                    <Table.Column title="Id" dataIndex="id" />
                                    <Table.Column title="Title" dataIndex="title.name" />
                                    <Table.Column title="Time" dataIndex="time" />
                                    <Table.Column cell={this.onDelete} width="20%" />
                                </Table>
                                <Pagination onChange={this.onChangePage} className="pagination" />
                            </div>
                        </Col>
                        <Col xs={2} s={2} m={2}></Col>
                        <Dialog
                            title="Confirm"
                            visible={this.state.dialogVisible}
                            onOk={this.onClose.bind(this, 'onOk')}
                            onCancel={this.onClose.bind(this, 'onCancel')}
                            onClose={this.onClose}>
                            Are you sure to remove this item?
                        </Dialog>
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
