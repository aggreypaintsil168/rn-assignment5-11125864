import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const HomeScreen = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkTheme ? '#000' : '#fff',
      padding: 20,
    },
    one: {
      borderRadius: 100,
      backgroundColor: isDarkTheme ? '#222121' : '#F6F3F3',
      height: 50,
      width: 50,
      borderWidth: 2,
      borderColor: 'deepgray', // Corrected color
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    profileImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    welcome: {
      flex: 1,
      marginLeft: 10,
    },
    welcomeText: {
      color: isDarkTheme ? '#bbb' : '#888',
      fontSize: 14,
    },
    username: {
      fontSize: 18,
      fontWeight: 'bold',
      color: isDarkTheme ? '#fff' : '#000',
    },
    icon: {
      width: 24,
      height: 24,
      tintColor: isDarkTheme ? '#fff' : '#000',
    },
    card: {
      marginBottom: 20,
      marginTop: 20,
    },
    cardIcon: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
      borderRadius: 20,
      marginBottom: 10,
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    action: {
      alignItems: 'center',
    },
    actionIcon: {
      width: 24,
      height: 24,
      marginBottom: 5,
      tintColor: isDarkTheme ? '#fff' : '#000',
    },
    transactions: {
      marginBottom: 20,
    },
    transactionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    transactionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: isDarkTheme ? '#fff' : '#000',
    },
    transactionLink: {
      color: isDarkTheme ? '#1e3a8a' : '#1e3a8a',
    },
    transaction: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    transactionIcon: {
      width: 24,
      height: 24,
    },
    transactionDetails: {
      flex: 1,
      marginLeft: 10,
    },
    transactionName: {
      fontSize: 16,
      color: isDarkTheme ? '#fff' : '#000',
    },
    transactionCategory: {
      color: isDarkTheme ? '#bbb' : '#888',
    },
    transactionAmount: {
      fontSize: 16,
      fontWeight: 'bold',
      color: isDarkTheme ? '#fff' : '#000',
      textAlign: 'right', // Aligns amount to the right
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/profile.png')} style={styles.profileImage} />
        <View style={styles.welcome}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.username}>Eric Atsu</Text>
        </View>
        <View style={styles.one}>
          <TouchableOpacity>
            <Image source={require('../assets/search.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.card}>
        <Image source={require('../assets/Card.png')} style={styles.cardIcon} />
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.action}>
          <View style={styles.one}><Image source={require('../assets/send.png')} style={styles.actionIcon} /></View>
          <Text style={{ color: isDarkTheme ? '#fff' : '#000' }}>Sent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action}>
          <View style={styles.one}><Image source={require('../assets/receive.png')} style={styles.actionIcon} /></View>
          <Text style={{ color: isDarkTheme ? '#fff' : '#000' }}>Receive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action}>
          <View style={styles.one}><Image source={require('../assets/loan.png')} style={styles.actionIcon} /></View>
          <Text style={{ color: isDarkTheme ? '#fff' : '#000' }}>Loan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action}>
          <View style={styles.one}><Image source={require('../assets/topUp.png')} style={styles.actionIcon} /></View>
          <Text style={{ color: isDarkTheme ? '#fff' : '#000' }}>Topup</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.transactions}>
        <View style={styles.transactionHeader}>
          <Text style={styles.transactionTitle}>Transaction</Text>
          <TouchableOpacity>
            <Text style={styles.transactionLink}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.transaction}>
          <View style={styles.one}><Image source={require('../assets/apple.png')} style={[styles.transactionIcon, { tintColor: isDarkTheme ? '#fff' : undefined }]} /></View>
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionName}>Apple Store</Text>
            <Text style={styles.transactionCategory}>Entertainment</Text>
          </View>
          <Text style={styles.transactionAmount}>- $5.99</Text>
        </View>
        <View style={styles.transaction}>
          <View style={styles.one}><Image source={require('../assets/spotify.png')} style={styles.transactionIcon} /></View>
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionName}>Spotify</Text>
            <Text style={styles.transactionCategory}>Music</Text>
          </View>
          <Text style={styles.transactionAmount}>- $12.99</Text>
        </View>
        <View style={styles.transaction}>
          <View style={styles.one}><Image source={require('../assets/moneyTransfer.png')} style={[styles.transactionIcon, { tintColor: isDarkTheme ? '#fff' : undefined }]} /></View>
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionName}>Money Transfer</Text>
            <Text style={styles.transactionCategory}>Transaction</Text>
          </View>
          <Text style={styles.transactionAmount}>$300</Text>
        </View>
        <View style={styles.transaction}>
          <View style={styles.one}><Image source={require('../assets/grocery.png')} style={styles.transactionIcon} /></View>
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionName}>Grocery</Text>
          </View>
          <Text style={[styles.transactionAmount, { marginLeft: 'auto' }]}>- $88</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
