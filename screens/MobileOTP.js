import React, {useState, useEffect, useRef} from 'react';
import {TextInput} from "react-native-gesture-handler";
import { Button} from 'react-native-paper';
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native';


function MobileOTP({ navigation }) {
          const lengthInput = 6;
          const defaultCountdown = 30;
          let clockCall= null;
          let textInput = useRef(null);
          const [internalVal, setInternalVal] = useState("");
          const [countdown, setCountdown] = useState(defaultCountdown);
          const [enableResend, setEnableResend] = useState(false);

          useEffect(() => {
                    clockCall = setInterval(() => {
                              decrementClock();
                    }, 1000)
                    return () =>{
                              clearInterval(clockCall);
                    }
          })
          const decrementClock = () =>{
                    if(countdown === 0){
                              setEnableResend(true)
                              setCountdown(0)
                              clearInterval(clockCall)
                    }else{
                              setCountdown( countdown -1)
                    }
          }

          const onChangeText = (val) =>{
                    setInternalVal(val);
                    // if(val.length === lengthInput){
                    //           navigation.navigate('Home');
                    // }
          }

          const onChangeNumber = (val) =>{
                    setInterval(val);
          }
          const onResendOTP = () =>{
                    if(enableResend){
                              setCountdown(defaultCountdown)
                              setEnableResend(false)
                              clearInterval(clockCall)
                              clockCall = setInterval(() => {
                                        decrementClock(0)
                              }, 1000)
                    }
          }

          useEffect(() =>{
                    textInput.focus();
          }, [])
          return (
          <View style={styles.container}>
                    <KeyboardAvoidingView 
                              keyboardVerticalOffset={50}
                              behavior={'padding'}
                              styles={styles.containerAvoidingView}
                    >

                              <Text style={styles.titleStyle}>{"Code is sent ot +8801700000000"}</Text>

                              <View>
                                        <TextInput
                                                  ref={(input) => textInput = input}
                                                  onChangeText={onChangeText}
                                                  style={{width: 0, height: 0}}
                                                  value={internalVal}
                                                  maxLength={lengthInput}
                                                  returnKeyType="done"
                                                  keyboardType="numeric"
                                        />
                                        <View style={styles.containerInput}>
                                        {
                                                  Array(lengthInput).fill().map((data, index) =>(
                                                            <View 
                                                            key={index}
                                                            style={[styles.cellView,
                                                                      {
                                                                                borderBottomColor: index === internalVal.length ? '#FB6CA6' : '#234DB7'
                                                                      }
                                                            ]} 
                                                            
                                                                      
                                                            >
                                                                      <Text 
                                                                                style={styles.cellText}
                                                                                onPress={() => textInput.focus()}
                                                                      >
                                                                                {internalVal && internalVal.length > 0 ? internalVal[index] : ""}
                                                                      </Text>
                                                            </View>
                                                  ))
                                        }
                                        </View>
                              </View>
                              <View style={styles.bottomView}>
                                        
                                        <TouchableOpacity onPress={onResendOTP}>
                                                  <View style={styles.btnResend} >
                                                            <Text 
                                                                      style={styles.textResend}
                                                            >
                                                                      Didn't receive any code?
                                                            </Text>
                                                  </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={onChangeNumber}>
                                                  <View style={styles.btnChangeNumber} >
                                                            <Text style={styles.textChange} >Send again</Text>
                                                  </View>
                                        </TouchableOpacity>
                                        
                              </View>
                              <View style={styles.container}>
                                        <TouchableOpacity>
                                                  <Button  style={styles.otpButton}> <View style={styles.otpButtonView}>Verify & Continue</View> </Button>
                                        </TouchableOpacity>
                              </View>
                              
                    </KeyboardAvoidingView>
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
          containerAvoidingView:{
                    flex: 1,
                    alignItems: 'center', 
                    padding: 10,
          },
          titleStyle: {
                    marginBottom: 50,
                    marginTop: 50,
                    fontSize: 16,
                    textAlign: 'center'
          },
          containerInput:{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'

          },
          cellView:{
                    paddingVertical: 11,
                    width: 40,
                    margin: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottomWidth: 1.5
          },
          cellText:{
                    textAlign: 'center',
                    fontSize: 16
          },
          bottomView:{
                    flexDirection: 'column',
                    flex: 1,
                    justifyContent: 'center',
                    marginTop: 30,
                    paddingTop: 20,
                    alignItems: 'center'
          },
          btnChangeNumber:{
                    width: 150,
                    height: 'auto',
                    alignItems: 'center',
                    justifyContent: 'center',
                    
          },
          textChange:{
                    color: '#234BB7',
                    alignItems: 'center',
                    fontSize: 17
                    
          },
          btnResend: {
                    width: 200,
                    height: 'auto',
                    alignItems: 'center',
                    justifyContent: 'center'
          },
          textResend: {
                    alignItems: 'center',
                    fontSize: 15
          },
          otpButton:{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'blue',
                    marginTop: -60,
                    width: 200
          },
          otpButtonView:{
                    color: "white",
          }
})

export default MobileOTP;