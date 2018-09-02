// https://medium.com/@Laurens_Lang/react-native-migrating-from-react-native-router-flux-to-react-navigation-7c47b1cc679c
// react navigation good link

// https://www.udemy.com/react-native-advanced/
// advanced concepts of react native
import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'
import EmployeeEdit from './components/EmployeeEdit'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar>
        <Scene key="auth">
          <Scene key='login' component={LoginForm} title="Please Login" initial/>
        </Scene>
        <Scene key='main'>
          <Scene
            key="EmployeeList"
            component={EmployeeList}
            title="Employees"
            rightTitle="Add"
            onRight={() => Actions.EmployeeCreate()}
            initial
          />
          <Scene
            key="EmployeeCreate"
            title="Create Employee"
            component={EmployeeCreate}
          />
        </Scene>
        <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
      </Scene>
    </Router>
  )
}

export default RouterComponent
