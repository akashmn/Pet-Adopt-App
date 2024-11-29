import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

export default function index() {
  return (
    <View style={{
        backgroundColor: "#fff",
        height: "100%",
    }}>
      <Image source={require('../../assets/images/login.png')}
        style={{ width: "100%", height: 500 }}
      />

      <View style={{
        padding: 20,
        display: "flex",
        alignItems: "center",
      }}>
        <Text style={{
            fontSize: 32,
            fontFamily: "outfit-bold",
            textAlign: "center",
        }}>
            Ready to make new friends?
        </Text>

        <Text style={{
            fontSize: 16,
            fontFamily: "outfit-regular",
            textAlign: "center",
            marginTop: 1,
            color:"gray",
        }}>
            Lets adopt a  pet which you like and make there life happy again.
        </Text>

        <Pressable style={{
            padding: 14,
            backgroundColor: "#E8B20E",
            width: "100%",
            marginTop: 50,
            borderRadius: 14,
        }}>
            <Text style={{
                fontFamily: "outfit-medium",
                fontSize: 16,
                textAlign: "center",
            }}>
                Get Started
            </Text>
        </Pressable>
      </View>

    </View>
  )
}