import React, {PropTypes} from 'react';
import './display.css';

const DisplayScreen = ({text}) => {

    return (
        <div className="screen">
            {text}
        </div>
    );
};

DisplayScreen.propTypes = {
    text: PropTypes.string.isRequired
};

export default DisplayScreen;