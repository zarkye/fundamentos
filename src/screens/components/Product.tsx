import { StyleSheet, View, Text, TouchableOpacity } from "react-native"

interface Props {
    name: string;
    onRemove: () => void;
}

export function Product(props: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>

            <TouchableOpacity 
                style={styles.button}
                onPress={props.onRemove}
            >
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        alignItems: "center",
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        marginBottom: 8,
    },

    name: {
        flex: 1,
        fontSize: 16,
        lineHeight: 19.2,
        marginLeft: 16,
        marginRight: 16,
    },

    buttonText: {
        fontSize: 24,
        color: "white",
    },

    button: {
        height: 56, 
        width: 56,
        backgroundColor: "#E23C44",
        alignItems: "center",
        justifyContent: "center",
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
    }
})