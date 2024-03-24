import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { app } from "../../fierbaseConfig";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Formik } from "formik";
import {Picker} from '@react-native-picker/picker'

export default function AddPostScreen() {
  const db = getFirestore(app);

  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = async () => {
    const querySnapshot = await getDocs(collection(db, "Category"));
    const categories = querySnapshot.docs.map(doc => doc.data())
    setCategoryList(categories);
  };
  return (
    <View className="p-10 mt-10">
      <Text className="text-3xl font-bold text-gray-700">Add New Post</Text>
      <Text className="text-gray-700 text-sm mb-10">Create New Post and Start Selling</Text>
      <Formik
        initialValues={{
          name: "",
          desc: "",
          category: "",
          address: "",
          price: "",
          image: "",
        }}
        onSubmit={value=>console.log(value)}
      >
        {({handleChange , handleBlur, handleSubmit,values})=>(
          <View>
            <TextInput
            style={styles.input}
            placeholder="Name"
            value={values?.name}
            onChangeText={handleChange('name')}
            />
            <TextInput
            style={styles.input}
            placeholder="Description"
            value={values?.desc}
            onChangeText={handleChange('desc')}
            numberOfLines={5}
            multiline={true}
            />
            <TextInput
            style={styles.input}
            placeholder="Price"
            value={values?.price}
            keyboardType="number-pad"
            onChangeText={handleChange('price')}
            />
            <Picker
            selectedValue={values?.category}
            onValueChange={handleChange('category')}
            >
              {categoryList && categoryList.map((item,index)=>(
                <Picker.Item key={index} label={item.name} value={item.name} />
              ))}
            </Picker>
            <TextInput
            style={styles.input}
            placeholder="Address"
            value={values?.address}
            onChangeText={handleChange('address')}
            />
            <TouchableOpacity className='bg-blue-600 p-2 rounded-full flex items-center justify-center' onPress={handleSubmit} >
              <Text className='text-lg text-white font-bold'>Submit</Text>
            </TouchableOpacity>
            {/* <Button title="Submit" onPress={handleSubmit} className="mt-7"/> */}
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input:{
    borderWidth:1,
    borderRadius:20,
    padding:10,
    paddingHorizontal:17,
    fontSize:17,
    marginTop:10,
    marginBottom:10
    ,textAlignVertical:'top'
  }
})