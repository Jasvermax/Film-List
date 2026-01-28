import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { movieData } from "../../data/movieData";
import { ShowMovie } from "../components/movieComponent";
import { ButtonComponent } from "../components/buttonComponent";

const HomeScreen = ({ navigation }) => {
  const [recommended, setRecommended] = useState([]);
  const [mostViewed, setMostViewed] = useState([]);

  const compareRating = (a, b) => b.rating - a.rating;
  const compareViewers = (a, b) => b.viewers - a.viewers;

  useEffect(() => {
    setRecommended([...movieData].sort(compareRating));
    setMostViewed([...movieData].sort(compareViewers));
  }, []);

  const renderMovieItem = ({ item }) => (
    <View style={styles.dataContainer}>
      <Image
        style={styles.movieImage}
        source={{ uri: item.imageLink }}
      />

      <View style={styles.movieDescriptionContainer}>
        <Text style={styles.title}>{item.title}</Text>

        <View style={styles.yearContainer}>
          <Text>{item.year}</Text>
        </View>

        <Image
          style={styles.starImageContainer}
          source={
            item.rating === 5
              ? require("../../assets/images/five-stars.png")
              : item.rating === 4
              ? require("../../assets/images/four-stars.png")
              : item.rating === 3
              ? require("../../assets/images/three-stars.png")
              : item.rating === 2
              ? require("../../assets/images/two-stars.png")
              : require("../../assets/images/star.png")
          }
        />

        <ButtonComponent
          onPress={() =>
            navigation.navigate("DetailMovieScreen", {
              title: item.title,
              year: item.year,
            })
          }
        />
      </View>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={movieData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMovieItem}
        contentContainerStyle={styles.flatListContainer}
        ListHeaderComponent={
          <View>
            {/* MOST VIEWED */}
            <View style={styles.mainCategoryContainer}>
              <Text style={styles.categoryText}>Most Viewed</Text>
            </View>

            <FlatList
              horizontal
              data={mostViewed}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <ShowMovie
                  image={item.imageLink}
                  title={item.title}
                  viewers={item.viewers.toLocaleString()}
                />
              )}
              showsHorizontalScrollIndicator={false}
            />

            {/* RECOMMENDED */}
            <View style={styles.mainCategoryContainer}>
              <Text style={styles.categoryText}>Recommended</Text>
            </View>
          </View>
        }
        ListFooterComponent={
          <Text style={styles.footerText}>
            An array of objects lets you store multiple values in a single
            variable. It stores a fixed-size sequential collection of elements
            of the same type.
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
    },
    flatListContainer:{
        padding:8,
    },
    movieImage:{
        width: 130,
        height: 200,
        borderRadius: 10,
    },
    dataContainer:{
        margin: 8,
        borderColor: "#96ceb4",
        borderWidth: 2,
        borderRadius: 10,
        padding: 16,
        flexDirection: 'row',
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    movieDescriptionContainer:{
        flex: 1,
        justifyContent: 'center',
        marginLeft: 8,
    },
    yearContainer:{
        marginTop: 8,
        marginBottom: 8,
    },
    mainCategoryContainer: {
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8,
        flexDirection: 'row'
    },
    categoryContainer: {
        flex: 1
    },
    categoryText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    starImageContainer: {
        width: 100,
        height: 20,
    },
});

export default HomeScreen;
