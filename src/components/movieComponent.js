import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from "react-native-elements";

export const ShowMovie = (props) => {
    const {image, title, viewers } = props;

    return(
        <View style={styles.horizontalDataContainer}>
            <Image
                style={styles.movieImage}
                source={{ uri: props.image }}
            />
            <View style={styles.horizontalTitleContainer}>
                <Text style={styles.horizontalTitle}>
                    {props.title}
                </Text>
            </View>
            <View style={styles.viewersContainer}>

                {/* <Ionicons
                    name="eye-outline"
                    size={20}
                    color="black"
                /> */}

                <Icon
                    name="eye"
                    type="ionicon"
                    size={20}
                    color={"black"}
                />

                <View style={styles.viewersText}>
                    <Text>
                        {props.viewers}
                    </Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    horizontalDataContainer: {
        margin: 8,
        width: 180,
        alignItems: 'center',
        borderColor: '#96ceb4',
        borderWidth: 2,
        borderRadius: 10,
        padding: 16
    },
    horizontalTitleContainer: {
        marginTop: 8,
        marginBottom: 8
    },
    horizontalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    movieImage: {
        width: 130,
        height: 200,
        borderRadius: 10
    },
    viewersContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewersText: {
        marginLeft: 8
    }
});