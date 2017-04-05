import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import './bootstrap.min.css';
import './index.css';
import DisplayScreen from './components/display/DisplayScreen';

class RandomNumberDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            randomNumber: 0
        };
    }

    componentDidMount() {
        // some logic here - we only test if the method is called
    }

    render() {
        return (
            <div className="container">
                <DisplayScreen text={this.state.randomNumber + ''}/>
                <Button onClick={() => this.generateRandomNumber()} bsStyle="primary">Generate Random Number</Button>
            </div>
        )
    }

    generateRandomNumber() {

        const randomNumber = Math.floor((Math.random() * 1000000) + 1);
        this.setState({randomNumber});
    }
};

export default RandomNumberDisplay;