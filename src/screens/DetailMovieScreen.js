import { View, Text } from 'react-native'
import React from 'react'
import { useEffect } from 'react';

const DetailMovieScreen = (props) => {
  const { route } = props;
  const movie = route.params.item;
  const { title, year } = route.params;

  useEffect(() => {
    console.log(title);
    console.log(year);
  }, []);

  return (
   <View style={styles.mainContainer}>
      <View style={styles.movieContainer}>
         <View style={styles.middle}>
            <Image
                style={styles.image}
                source={{ uri: movie.imageLink }}
           />
         </View>
     </View>
   </View>
)
}

export default DetailMovieScreen