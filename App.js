import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Ido from './Ido';
import Elerh from './Elerh';
import Forum from './Forum';
import Bevitel from './Bevitel';


function elerh_lap({ navigation }) {
  return (
    <Elerh/>
  );
}

function ido_lap({ navigation }) {
  return (
<Ido/>
   
  
  );
}

function forum_lap({ navigation }) {
  return (
<Forum/>
   
  
  );
}

function komment_lap({ navigation }) {
  return (
    <Bevitel/>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Elérhetőségek" component={elerh_lap} />
        <Drawer.Screen name="Időpontfoglalás" component={ido_lap} />
        <Drawer.Screen name="Fórum" component={forum_lap} />
        <Drawer.Screen name="Komment" component={komment_lap} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
