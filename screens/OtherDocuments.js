// import * as React from 'react';
// import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// const  OtherDocs= () => {
//     return (
//       <View>
//         <View style= {styles.buttonRow}>
//           <TouchableOpacity onPress={() => {}}>
//             <View style={styles.button}>
//               <Icon style={styles.icon}
//                   name= "file-document-outline"
//                   color='blue'
//                   size={30}
//               />
//               <Text style={styles.buttonText}>Statutory Documents</Text>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => {}}>
//             <View style={styles.button}>
//               <Icon style={styles.icon}
//                   name= "file-document-outline"
//                   color='blue'
//                   size={30}
//               />
//               <Text style={styles.buttonText}>Assembly Fact Sheets</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
// };

// export default OtherDocs;

// const styles = StyleSheet.create({
//   button: {
//     borderRadius: 8,
//     paddingVertical: 14,
//     paddingHorizontal: 10,
//     backgroundColor: '#ddd',
//     marginTop: 20,
//     marginLeft: 20,
//     alignContent: 'center',
//     width: 180,
//     flexDirection: 'row',
//   },
//   buttonText: {
//     color: 'black',
//     fontWeight: 'bold',
//     textTransform: 'uppercase',
//     fontSize: 16,
//     textAlign: 'center',
//     marginTop: -3,
//     marginLeft: 10,
//   },
//   buttonRow: {
//     flexDirection: 'row',
//     alignContent: 'center'
//   },
// });

import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  // <View style={styles.item}>
  //   <Text style={styles.title}>{title}</Text>
  // </View>
  <View>
  <View style= {styles.buttonRow}>
    
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.button}>
        <Icon style={styles.icon}
            name= "file-document-outline"
            color='#00c0ef'
            size={30}
        />
        <Text style={styles.buttonText}>Statutory Documents</Text>
      </View>
    </TouchableOpacity>
    
    
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.button}>
        <Icon style={styles.icon}
            name= "file-document-outline"
            color='#f012be'
            size={30}
        />
        <Text style={styles.buttonText}>Assembly Fact Sheets</Text>
      </View>
    </TouchableOpacity>
    
  </View>
</View>

);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#ddd',
    marginTop: 20,
    marginLeft: 20,
    alignContent: 'center',
    width: 180,
    flexDirection: 'row',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
    marginTop: -3,
    marginLeft: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    alignContent: 'center'
  },
});

export default App;