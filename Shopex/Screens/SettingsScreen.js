import React, { useContext } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const SettingsScreen = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  
  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkTheme ? '#000' : '#fff',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: isDarkTheme ? '#fff' : '#000',
      marginBottom: 100,
      textAlign: 'center',
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: isDarkTheme ? '#333' : '#ccc',
    },
    itemText: {
      fontSize: 18,
      color: isDarkTheme ? '#fff' : '#000',
    },
    themeToggle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 15,
      marginTop: 20,
    },
  });

  return (
    <View style={dynamicStyles.container}>
      <Text style={dynamicStyles.title}>Settings</Text>
      <View style={dynamicStyles.item}>
        <Text style={dynamicStyles.itemText}>Language</Text>
      </View>
      <View style={dynamicStyles.item}>
        <Text style={dynamicStyles.itemText}>My Profile</Text>
      </View>
      <View style={dynamicStyles.item}>
        <Text style={dynamicStyles.itemText}>Contact Us</Text>
      </View>
      <View style={dynamicStyles.item}>
        <Text style={dynamicStyles.itemText}>Change Password</Text>
      </View>
      <View style={dynamicStyles.item}>
        <Text style={dynamicStyles.itemText}>Privacy Policy</Text>
      </View> 
      <View style={dynamicStyles.themeToggle}>
        <Text style={dynamicStyles.itemText}>Theme</Text>
        <Switch
          trackColor={{ false: '#767577', true: 'silver' }}
          thumbColor={isDarkTheme ? 'green' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTheme}
          value={isDarkTheme}
        />
      </View>
    </View>
  );
};

export default SettingsScreen;
