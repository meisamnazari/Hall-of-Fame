import React from 'react'
import {connect, Provider} from 'react-redux';
import AppNavigator from "./AppNavigator";
import {
    createReduxContainer,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import storage from "redux-persist/es/storage";
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from "../reducers";
import {applyMiddleware, createStore} from "redux";
import {PersistGate} from "redux-persist/integration/react";
import ReduxThunk from 'redux-thunk';



const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
    "root",
);

const App = createReduxContainer(AppNavigator, "root");


const mapStateToProps = (state) => ({
    state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk, middleware));
const persistor = persistStore(store);



class AppRouter extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AppWithNavigationState />
                </PersistGate>
            </Provider>
        );
    }
}

export default AppRouter;