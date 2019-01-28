import React from 'react';
import './index.scss';
import moment from 'moment';
import { Grid, Table, Pagination, Button, Dialog } from '@alifd/next';

const { Row, Col } = Grid;

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

class ProjectList extends React.Component {
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
            <div className="container">
                <div>
                    <p>Project List</p>
                </div>
                
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
                <Dialog
                    title="Confirm"
                    visible={this.state.dialogVisible}
                    onOk={this.onClose.bind(this, 'onOk')}
                    onCancel={this.onClose.bind(this, 'onCancel')}
                    onClose={this.onClose}
                >
                    Are you sure to remove this item?
            </Dialog>
            </div>
        );
    }
}

export default ProjectList;