import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Icon } from '@alifd/next';
import './index.css';
class App extends React.Component {
    render() {
        return (
            <div>
                <Button.Group>
                    <Button type="primary">OK</Button>
                    <Button type="secondary">Cancel</Button>
                </Button.Group>

                <Button.Group>
                    <Button disabled>Left</Button>
                    <Button disabled>Middle</Button>
                    <Button disabled>Right</Button>
                </Button.Group>
                <br />
                <br />

                <Button.Group>
                    <Button type="primary"><Icon type="arrow-left" /> Backward</Button>
                    <Button type="primary">Forward <Icon type="arrow-right" /></Button>
                </Button.Group>

                <Button.Group>
                    <Button type="primary"><Icon type="prompt" /></Button>
                    <Button type="primary"><Icon type="clock" /></Button>
                    <Button type="primary"><Icon type="set" /></Button>
                </Button.Group>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
