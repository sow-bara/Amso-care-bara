import { Container } from "lucide";
import { Text, View, StyleSheet } from "react-native";

type Props = {
    titre: string;
    message: string;
};

const MessageUnboarding = ({titre,message }: Props) => {

return(
    <View style={styles.container} >
        <Text style={styles.title}>{titre}</Text>
        <Text style={styles.message}>{message}</Text>
    </View>
);
}

export default MessageUnboarding
const styles = StyleSheet.create(
    {
container:{
    alignItems:"center",
},


title:{
    color:"white",
    fontSize:30,
    fontWeight: "bold",
    top:60,
    width: 350,
},
message:{
    color:"white",
    fontSize:20,
    top:70,
    width: 359,
    textAlign: "justify", 

}
})