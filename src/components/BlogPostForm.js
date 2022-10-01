import React, {useContext, useState} from 'react';
import {
    View, Text, StyleSheet, FlatList, Button, TouchableOpacity, TextInput
} from 'react-native';
import {Context} from '../context/BlogContext';
import {FontAwesome} from '@expo/vector-icons';

const BlogPostForm = ({onSubmit,initialValues}) => {

    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    return (<View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input} value={title}
                       onChangeText={text => setTitle(text)}/>
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput style={styles.input} value={content}
                       onChangeText={text => setContent(text)}/>
            <Button
                title="Save blog post"
                onPress={() => onSubmit(title, content)}
            />
        </View>);
};

BlogPostForm.defaultProps = {
    initialValues:{
        title:'',
        content:'',
    }
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        margin: 5,
        padding: 10,
    }, label: {
        fontSize: 20, margin: 5,
    }
});

export default BlogPostForm;
