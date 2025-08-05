import {StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function Home(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Compras</Text>
            <Text style={styles.todaysDate}>Quarta-feira, 17 de Julho de 2025</Text>
            <View style={styles.form}>
                <TextInput 
                style={styles.input} 
                placeholder='Nome do Produto'
                placeholderTextColor="#BDBABA"
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EAEAEA",
        padding: 24,
    },
    title: {
        color: "#000",
        fontFamily: "Inter",
        fontSize: 24,
        fontWeight: "bold",
        lineHeight: 28.8,
        marginTop: 48
    },
    todaysDate: {
        color: "#000",
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: "normal",
        lineHeight: 28.8,
    },
    input: {
        width: "80%",
        height: 56,
        padding: 16,
        backgroundColor: "#fff",
        borderRadius: 5
    },
    form: {
        width: "100%",
        flexDirection: "row",
        marginTop: 18
    },
    button: {
        marginLeft: 16,
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#31C667",
        alignItems: "center",
        justifyContent: "center"
    },
    textButton: {
        color: "#fff",
        fontSize: 24,
    }
});