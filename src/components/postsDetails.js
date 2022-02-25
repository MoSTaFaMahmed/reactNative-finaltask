import { Text, Pressable,HStack,  Spinner,Heading } from 'native-base';
import { useContext, useEffect } from 'react';
import { getPostDetails, clearDetails } from '../actions';
import { PostsContext } from '../context';
import { View } from "react-native";
import { styles } from './style';
import { NavigationContainer } from '@react-navigation/native';

const PostsDetails = ({ route, navigation }) => {
  const { state, dispatch } = useContext(PostsContext)
  useEffect(() => {
    const resolveAction = async () => {
      dispatch(await getPostDetails(route.params.id));
    };
    resolveAction();
    if (state.details.id)
      return () => {
        dispatch(clearDetails())
      }
  }, [])
  if (state.details.id) {
    return(
      <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.metaContainer}>
          <View>

            <Text style={styles.timings}>Today @ {state.details.id} PM</Text>
            <Text style={styles.heder}>title</Text>
            <Text style={styles.description}>{state.details.title}</Text>
            <Text style={styles.heder}>Description</Text>
            <Text style={styles.description}>{state.details.body}</Text>
            <Pressable onPress={() => {
              navigation.navigate('posts')
            }} style={styles.button}>
              <Text style={styles.buttonText}>Back</Text>
            </Pressable>
          </View>

        </View>
      </View>
    </View>

    )
    
  }

  return <HStack justifyContent="center" marginTop={50} space={2} alignItems="center">
  <Spinner accessibilityLabel="Loading posts" />
  <Heading color="primary.500" fontSize="md">
    Loading
  </Heading>
</HStack>;
}

export default PostsDetails;