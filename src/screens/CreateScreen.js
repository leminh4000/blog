import React, {useContext, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Button,
    TouchableOpacity, TextInput
} from 'react-native';
import {Context} from '../context/BlogContext';
import {FontAwesome} from '@expo/vector-icons';
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({navigation}) => {
    const {addBlogPost} = useContext(Context);
    return <BlogPostForm onSubmit={(title, content)=>{
        addBlogPost(title, content, ()=>navigation.navigate('Index'))
    }} />
};

const styles = StyleSheet.create({
        input: {
            fontSize: 18,
            borderWidth: 1,
            borderColor: 'black',
            margin: 5,
            padding: 10,
        },
        label: {
            fontSize: 20,
            margin: 5,
        }
    }
);

export default CreateScreen;
