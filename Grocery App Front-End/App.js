import React, {useState} from "react";
import {SafeAreaView, StyleSheet, View,Text,Button,Picker,Image} from 'react-native';
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';

export default function App() {
const[picker1SelectedValue, setPicker1SelectedValue] = useState("Vegetables");
const[picker2SelectedValue, setPicker2SelectedValue] = useState("Fruits");
const[picker3SelectedValue, setPicker3SelectedValue] = useState("Quantity");
const[picker4SelectedValue, setPicker4SelectedValue] = useState("Quantity");
const [calculatedValue, setCalculatedValue] = useState("0");
  return (
  <SafeAreaView style={styles.container}>
  <View style={styles.container}> 
  <Text style={styles.heading}> Welcome to VFUS </Text>
  <Card>
        <AssetExample />
      </Card>
    </View>
    <View style={styles.row1}> 
    <Text style={styles.paragraph}> Product Listings: </Text>
    </View>
  <View style={styles.row1}>
        <Picker style={styles.picker}
        selectedValue={picker1SelectedValue}
        onValueChange = {(itemValue, itemIndex) => setPicker1SelectedValue(itemValue)}
        >
            <Picker.Item label = "Vegetables" value ="Vegetables" />
            <Picker.Item label="Carrot-$4" value="val-Carrot-$4" />
            <Picker.Item label="Potato-$5" value="val-Potato-$5" />
            <Picker.Item label="Aubergine-$5" value="val-Aubergine-$5" />
        </Picker>
         <Picker style={styles.picker}
        selectedValue={picker3SelectedValue}
        onValueChange = {(itemValue, itemIndex) => setPicker3SelectedValue(itemValue)}>
           <Picker.Item label = "Quantity" value ="Quantity" />
           <Picker.Item label="1" value="1" />
           <Picker.Item label="2" value="2" />
           <Picker.Item label="3" value="3" />
           <Picker.Item label="4" value="4" />
           <Picker.Item label="5" value="5" />
        </Picker>
        </View>
        <View style={styles.row2}>
        <Picker style={styles.picker}
        selectedValue={picker2SelectedValue}
        onValueChange = {(itemValue, itemIndex) => setPicker2SelectedValue(itemValue)}
        >
            <Picker.Item label = "Fruits" value ="Fruits" />
            <Picker.Item label="Apple-$3" value="val-Apple-$3" />
            <Picker.Item label="Banana-$3" value="val-Banana-$3" />
            <Picker.Item label="Pineapple-$5" value="val-Pineapple-$5" />
        </Picker>
        <Picker style={styles.picker}
        selectedValue={picker4SelectedValue}
        onValueChange = {(itemValue, itemIndex) => setPicker4SelectedValue(itemValue)}>
           <Picker.Item label = "Quantity" value ="Quantity" />
           <Picker.Item label="1" value="1" />
           <Picker.Item label="2" value="2" />
           <Picker.Item label="3" value="3" />
           <Picker.Item label="4" value="4" />
           <Picker.Item label="5" value="5" />
        </Picker>
      </View>
      <View>
        <Button title="CALCULATE" color='#6b8e23'
        onPress={()=> {
        const lastChar = picker1SelectedValue [picker1SelectedValue.length-1];
        const lastChar2 = picker2SelectedValue [picker2SelectedValue.length-1];
        const chartoIntforPicker1 = parseInt(lastChar);
        const chartoIntforPicker2 = parseInt(lastChar2);
        const chartoIntforPicker3 = parseInt(picker3SelectedValue);
        const chartoIntforPicker4 = parseInt(picker4SelectedValue)
        setCalculatedValue((chartoIntforPicker1*chartoIntforPicker3) + (chartoIntforPicker2*chartoIntforPicker4));
        }}
         />
         </View>
         <View>
        <Text style={styles.heading2}>  Total cost of the order :  ${calculatedValue} </Text>
      </View>
      <View>
      <Text style={styles.caption}> App developed by Benjamin Budniak, Cooper Shaw, Smaran Giriprakash & Thomas Kelly </Text>
      </View> 
    </SafeAreaView>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#556b2f'
    },
    heading: {
    fontSize:24,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    marginBottom:10,
    fontWeight:'Bold',
    fontFamily: 'Lobster2'
  },
  heading2:{
    fontSize:18,
    fontFamily: 'Lobster2',
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    marginBottom:10
  },
  paragraph: {
    fontSize:20,
    textAlign:'justify',
    marginTop: 10,
    marginBottom:10,
    color:'white',
    fontFamily:'Cormorant Garmond',
    fontWeight:'Bold'
  },

  caption: {
    fontSize:13,
    textAlign:'right',
    marginTop:15,
    marginLeft:100,
    color:'white',
    fontFamily:'Cormorant Garmond',

  },
 
  row1:{ 
    flexDirection: "row",
    marginTop: 3,
    marginBottom: 20,
  },
   row2:{
    flexDirection: 'row',
    marginTop: 7,
    marginBottom:20,
  },
  picker:{
    flex:4,
    backgroundColor:'#90ee90',
    color:'white',
     fontStyle:'italic',
    fontWeight:'bold',
    fontFamily:'Cormorant Garmond',
    fontSize: 18
  }
});