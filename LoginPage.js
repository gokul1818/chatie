import { ImageBackground, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import firestore from "@react-native-firebase/firestore"
import uuid from "react-native-uuid"

const LoginPage = () => {

    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [phoneNumber, setPhoneNumber] = useState()


    const register = () => {
        const UserID = uuid.v4()
        firestore().collection("users").doc(UserID).set({
            name: name,
            password: password,
            phoneNumber: phoneNumber,
            userID: UserID
        }).then(resp => console.log(resp)).catch(errr => {
            console.log(errr)
        })
    }
    return (
        <View style={styles.body} >
            <Text style={styles.header}>Pik<Text style={[styles.header, { color: "#20d5d8" }]}>up</Text></Text>
            <TextInput
                placeholder='Name'
                placeholderTextColor={"grey"}
                style={styles.inputfiled}
                onChange={(value) > setName(value)}
            >
            </TextInput>
            <TextInput
                placeholder='Phone Number'
                placeholderTextColor={"grey"}
                style={styles.inputfiled}
                onChange={(value) > setPhoneNumber(value)}
            >
            </TextInput>
            <TextInput
                placeholder='Password'
                placeholderTextColor={"grey"}
                style={styles.inputfiled}
                onChange={(value) > setPassword(value)}
            >
            </TextInput>

            <View style={styles.button} >

                <TouchableOpacity style={styles.loginbtn} onPress={register} >
                    <Text style={styles.btnlabel}>sign up</Text>
                </TouchableOpacity>
            </View>
            <Text style={[styles.textlabel, { marginTop: 0 }]}>
                Forget Password?
            </Text>
            <View style={{ borderBottomWidth: 1, marginTop: 20, marginBottom: 10, borderStyle: "solid", borderColor: '#cacbcf', width: '100%', justifyContent: 'center', alignItems: 'center' }} >
                <Text style={styles.signuplabel}>
                    Sign up With
                </Text>
            </View>
            <View style={{ width: '80%', justifyContent: 'space-around', flexDirection: 'row', alignItems: 'flex-start' }}>
                <TouchableOpacity style={styles.signbtn}>
                    <Text style={{ color: "#20d5d8" }}>GOOGLE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signbtn}>
                    <Text style={{ color: "#20d5d8" }}>EMAIL</Text>
                </TouchableOpacity>
            </View>
            {/* </ImageBackground> */}
        </View >
    )
}

export default LoginPage

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'space-around',
        backgroundColor: "#f9f9f5",
        width: "100%",
        height: '100%'
    },
    background: {
        width: "100%",
        height: '100%',

    },
    header: {
        color: "#000",
        marginVertical: 60,
        fontSize: 50,
        fontWeight: "bold",
        // backgroundColor:'green'
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    inputfiled: {
        width: '85%',
        borderColor: "#eeeeee",
        borderWidth: 1,
        height: 50,
        marginBottom: 20,
        backgroundColor: '#ffffff',
        paddingLeft: 20,
        borderRadius: 50,
        color: '#000'
    },
    button: {
        backgroundColor: '#20d5d8',
        width: '85%',
        borderColor: "#eeeeee",
        borderWidth: 1,
        height: 50,
        color: "#fff",
        alignContent: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        paddingLeft: 20,
        borderRadius: 50
    },
    loginbtn: {
        alignItems: 'center'
        ,
        justifyContent: 'center',
    },
    btnlabel: {
        fontSize: 15,
        // fontWeight: 'bold',
        letterSpacing: 3,
        color: '#fff'

    },
    textlabel: {
        marginVertical: 20,
        fontSize: 15,
        color: '#000'
    },
    signbtn: {
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        marginTop: 20,
        borderRadius: 50,
        borderColor: "#20d5d8",
        backgroundColor: '#ffffff',
    }, signuplabel: {
        color: '#cacbcf',
        backgroundColor: '#fff',
        padding: 10,
        position: 'absolute',
        backgroundColor: "#f9f9f5",


    }
})