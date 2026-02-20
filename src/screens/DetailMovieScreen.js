import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MovieExplanation } from "../components/movieComponent";

const DetailMovieScreen = ({ route }) => {
  const { 
    title, 
    year, 
    imageLink, 
    starring, 
    rating, 
    viewers, 
    description 
  } = route.params;

  useEffect(() => {
    const threeRecommended = [];

    for(let i = 0; i < 3; i++){
      threeRecommended.push(title);
    }

    setRecommend(threeRecommended);
    

    // console.log(title);
    // console.log(year);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.movieContainer}>
          <View style={styles.middle}>
            <Image style={styles.image} source={{ uri: imageLink }} />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>

          <MovieExplanation
            name="Year"
            value={year}
            isRating={false}
            />

          <MovieExplanation
            name="Starring"
            value={starring}
          />

          <MovieExplanation
            name="Rating"
            isRating={true}
            rating={rating}
            />

          <MovieExplanation
            name="Viewers"
            value={viewers}
            isRating={false}
            />

          <View style={{ flexDirection: "row", marginTop: 8 }}>
            <Text style={{ fontWeight: "bold" }}>Description: </Text>
            <Text style={{ flex: 1, flexWrap: "wrap" }}>{description}</Text>
          </View>name
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: { 
    flex: 1, 
    backgroundColor: "#fff" 
  },
  movieContainer: {
    margin: 8, 
    padding: 8 
  },
  middle: { 
    alignItems: "center"
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#ffbe7bff",
  },
  titleContainer: {
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 8,
    backgroundColor: "salmon",
    borderRadius: 10,
    color: "white",
    marginBottom: 4,
  },
  year: {
    fontSize: 18,
    color: "#555",
  },
});

export default DetailMovieScreen;
