import * as React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Transform,
  Button,
  ImageBackground,
  Content,
  Dimensions,
} from 'react-native';
import Constants from 'expo-constants';
import { Icon } from 'react-native-elements';
import tree from 'react-native-vector-icons/Entypo';
import MapView, { Marker, Callout } from 'react-native-maps';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppButton from './components/Button';
import MapFileScreen from './screens/mapScreen';
import FavFileScreen from './screens/FavScreen';

const Helping = createStackNavigator();

function HelpScreen({ navigation }) {
  return (
    <View style={styles.container0}>
      <View style={styles.button1}>
        <AppButton
          onPress={() => navigation.push('HowToUseApp')}
          title="App Help"
          size="sm"
          backgroundColor="#D9725D"
        />
        <View style={styles.space} />
        <AppButton
          onPress={() => navigation.push('Privacy')}
          title="Privacy"
          size="sm"
          backgroundColor="#D9725D"
        />
        <View style={styles.space} />
        <AppButton
          onPress={() => navigation.push('Sources')}
          title="Sources/Credits"
          size="sm"
          backgroundColor="#D9725D"
        />
      </View>
    </View>
  );
}

function HowToUseApp() {
  return (
    <View style={styles.container0}>
      <View style={styles.button1}>
        <Text> This is lanuage settings </Text>
      </View>
    </View>
  );
}
function Privacy() {
  return (
    <View style={styles.container0}>
      <View style={styles.button1}>
        <Text> This is general settings </Text>
      </View>
    </View>
  );
}
function Sources() {
  return (
    <View style={styles.container0}>
      <View style={styles.button1}>
        <Text> Bruh </Text>
      </View>
    </View>
  );
}

function MainHelpScreen() {
  return (
    <Helping.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#052E6C',
          height: 80,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          size: 20,
        },
      }}>
      <Helping.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{ title: 'Extras and Help' }}
      />
      <Helping.Screen
        name="HowToUseApp"
        component={HowToUseApp}
        options={{ title: 'How to use app' }}
      />
      <Helping.Screen
        name="Privacy"
        component={Privacy}
        options={{ title: 'General' }}
      />
      <Helping.Screen
        name="Sources"
        component={Sources}
        options={{ title: 'Accessibility' }}
      />
    </Helping.Navigator>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container0}>
      <View style={styles.button1}>
        <AppButton
          onPress={() => navigation.push('Language')}
          title="Language"
          size="sm"
          backgroundColor="#D9725D"
        />
        <View style={styles.space} />
        <AppButton
          onPress={() => navigation.push('General')}
          title="General"
          size="sm"
          backgroundColor="#D9725D"
        />
        <View style={styles.space} />
        <AppButton
          onPress={() => navigation.push('AccessibilitySettings')}
          title="Accessibility"
          size="sm"
          backgroundColor="#D9725D"
        />
      </View>
    </View>
  );
}

function LanguageSettings() {
  return (
    <View style={styles.container0}>
      <View style={styles.button1}>
        <Text> This is lanuage settings </Text>
      </View>
    </View>
  );
}
function GeneralSettings() {
  return (
    <View style={styles.container0}>
      <View style={styles.button1}>
        <Text> This is general settings </Text>
      </View>
    </View>
  );
}
function AccessibilitySettings() {
  return (
    <View style={styles.container0}>
      <View style={styles.button1}>
        <Text> Bruh </Text>
      </View>
    </View>
  );
}

const Settings = createStackNavigator();

function MainSettingsScreen() {
  return (
    <Settings.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#052E6C',
          height: 80,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          size: 20,
        },
      }}>
      <Settings.Screen
        name="HomeSettings"
        component={SettingsScreen}
        options={{ title: 'Settings' }}
      />
      <Settings.Screen
        name="Language"
        component={LanguageSettings}
        options={{ title: 'Language' }}
      />
      <Settings.Screen
        name="General"
        component={GeneralSettings}
        options={{ title: 'General' }}
      />
      <Settings.Screen
        name="AccessibilitySettings"
        component={AccessibilitySettings}
        options={{ title: 'Accessibility' }}
      />
    </Settings.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container0}>
      <View style={styles.button1}>
        <AppButton
          onPress={() => navigation.push('Map')}
          title="Maps"
          size="sm"
          backgroundColor="#D9725D"
        />
        <View style={styles.space} />
        <AppButton
          onPress={() => navigation.push('Fav')}
          title="Favourites"
          size="sm"
          backgroundColor="#D9725D"
        />
        <View style={styles.space} />
        <View style={styles.container1}>
          <AppButton
            onPress={() => navigation.push('Extras')}
            title="Extras/Help"
            size="s"
            backgroundColor="#D9725D"
          />
          <View style={styles.space} />
          <AppButton
            onPress={() => navigation.push('Settings')}
            title="Settings"
            size="s"
            backgroundColor="#D9725D"
          />
        </View>
      </View>
    </View>
  );
}

function MapScreen() {
  return (
    <MapFileScreen></MapFileScreen>
  );
}
function FavScreen() {
  return (
    <FavFileScreen></FavFileScreen>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#052E6C',
            height: 80,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            size: 20,
          },
        }}>
        <Stack.Screen
          name="Main Menu"
          component={HomeScreen}
          options={{ title: 'Main Menu' }}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{ title: 'Map' }}
        />
        <Stack.Screen
          name="Fav"
          component={FavScreen}
          options={{ title: 'Favourites' }}
        />
        <Stack.Screen
          name="Extras"
          component={MainHelpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={MainSettingsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({

  container0: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#485696',
  },
  container1: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  button1: {},
  space: {
    width: 10,
    height: 20,
  },
  rounded: {
    borderRadius: 5,
  },
});
