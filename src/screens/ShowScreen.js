import React, { useContext, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';
const ShowScreen = ({ route, navigation }) => {
    const { state } = useContext(Context);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Blogs',
            headerRight: () => (
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('Edit', { id: route.params.id })
                    }
                >
                    <FontAwesome
                        name='pencil'
                        size={30}
                        color='black'
                        style={{ marginRight: 15 }}
                    />
                </TouchableOpacity>
            ),
        });
    });

    const blogPost = state.find((blogPost) => blogPost.id === route.params.id);
    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};

export default ShowScreen;

const styles = StyleSheet.create({});
