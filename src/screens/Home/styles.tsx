import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: "#ebe6e6",
        padding: 24
    },
    title: {
        color: "#000",
        fontSize: 24,
        fontWeight: "bold", //700,
        lineHeight: 28.8,
        marginTop: 48,
    },
    todaysDate: {
        color: "#000",
        fontSize: 16,
        fontWeight: "normal",
        lineHeight: 28.8,

    },
    listTitle: {
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: 24,
        marginBottom: 36
        
    },
    input: {
        flex: 1,
        height: 56,
        padding: 16,
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 5,
        borderRadius: 5,
        marginRight: 16,
    
    },
    form : {
        width: "100%",
        flexDirection: "row",
        marginTop: 18,

        marginBottom: 36,
    },

    button: {
        width: 56, 
        height: 56,
        backgroundColor: "#31C667",
        borderRadius: 5,
    
        alignItems: "center",
        justifyContent: "center"
    },
    textButton: {
        color: "#fff",
        fontSize: 24,
    },

    listEmptyText: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 19.2,
        textAlign: "center",
        display: "flex"
    },

    list: {
        flexGrow: 1,
        justifyContent: "center"
    }})
