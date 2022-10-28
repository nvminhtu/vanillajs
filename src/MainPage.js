import React from 'react';

import Menu from './Menu'
import Counter from './Counter'
import ColorFlipper from './ColorFlipper'
import ColorFlipperHex from './ColorFlipperHex'
import Reviews from './Reviews'

class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentPage: this.props.currentPage // assign props page to a Component
        };
    }
    switchPage(currentPage){
        this.setState({currentPage});
    };
    render() {
        return (
            <div>
                <div>
                    {
                        this.state.currentPage === 'Menu' &&
                        <Menu />
                    }
                    {
                        this.state.currentPage === 'Counter' &&
                        <Counter />
                    }
                    {
                        this.state.currentPage === 'ColorFlipper' &&
                        <ColorFlipper />
                    }
                    {
                        this.state.currentPage === 'ColorFlipperHex' &&
                        <ColorFlipperHex />
                    }
                     {
                        this.state.currentPage === 'Reviews' &&
                        <Reviews />
                    }
                </div>
            </div>
        );
    }
}

export default MainPage;