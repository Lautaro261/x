import { StyleSheet, Text, View } from "react-native";
import CardProyect from "../Components/CardProyect";

const HomeScreen = () => {
    return ( 
    
         <View style={styles.container}>
            <Text style={styles.text}>Proyect X </Text>
            <View>
                <CardProyect/>
            </View>
         </View>
     );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#0B152C',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        color: '#f7f9f4ab'
    }
})
 
export default HomeScreen;