import React from 'react';

import Menu from './Menu'
import Counter from './Counter'

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
                        <Menu/>
                    }
                    {
                        this.state.currentPage === 'Counter' &&
                        <Counter/>
                    }
                </div>
            </div>
        );
    }
}

export default MainPage;