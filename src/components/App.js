import React from 'react';
import Header from "./Header";
import ContestPreview from './ContestsPreview';

class App extends React.Component {
    state = {
        pageHeader: 'Naming Contents'
    };

    render(){
        return (
            <div className="app">
                <Header message={this.state.pageHeader}/>
                <div>
                    {this.props.contests.map(contest => <ContestPreview {...contest}/>)}
                </div>
            </div>
        );
    }
};

App.defaultProps = {
    headerMessage: 'Hello default'
};

export default App;