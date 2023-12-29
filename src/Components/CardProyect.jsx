import { StyleSheet, View, Text } from "react-native";
const CardProyect = () => {
    return ( 
         <View style={styles.container}>
            <Text style={styles.text}>JPG MEDIA</Text>
         </View>
     );
}
 
export default CardProyect;

const styles = StyleSheet.create({
    container: {
        borderWidth:1,
        borderColor: '#ffffff',
    },
    text:{
        color:'#F7F9F4'
    }
})