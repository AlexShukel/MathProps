import React from 'react'
import { View, Text } from 'react-native'

interface Props {
    label: string
    children: React.ReactNode
}

const Label = ({children, label}: Props) => {
    return (
        <View>
            <Text>{`${label}: `}</Text>
            {children}
        </View>
    )
}

export default Label