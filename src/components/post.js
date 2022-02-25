import { Text, Pressable } from "native-base"
import { View } from "react-native";
import { styles } from './style';
const Post = ({ item, navigation }) => {
     if (item.id) {
          return (
               <View style={styles.container}>
                    <View style={styles.topContainer}>
                         <View style={styles.metaContainer}>
                              <View>
                                   <Text style={styles.timings}>Today @ {item.id} PM</Text>
                                   <Text style={styles.description}>{item.title}</Text>
                              </View>
                              <Pressable onPress={() => {
                                   navigation.navigate({
                                        name: 'postsdetails', params: {
                                             id: item.id
                                        }
                                   })
                              }} style={styles.button}>
                                   <Text style={styles.buttonText}>Read More...</Text>
                              </Pressable>
                         </View>
                    </View>
               </View>)

     }

     return <Text>No Post</Text>
}
export default Post;