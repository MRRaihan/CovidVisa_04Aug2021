import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
// formik
import {Formik} from 'formik';
// icons
import {Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

import { StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle, StyledFromArea, LeftIcon, RightIcon, StyledInputLabel, StyledTextInput, Colors, StyledText, StyledButton, ButtonText, MsgBox, Line, ExtraView, ExtraText, TextLink, TextLinkContent } from './../components/styles';

//Required Colors
const {brand, darkLight, primary, blue} = Colors;


import {View, TouchableOpacity} from 'react-native';

const Signup = () => {
          const [hidePassword, setHidePassword ] = useState(true);
          const [show, setShow] = useState(false);

          return (
                    <StyledContainer>
                              <StatusBar style="dark" />
                              <InnerContainer>
                                        <PageLogo resizeMode="cover" source={require('./../assets/images/logo.png')} />

                                        <Formik 
                                                  initialValues={{fullName:"", email: "", phone:"", password: "", confirmPassword:""}}
                                                  onSubmit={(values) => {
                                                            console.log(values);
                                                  }}
                                        >
                                                  {({handleChange, handleBlur, handleSubmit, values}) => (
                                                  <StyledFromArea>
                                                            <MyTextInput
                                                                      label="Full Name"
                                                                      icon="person"
                                                                      placeholder="Enter your name...."
                                                                      placeholderTextColor={darkLight}
                                                                      onChangeText={handleChange('fullName')}
                                                                      onBlur={handleBlur('fullName')}
                                                                      value={values.fullName}
                                                            />
                                                            <MyTextInput
                                                                      label="Email Address"
                                                                      icon="mail"
                                                                      placeholder="Enter your email...."
                                                                      placeholderTextColor={darkLight}
                                                                      onChangeText={handleChange('email')}
                                                                      onBlur={handleBlur('email')}
                                                                      value={values.email}
                                                                      keyboardType="email-address"
                                                            />
                                                            <MyTextInput
                                                                      label="Mobile"
                                                                      icon="calendar"
                                                                      placeholder="+8801700000000"
                                                                      placeholderTextColor={darkLight}
                                                                      onChangeText={handleChange('phone')}
                                                                      onBlur={handleBlur('phone')}
                                                                      value={values.phone}
                                                                      keyboardType="numeric"

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
                                                            <MyTextInput
                                                                      label="Confirm Password"
                                                                      icon="lock"
                                                                      placeholder="* * * * * * * *"
                                                                      placeholderTextColor={darkLight}
                                                                      onChangeText={handleChange('confirmPassword')}
                                                                      onBlur={handleBlur('confirmPassword')}
                                                                      value={values.confirmPassword}
                                                                      secureTextEntry={hidePassword}
                                                                      isPassword = {true}
                                                                      hidePassword = {hidePassword}
                                                                      setHidePassword={setHidePassword}
                                                            />

                                                            <MsgBox>....</MsgBox>
                                                            <StyledButton onPress={handleSubmit}>
                                                                      <ButtonText>Signup</ButtonText>
                                                            </StyledButton>
                                                            <Line />
                                                            
                                                            <ExtraView>
                                                                      <ExtraText>Already have an account! </ExtraText>
                                                                      <TextLink>
                                                                                <TextLinkContent>Login</TextLinkContent>
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

export default Signup;
