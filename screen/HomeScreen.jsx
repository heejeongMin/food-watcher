// HomeScreen.js
import React, { useState } from 'react';
import { Button, Image} from 'react-native';
import { useAuth } from '../components/AuthProvider';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useEffect } from 'react';

const credentials = [
  {
    id : "admin",
    password: "admin"
  }
];

const HomeScreen = () => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');
  const [usernameValidation, setUserNameValidation] = useState(true);
  const [passwordValidation, setPasswordValidation] = useState(true);
  const [hasLogginError, setHasLogginError] = useState(false);
  const [logginErrorMsg, setLogginErrorMsg] = useState('');
  const {isLoggedIn, login} = useAuth();


  useEffect(() => {
 }, [hasLogginError, logginErrorMsg])

  const handleLogin = () => {
    if(!username || !password) {
      setUserNameValidation(!(username == ''));
      setPasswordValidation(!(password == ''));
      return;
    }

    var credential = credentials.find(c => c["id"] == username)
    if(credential) {
      if(credential["password"] == password) {
        login();
      } else {
        setLogginErrorMsg("incorrect password");
        setHasLogginError(true);
      }
    } else {
      setLogginErrorMsg("user not found");
      setHasLogginError(true);
    }

  }

 return ( 
  <View style={styles.container}>
      <Image source={require('../assets/smiley.png')} style={styles.logo} />
      <TextInput
        style={[styles.input, !usernameValidation && styles.inputError]}
        placeholder="Username"
        onChangeText={(text) => {
          setUsername(text);
          setUserNameValidation(true);
        }}
        value={username}
      />
      <TextInput
        style={[styles.input, !passwordValidation && styles.inputError]}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => {
          setPassword(text);
          setPasswordValidation(true);
        }}
        value={password}
      />

      {hasLogginError && <Text style={styles.logginErrorMessage}>{logginErrorMsg}</Text>}

      {!isLoggedIn && 
         <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
         <Text style={styles.loginButtonText}>Login</Text>
       </TouchableOpacity> 
      }

      
  
  </View>
 )
};



export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  inputError: {
    borderColor: 'red',
  },
  loginButton: {
    padding: 10,
    borderRadius: 8,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign : 'center',
  },
  logginErrorMessage : {
    color: 'grey',
    fontStyle: 'italic'
  }
});



