import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, Toast} from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{width: "100%", height: "100%", textAlign: "center", fontSize: 64, verticalAlign:"center"}}>
        CONTENT
      </Text>
     <View style={styles.toolbar}>
      <TouchableOpacity style={styles.item}>
       <Text style={{textAlign: "center",  padding: 15, fontWeight: "bold"}}>butt</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
       <Text style={{textAlign: "center",  padding: 15, fontWeight: "bold"}}>butt</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
       <Text style={{textAlign: "center",  padding: 15, fontWeight: "bold"}}>butt</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
       <Text style={{textAlign: "center", padding: 15, fontWeight: "bold"}}>butt</Text>
      </TouchableOpacity>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
 
  container: {
    backgroundColor: '#fff',
    width: "100%",
    height: "100%",
  },
  toolbar: {
    borderTopColor: "#000",
    borderTopWidth: 1,
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    width: "100%",
    verticalAlign: "bottom",
  },
  item: {
    borderLeftWidth: 1,
    borderRightColor: "black",
    width: "25%",
    textAlign: "center",
  },
});
