// ProfileScreen.js
import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { useAuth } from '../components/AuthProvider';

const ProfileScreen = () => {
  const { logout } = useAuth();

  return (
    <View>
      <Text>Profile Screen</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default ProfileScreen;
