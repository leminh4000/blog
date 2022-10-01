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

const EditScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const {state, editBlogPost} = useContext(Context);
    const blogPost=state.find((blogPost) => blogPost.id === id);
    return <BlogPostForm
        initialValues={{title: blogPost.title, content: blogPost.content}}
        onSubmit={(title, content)=>{
            editBlogPost(id,title, content, ()=>navigation.pop());
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

export default EditScreen;
