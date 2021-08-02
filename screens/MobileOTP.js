import React, {useState, useEffect, useRef} from 'react';
import {TextInput} from "react-native-gesture-handler";
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Button } from 'react-native';


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

          //Just Summitted Status
          const sumittedStatus=()=>{
                    alert("Successfully Submitted!")
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
                                                  <Button style={styles.otpButton} title="Verify & Continue"
                                                                                onPress={sumittedStatus}
                                                            />
                                        </TouchableOpacity>
                              </View>
                              
                    </KeyboardAvoidingView>
          </View>
          );
}

const styles = StyleSheet.create({
          container: {
                    flex: 1,
                    backgroundColor: "#f0eded"
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
                    marginBottom: 50,
                    paddingTop: 20,
                    alignItems: 'center'
          },
          btnChangeNumber:{
                    width: 150,
                    height: 'auto',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20
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
                    width: 200,
                    height: 20,
                    backgroundColor: "0a5ff2#"
          }
})

export default MobileOTP;