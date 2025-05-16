import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Content = ({children}) => {
  return (
   <SafeAreaView className="flex-1 mx-5">{children}</SafeAreaView>
  )
}

export default Content