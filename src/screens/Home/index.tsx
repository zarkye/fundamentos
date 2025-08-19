import { useState } from "react";
import { Alert, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Product } from "../../components/Product";
import { styles } from "./styles"
export default function Home(){
    const [newProduct, setNewProduct] = useState("");
    const [products, setProducts] = useState<string[]>([
    "Arroz",
    "Feijão",
    "Macarrão",
    // "Farinha de Trigo",
    // "Açúcar",
    // "Sal",
    // "Óleo de Soja",
    // "Leite",
    // "Ovos",
    // "Pão",
    // "Café",
    // "Chá",
    // "Manteiga",
    // "Queijo",
    // "Presunto",
    // "Frango",
    // "Carne Bovina",
    // "Peixe",
    // "Frutas",
    // "Legumes",
    // "Verduras",
    // "Batata",
    // "Cebola",
    // "Alho",
    // "Tomate",
    // "Cenoura",
    // "Banana",
    // "Maçã",
    // "Laranja",
    // "Uva",
    // "Refrigerante",
    // "Suco",
    // "Água Mineral",
    // "Biscoitos",
    // "Cereais",
    // "Molho de Tomate",
    // "Condimentos",
    // "Iogurte",
    // "Sorvete",
    // "Chocolate"
  ]);

    function handleAddProduct(){
        if(products.includes("Arroz")){
            Alert.alert("Teste", "Nova mensagem")
        }
        setProducts(prevState => [...prevState, newProduct]);
        setNewProduct("")
    }

    function handleProductRemove(name: String) {
        Alert.alert("Remover", `Deseja remover o produto ${name}`, [
            {
                text: "Sim",
                onPress: () => Alert.alert("teste"),
                style: "destructive"
            },
            {
                text: "Não",
            }
        ]);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Compras</Text>
            <Text style={styles.todaysDate}>Quarta-feira, 17 de Julho de 2025</Text>

            <View style={styles.form}>
                <TextInput 
                style={styles.input}
                placeholder= "Nome do Produto"
                placeholderTextColor={"#BDBABA"}
                keyboardType="default"
                value={newProduct}
                onChangeText={setNewProduct}
                />

                <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>    
            </View> 
            
            <Text style={styles.listTitle}>Compras Pendentes</Text>
            
            <View style={styles.list}>
            {/* <Text style={styles.listEmptyText}>Comprou todos os produtos? Adicione produtos a sua lista de compras.</Text>

            <ScrollView>
                {
                    products.map((product) => <Product key={product} name={product} onRemove={() => handleProductRemove(product)} />)
                }
            </ScrollView> */}
            <FlatList
                data={products}
                keyExtractor={(item) => item}
                renderItem={({item}) => <Product name={item} onRemove={() => handleProductRemove(item)} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.list}
                ListEmptyComponent={() => ( 
                    <Text style={styles.listEmptyText}>
                        Comprou todos os produtos? Adicione produtos a sua lista de compras.
                    </Text>
                )}
            />
            </View>
            
        </View>

    )
}