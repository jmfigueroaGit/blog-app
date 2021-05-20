import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogFormPost';
const CreateScreen = ({ navigation }) => {
    const { addBlogPosts } = useContext(Context);

    return (
        <BlogPostForm
            onSubmit={(title, content) => {
                addBlogPosts(title, content, () =>
                    navigation.navigate('Index')
                );
            }}
        />
    );
};

export default CreateScreen;

const styles = StyleSheet.create({});
