import { StyleSheet } from "react-native";
export const  styles = StyleSheet.create({
     container: {
          backgroundColor: '#0891b2',
          paddingVertical: 16,
          paddingHorizontal: 12,
          borderRadius: 5,
          alignSelf: 'center',
          width: 375,
          maxWidth: '100%'
     },
     timings: {
          color: '#fff',
          fontSize:14,
          marginLeft:'auto'
     },
     metaContainer: {
          justifyContent: 'space-between'
     },
     topContainer: {
          flexDirection: 'column',
          justifyContent: 'space-between'
     },
    
     description: {
          color: 'white',
          marginTop: 5,
          fontSize: 20,
          
          textAlignVertical:'center'
               },
               heder:{
                    textAlign:'center',
                    marginTop:5,
                    fontSize:20,
                    color:'black',
                    fontWeight:'bold',
                  textTransform:"uppercase",
                  marginTop:10
                  
               },
     button: {
          marginTop:5,
          backgroundColor: '#22d3ee',
          alignSelf: 'flex-start',
          paddingHorizontal: 12,
          paddingVertical: 4,
          borderRadius: 2,
          
     },
     buttonText: {
          fontWeight: 'bold',
          color: 'white',
          textTransform: 'uppercase',
          fontSize: 14,
          
     }
});