import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'

import { checkImageURL } from '../../../utils'

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageURL(companyLogo) ? companyLogo : "https://images.squarespace-cdn.com/content/v1/58cc13fd37c5817a683e8bd7/47a511b4-3733-4d76-94a6-701df80b4ad8/Get+Involved+jobs.png"
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </View>
      
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
          <Text style={styles.companyName} numberOfLines={1}>{companyName} / </Text>
          
          <View style={styles.locationBox}>
            <Image 
              source={icons.location}
              resizeMode='contain'
              style={styles.locationImage}
            />
            <Text style={styles.locationName}>{location}</Text>
          </View>
      </View>
    </View>
  )
}

export default Company