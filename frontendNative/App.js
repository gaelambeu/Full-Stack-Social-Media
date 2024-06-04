import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Image, 
  View, 
  SafeAreaView, 
  FlatList,
  useWindowDimensions,
  Text
} from 'react-native';
import data from './src/data/data.js'

import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedRef,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';


const App = () => {
  const {width: SCREEN_WIDTH} = useWindowDimensions();

  const RenderItem = ({item, index}) => {
    return (
      <View style={[styles.itemContainer, {width: SCREEN_WIDTH}]}>
        <Image source={item.image} style={{width: SCREEN_WIDTH * 0.8, height: SCREEN_WIDTH * 0.8}} />
        <View>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemText}>{item.text}</Text>
        </View>
        
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={data} 
        renderItem={({item, index}) => {
          return <RenderItem item={item} index={index} />
        }} 
        keyExtractor={item => item.id}
        scrollEventThrottle={16}
        horizontal={true}
        bounces={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      />
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63b8ea',
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#63b8ea'
  },

  itemTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  itemText: {
    color: 'black',
    textAlign: 'center',
    lineHeight: 18,
    marginHorizontal: 35,
  }
});
