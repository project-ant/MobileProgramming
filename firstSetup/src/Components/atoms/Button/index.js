import React, { useRef } from 'react'
import { Text, StyleSheet, Animated, TouchableOpacity } from 'react-native'

const Button = ({label, color, onPress, isDisabled}) => {
    const buttonSizeAnim = useRef(new Animated.Value(90)).current

    const ButtonClickHandler = () => {
        if(!isDisabled)
            Animated.sequence([
                Animated.timing(buttonSizeAnim, {
                    toValue: 80,
                    duration: 50,
                    useNativeDriver: false
                }),
                Animated.timing(buttonSizeAnim, {
                    toValue: 100,
                    duration: 80,
                    useNativeDriver: false
                }),
                Animated.timing(buttonSizeAnim, {
                    toValue: 90,
                    duration: 100,
                    useNativeDriver: false
                }),
            ]).start(
                ({finished}) =>
                    finished &&     
                    onPress &&      
                    onPress()       
            )           
    }
    
    return (
        <TouchableOpacity   style={styles.buttonContainer}
                            onPress={ButtonClickHandler}
                            activeOpacity={1}>
            <Animated.View   style={{
                        ...styles.buttonStyle,
                        width: buttonSizeAnim.interpolate({
                            inputRange: [0, 100],
                            outputRange: ['60%', '100%']    
                        }),
                        height: buttonSizeAnim.interpolate({
                            inputRange: [0, 100],
                            outputRange: ['0%', '100%']   
                        }),
                        backgroundColor: isDisabled ? 'hsla(0, 0%, 0%, 0.15)' : color
                    }}>
                <Text>{label}</Text>
            </Animated.View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
    }
})

export default Button