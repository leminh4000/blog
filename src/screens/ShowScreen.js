import React, {useContext} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Button,
    TouchableOpacity
} from 'react-native';
import {Context} from '../context/BlogContext';
import {FontAwesome} from '@expo/vector-icons';
import IndexScreen from "./IndexScreen";

const ShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const {state, addBlogPost, deleteBlogPost} = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === id);

    return (
        <View>
            <Text>{blogPost.title}-{blogPost.id}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
                <FontAwesome name="edit" size={30}/>
            </TouchableOpacity>),
    };
};

const styles = StyleSheet.create({}
);

export default ShowScreen;
