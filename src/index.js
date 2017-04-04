// Demo component
// this is only example component
// you can find tests in __test__ folder

import React from 'react';
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
                <button onClick={() => this.generateRandomNumber()} type="button">Generate Random Number</button>
            </div>
        )
    }

    generateRandomNumber() {

        const randomNumber = Math.floor((Math.random() * 1000000) + 1);
        this.setState({randomNumber});
    }
};

export default RandomNumberDisplay;