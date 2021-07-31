import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
// formik
import {Formik} from 'formik';
// icons
import {Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

import { StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle, StyledFromArea, LeftIcon, RightIcon, StyledInputLabel, StyledTextInput, Colors, StyledText, StyledButton, ButtonText, MsgBox, Line, ExtraView, ExtraText, TextLink, TextLinkContent } from './../components/styles';

//Colors
const {brand, darkLight, primary} = Colors;

import {View} from 'react-native';

const Login = () => {
          const [hidePassword, setHidePassword ] = useState(true);

          return (
                    <StyledContainer>
                              <StatusBar style="dark" />
                              <InnerContainer>
                                        <PageLogo resizeMode="cover" source={require('./../assets/images/logo.png')} />

                                        <Formik 
                                                  initialValues={{email: '', password: ''}}
                                                  onSubmit={(values) => {
                                                            console.log(values);
                                                  }}
                                        >
                                                  {({handleChange, handleBlur, handleSubmit, values}) => (
                                                  <StyledFromArea>
                                                            <MyTextInput
                                                                      label="Email Address"
                                                                      icon="mail"
                                                                      placeholder="imdadul15-1440@diu.edu.bd"
                                                                      placeholderTextColor={darkLight}
                                                                      onChangeText={handleChange('email')}
                                                                      onBlur={handleBlur('email')}
                                                                      value={values.email}
                                                                      keyboardType="email-address"
                                                            />
                                                            <MyTextInput
                                                                      label="Password"
                                                                      icon="lock"
                                                                      placeholder="* * * * * * * *"
                                                                      placeholderTextColor={darkLight}
                                                                      onChangeText={handleChange('password')}
                                                                      onBlur={handleBlur('password')}
                                                                      value={values.password}
                                                                      secureTextEntry={hidePassword}
                                                                      isPassword = {true}
                                                                      hidePassword = {hidePassword}
                                                                      setHidePassword={setHidePassword}
                                                            />

                                                            <MsgBox>....</MsgBox>
                                                            <StyledButton onPress={handleSubmit}>
                                                                      <ButtonText>Login</ButtonText>
                                                            </StyledButton>
                                                            <Line />
                                                            <ExtraView>
                                                                      <ExtraText>Don't Have an account already! </ExtraText>
                                                                      <TextLink>
                                                                                <TextLinkContent>Signup</TextLinkContent>
                                                                      </TextLink>
                                                            </ExtraView>
                                                  </StyledFromArea>
                                                  )}
                                        </Formik>

                              </InnerContainer>
                    </StyledContainer>
          );
}

const MyTextInput =({label, icon, isPassword, hidePassword, setHidePassword, ...props}) =>{
          return(
                    <View>
                              <LeftIcon>
                                        <Octicons name={icon} size={30} color={brand} />
                              </LeftIcon>
                              <StyledInputLabel> {label}</StyledInputLabel>
                              <StyledTextInput {...props} />
                              {isPassword && (
                                        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                                                  <Ionicons size={30} name={hidePassword ? "md-eye-off" : "md-eye"} color={darkLight}/>
                                        </RightIcon>
                              )}
                    </View>
          );
};

export default Login;
