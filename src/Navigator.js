import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import TaskList from './screens/TaskList';
import Auth from './screens/Auth';

import AuthOrApp from './screens/AuthOrApp';
import Menu from './screens/Menu';
import commonStyles from './commonStyles';

const menuConfig = {
    initialRouteName: 'Today',
    contentComponent: Menu,
    contentOptions: {
        labelStyle: {
            fontFamily: commonStyles.fontFamily,
            fontWeight: 'normal',
            fontSize: 20
        },
        activeLabelStyle:{
            color: '#080',
            fontWeight: 'bold'
        }
    }
}

const menuRoutes = {
    Today: {
        name: 'Today',
        screen: props => <TaskList title='Hoje' daysAhead={1} {...props}/>,
        navigationOptions: {
            title: 'Hoje'
        } 
    },

    Tomorrow: {
        name: 'Tomorrow',
        screen: props => <TaskList title='Amanhã' daysAhead={2} {...props}/>,
        navigationOptions: {
            title: 'Amanhã'
        } 
    },

    Week: {
        name: 'Week',
        screen: props => <TaskList title='Semana' daysAhead={8} {...props}/>,
        navigationOptions: {
            title: 'Semana'
        } 
    },

    Month: {
        name: 'Month',
        screen: props => <TaskList title='Mês' daysAhead={31} {...props}/>,
        navigationOptions: {
            title: 'Mês'
        } 
    },
}

const menuNavigator = createDrawerNavigator(menuRoutes, menuConfig);

const mainRoutes = {
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    Home: {
        name: "Home",
        screen: menuNavigator
    },
    AuthOrApp: {
        name: 'AuthOrApp',
        screen: AuthOrApp
    }
}

const mainNavigator = createSwitchNavigator(mainRoutes, {
    initialRouteName: 'AuthOrApp'
})
export default createAppContainer(mainNavigator)