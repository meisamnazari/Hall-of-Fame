import MainNavigator from '../screens/AppNavigator';
import {
    createNavigationReducer,
} from 'react-navigation-redux-helpers';

const NavReducer = createNavigationReducer(MainNavigator);

export default NavReducer;
