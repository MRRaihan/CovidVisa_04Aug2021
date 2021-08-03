import * as React from 'react';
import { Avatar, Button, Card, } from 'react-native-paper';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import NID from "../assets/images/face.png";

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const FaceScan = () => (
    <View style={styles.container}>
            <View style={styles.nidComment}>Place your face to take a clear photo</View>
            <Card>
            <Card.Cover style={styles.personNID} source={NID} />
            <Card.Actions style={styles.nidActions}>
            <TouchableOpacity>
                    <Button icon="swap-horizontal"></Button>
            </TouchableOpacity>
            <TouchableOpacity >
                    <Button style={{ color: 'primary' }} icon="camera" ></Button>
            </TouchableOpacity>
            <TouchableOpacity>
                    <Button icon="camera-retake-outline" ></Button>
            </TouchableOpacity>
            </Card.Actions>
        </Card>
        <View>
            <TouchableOpacity>
                <Button  style={styles.nextActions}> <View style={styles.nextActionsView}>Next</View> </Button>
            </TouchableOpacity>
        </View>
    </View>
  

);

const styles = StyleSheet.create({
          container: {
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%'
          },
          nidComment:{
              color: 'gray',
              fontSize: 20,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20,
          },
          personNID:{
                    maxHeight:  130,
                    maxWidth: 250,

          },
          nidActions:{
            flexDirection:'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        nextActions: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
            color: "white",
            backgroundColor: 'blue'
        },
        nextActionsView:{
            color: "white",
        }
})

export default FaceScan;