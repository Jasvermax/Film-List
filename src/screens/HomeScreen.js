import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { movieData } from "../../data/movieData";
import { ShowMovie } from "../components/movieComponent";
import { ButtonComponent } from "../components/buttonComponent";

const HomeScreen = ({ navigation }) => {
  const [recommended, setRecommended] = useState([]);
  const [mostViewed, setMostViewed] = useState([]);

  const [allMostViewed, setAllMostViewed] = useState([]);

  useEffect(() => {
    const threeRecommended = [];
    const threeMostViewed = [];

    const sortedRecommended = [...movieData].sort((a, b) => b.rating - a.rating);
    const sortedMostViewed = [...movieData].sort((a, b) => b.viewers - a.viewers);

    for (let i = 0; i < 3; i++) {
      threeRecommended.push(sortedRecommended[i]);
      threeMostViewed.push(sortedMostViewed[i]);
    }

    setRecommended([...movieData].sort((a, b) => b.rating - a.rating));
    setMostViewed([...movieData].sort((a, b) => b.viewers - a.viewers));
    
  }, []);

  const renderMovieItem = ({ item }) => (
    <View style={styles.dataContainer}>
      <Image style={styles.movieImage} source={{ uri: item.imageLink }} />

      <View style={styles.movieDescriptionContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.yearText}>{item.year}</Text>

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
          title="View Details"
          onPress={() =>
            navigation.navigate("DetailMovieScreen", {
              title: item.title,
              year: item.year,
              imageLink: item.imageLink,
              starring: item.starring,
              rating: item.rating,
              viewers: item.viewers,
              description: item.description,
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
            <Text style={styles.categoryText}>Most Viewed</Text>
            
            <View style={styles.seeAllContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('MostViewedScreen', {allMostViewed: mostViewed})}>
                  <Text style={styles.seeAllText}>See All</Text>
              </TouchableOpacity>
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
                  isHome={true}
                />
              )}
              showsHorizontalScrollIndicator={false}
              ListEmptyComponent={
                <View style={{ alignItems: 'center' }}>
                  <Text>
                    No items in this category
                  </Text>
                </View>
              }
            />
            

            {/* <View style={styles.categoryMainContainer}>
                <View style={styles.categoryContainer}>
                    <Text style={styles.categoryText}>Most Viewed</Text>
                </View>
                <View style={styles.seeAllContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('MostViewedScreen')}>
                        <Text style={styles.seeAllText}>See All</Text>
                    </TouchableOpacity>
                </View>
            </View> */}

            {/* RECOMMENDED */}
            <Text style={styles.categoryText}>Recommended</Text>
          </View>
        }
        ListFooterComponent={
          <Text style={styles.footerText}>
            An array of objects lets you store multiple values in a single
            variable. It stores a fixed-size sequential collection of elements
            of the same type.
          </Text>
        }
        ListEmptyComponent={
          <Text>
            No items in this category
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  flatListContainer: {
    padding: 8,
  },
  dataContainer: {
    flexDirection: "row",
    margin: 8,
    padding: 16,
    borderWidth: 2,
    borderColor: "#96ceb4",
    borderRadius: 10,
  },
  movieImage: {
    width: 130,
    height: 200,
    borderRadius: 10,
  },
  movieDescriptionContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  yearText: {
    marginVertical: 8,
  },
  starImageContainer: {
    width: 100,
    height: 20,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 8,
    marginLeft: 8,
  },
  footerText: {
    fontSize: 14,
    margin: 12,
    color: "#555",
  },
  seeAllContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  seeAllText: {
    color: '#009688',
    textDecorationLine: 'underline'
  }
});

export default HomeScreen;
