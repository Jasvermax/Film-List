import { useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { movieData } from "../../data/movieData";
import { ShowMovie } from "../components/movieComponent";
import { renderItem } from "./HomeScreen";

const MostViewedScreen = (props) => {
    const { route } = props;
    const sortedMostViewed = route.params.allMostViewed;

    useEffect(() => {
        console.log(sortedMostViewed.length);
    }, []);

    return(
        <View>
            <FlatList
                contentContainerStyle={styles.mainDataContainer}
                data={sortedMostViewed}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <ShowMovie
                        image={item.imageLink}
                        title={item.title}
                        viewers={item.viewers} />
                )}
                numColumns={2}
                key={2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainDataContainer: {
        padding: 8,
    },
})

export default MostViewedScreen;