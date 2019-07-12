import React, {Component} from 'react';
import AppNavigator from './src/screens/AppNavigator';
import AppRouter from './src/screens/AppRouter';


class App extends Component {
    render() {
        return (
            <AppRouter/>
        );
    }
}

export default App;
