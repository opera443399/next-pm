import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Nav, Balloon, Menu } from '@alifd/next';

import './index.scss';

const { Item } = Nav;

class Header extends Component {
    static propTypes = {
        fullHeader: PropTypes.bool,
        defaultSelectedKeys: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array,
        ]),
    };

    static defaultProps = {
        fullHeader: true,
    };

    constructor(props) {
        super(props);
    }

    header() {
        return (
            <div className="header-logo">
                <span className="header-logo-text">nextPM Demo</span>
            </div>
        );
    }
    footer() {
        const trigger = (
            <a href="/my" className="userinfo" style={{ textDecoration: 'none' }}>
                <span className="name">admin</span>
            </a>
        );

        return (
            <div>
                <Balloon trigger={trigger} closable={false} offset={[0, 10]} style={{ padding: 4 }}>
                    <Menu style={{ border: 'none' }}>
                        <Menu.Item><a href="/personal/register" >Profile</a></Menu.Item>
                        <Menu.Item><a href="/logout" >Logout</a></Menu.Item>
                    </Menu>
                </Balloon>
            </div>
        );
    }
    render() {
        const { fullHeader, defaultSelectedKeys } = this.props;

        const content = (
            <Nav
                direction="hoz"
                hozAlign="right"
                type="primary"
                activeDirection={null}
                defaultSelectedKeys={defaultSelectedKeys}
                header={this.header()}
                footer={this.footer()}
                className="header-nav"
            >
                <Item key="home" className="nav-item">Home</Item>
                <Item key="guides" className="nav-item">Guides</Item>
                <Item key="help" className="nav-item">Help</Item>
            </Nav>
        );

        return (
            <div className="header" id="header">
                {fullHeader ? content : <div className="header-limit">{content}</div>}
            </div>
        );
    }
}

export default Header;