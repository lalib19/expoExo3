import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />

      <View style={styles.bigContainer1}>
      <View style={styles.container1}>

      </View>
      <View style={styles.container2}>

      </View>
      <View style={styles.container3}>

      </View>
      </View>

      <View style={styles.bigContainer2}>
      <View style={styles.container4}>

      </View>
      <View style={styles.container5}>

      </View>
      <View style={styles.container6}>

      </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    
  },
  container1: {
    flex: 3,
    backgroundColor: "green",
  },
  container2: {
    flex: 2,
    backgroundColor: "red",
  },
  container3: {
    flex: 1,
    backgroundColor: "blue",
  },
  container4: {
    flex: 3,
    backgroundColor: "purple",
  },
  container5: {
    flex: 2,
    backgroundColor: "yellow",
  },
  container6: {
    flex: 0.5,
    backgroundColor: "pink",
  },
  bigContainer1: {
    flex: 1,
    flexDirection:'row',
  },
  bigContainer2: {
    flex: 1,
    flexDirection: 'column',
  }

});
