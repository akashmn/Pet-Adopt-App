import { View, Text, Pressable } from 'react-native'
import React, { useCallback } from 'react'
import { Image } from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import { Link } from 'expo-router'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'

export const useWarmUpBrowser = () => {
    React.useEffect(() => {
      // Warm up the android browser to improve UX
      // https://docs.expo.dev/guides/authentication/#improving-user-experience
      void WebBrowser.warmUpAsync()
      return () => {
        void WebBrowser.coolDownAsync()
      }
    }, [])
  }
  
WebBrowser.maybeCompleteAuthSession()
  

export default function index() {

    useWarmUpBrowser()

    const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

    const onPress = useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
            redirectUrl: Linking.createURL('/home', { scheme: 'myapp' }),
          })
    
          if (createdSessionId) {
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error('OAuth error', err)
        }
      }, [])

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

        <Pressable 
        onPress={onPress}
        style={{
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