import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Nav, Button } from '@alifd/next';
import './index.css';

const { Row, Col } = Grid;

const { Item, SubNav } = Nav;

const header = <span className="fusion">nextPM Demo</span>;
const footer = <a className="login-in" href="javascript:;">Login in</a>;

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav className="nav-top" direction="hoz" type="primary" header={header} footer={footer} defaultSelectedKeys={['home']} triggerType="hover">
                    <Item key="home">Home</Item>
                    <Item key="about">About</Item>
                </Nav>
                <div className="nav-left">
                    <Row>
                        <Col xs={4} s={4} m={4}>
                            <Nav openMode="single">
                                <Item>Item1</Item>
                                <Item>Item2</Item>
                                <Item>Item3</Item>
                            </Nav>
                        </Col>
                        <Col xs={20} s={20} m={20}>
                            <div class="ctl-btn">
                                <Button.Group>
                                    <Button type="primary">New</Button>
                                    <Button type="secondary" disabled>Delete</Button>
                                </Button.Group>
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
