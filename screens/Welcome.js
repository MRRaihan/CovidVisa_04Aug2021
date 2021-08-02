import React, {useState} from 'react';
import logo from '../assets/images/logo.png';

import { InnerContainer, PageLogo, WelcomeImage} from './../components/styles';

import {View, StyleSheet, Image} from 'react-native';

const Welcome = () => {
          const [hidePassword, setHidePassword ] = useState(true);

          return (
                    <View style={styles.container}>
                              <Image style={styles.logo}
                                        source={logo}
                              />

                    </View>
          );
}

const styles = StyleSheet.create({
          container: {
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%'
          },
          logo: {
                    width: 400,
                    height: 300,
          },
})
export default Welcome;
