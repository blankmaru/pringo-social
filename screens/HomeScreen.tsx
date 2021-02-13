import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import Story from "../components/Story";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Story
          uri={"https://s.yimg.com/ny/api/res/1.2/10rjG93HJQYV25vu.og4_Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY1NC4wOA--/https://s.yimg.com/uu/api/res/1.2/qeTXXumQ..M3mKlYZ_yQxg--~B/aD0xMDIyO3c9MTAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/mmail.com.my/4b70c324bfc3b1edd2ce2bd1f8cc4ad4"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
