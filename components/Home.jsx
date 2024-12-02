//Home Page
import {SafeAreaView, Text, TextInput, Button, View,Image,ScrollView} from "react-native"
import { useMemo, useState } from "react";
import { StyleSheet } from "react-native";
//import { RadioGroup } from "react-native-radio-buttons-group";
import RadioGroup from 'react-native-radio-buttons-group';
import { useNavigation } from "@react-navigation/native";

import b1_1 from '../assets/images/B1SCRAMBLES.jpg';
import b1_2 from '../assets/images/B1PEAR.jpg';
import b2_1 from '../assets/images/B2PAN.jpg';
import b2_2 from '../assets/images/B2TOAST.jpg';
import b3_1 from '../assets/images/B3SAND.jpg';
import b3_2 from '../assets/images/B3YOGURT.jpg';
import b4_1 from '../assets/images/B4OAT.jpg';
import b4_2 from '../assets/images/B4TOAST.jpg';
import b5_2 from '../assets/images/B5SCRAMBLES.jpg';
import b5_1 from '../assets/images/B5BERRY.jpg';
import b6_1 from '../assets/images/B6MUFFIN.jpg';
import b6_2 from '../assets/images/B6SMOOTHIE.jpg';

import l1_1 from '../assets/images/L1SALAD.jpg';
import l1_2 from '../assets/images/L1SHAKE.jpg';
import l2_1 from '../assets/images/L2SALAD.jpg';
import l2_2 from '../assets/images/L2SHAKE.jpg';
import l3_1 from '../assets/images/L3SALAD.jpg';
import l3_2 from '../assets/images/L3SMOOTHIE.jpg';
import l4_1 from '../assets/images/L4SALAD.jpg';
import l4_2 from '../assets/images/L4SMOOTHIE.jpg';
import l5_2 from '../assets/images/L5SALAD.jpg';
import l5_1 from '../assets/images/L5SMOOTHIE.jpg';
import l6_1 from '../assets/images/L6SAND.jpg';
import l6_2 from '../assets/images/L6SLAW.jpg';

import d1_1 from '../assets/images/D1CHICKEN.jpg';
import d1_2 from '../assets/images/D1HUMMUS.jpg';
import d2_1 from '../assets/images/D2PATATOES.jpg';
import d2_2 from '../assets/images/D2SHRIMP.jpg';
import d3_1 from '../assets/images/D3CHICKEN.jpg';
import d3_2 from '../assets/images/D3SPINACH.jpg';
import d4_1 from '../assets/images/D4SLAW.jpg';
import d4_2 from '../assets/images/D4TEMPEH.jpg';
import d5_2 from '../assets/images/D5CHICKEN.jpg';
import d5_1 from '../assets/images/D5SALAD.jpg';
import d6_1 from '../assets/images/D6SALAD.jpg';
import d6_2 from '../assets/images/D6STEACK.jpg';

import s1_1 from '../assets/images/S1PEACH.jpg';
import s2_1 from '../assets/images/S2WRAP.jpg';
import s3_1 from '../assets/images/S3PLATE.jpg';
import s4_1 from '../assets/images/S4TABOULI.jpg';
import s5_1 from '../assets/images/S5MOUSSE.jpg';
import s6_1 from '../assets/images/S6TOAST.jpg';



//IL FAUT QUE SI ON APPUYE SUR UN BOUTTON IL NOUS EMMENE SUR LA PAGE DE MEAL
export default function Home({ route }){
    const navigation = useNavigation(); 

    const { name, surname, age, gender, height, weight, diet, sport,breakfast, lunch,dinner,snack} = route.params;
    
    

    const theBreakfast = useMemo(()=>([
        {
            id: '1',
            label:'Scrambled Eggs with Onion Flakes + Toast with Pear, Cottage Cheese, and Honey (370 kcal)',
            value:'Scrambled Eggs with Onion Flakes + Toast with Pear, Cottage Cheese, and Honey (370 kcal)',
            imageLink1:b1_1,
            imageLink2:b1_2,
            veg:false,
            vege:true,
        },
        {
            id: '2',
            label:'Low Carb Pancakes + Toast with tomato, onion and hummus (370 kcal)',
            value:'Low Carb Pancakes + Toast with tomato, onion and hummus (370 kcal)',
            imageLink1:b2_1,
            imageLink2:b2_2,
            veg:false,
            vege:true,
        },
        {
            id:'3',
            label:'Canadian Bacon Breakfast Sandwich + Plum and Greek yogurt snack (443 kcal)',
            value:'Canadian Bacon Breakfast Sandwich + Plum and Greek yogurt snack (443 kcal)',
            imageLink1:b3_1,
            imageLink2:b3_2,
            veg:false,
            vege:false,
        },
        {
            id:'4',
            label:'Oatmeal and apples + Cucumber avocado toast (519 kcal)',
            value:'Oatmeal and apples + Cucumber avocado toast (519 kcal)',
            imageLink1:b4_1,
            imageLink2:b4_2,
            veg:true,
            vege:true,
        },
        {
            id:'5',
            label:'Parsley and Tomato scramble + very berry cottage cheese  (529 kcal)',
            value:'Parsley and Tomato scramble + very berry cottage cheese (529 kcal)',
            imageLink1:b5_1,
            imageLink2:b5_2,
            veg:false,
            vege:true,
            big:true,
        },
        {
            id:'6',
            label:'Peanut butter banana English muffin + veggie apple smoothie (549 kcal)',
            value:'Peanut butter banana English muffin + veggie apple smoothie (549 kcal)',
            imageLink1:b6_1,
            imageLink2:b6_2,
            veg:true,
            vege:true,
            big:true,
        }
    ]))
   
    const theLunch = useMemo(()=>([
        {
            id: '1',
            label:'Simple Mixed Greens Salad + chocolate peanut butter oatmeal protein shake (424 kcal)',
            value:'Simple Mixed Greens Salad + chocolate peanut butter oatmeal protein shake (424 kcal)',
            imageLink1:l1_1,
            imageLink2:l1_2,
            veg:false,
            vege:true,
        },
        {
            id: '2',
            label:'Banana Almond Shake + Mushroom and pepper tossed salad (387 kcal)',
            value:'Banana Almond Shake + Mushroom and pepper tossed salad (387 kcal)',
            imageLink1:l2_1,
            imageLink2:l2_2,
            veg:false,
            vege:true,
        },
        {
            id:'3',
            label:'Sunrise smoothie + Cucumber salad (457 kcal)',
            value:'Sunrise smoothie + Cucumber salad (457 kcal)',
            imageLink1:l3_1,
            imageLink2:l3_2,
            veg:false,
            vege:true,
        },
        {
            id:'4',
            label:'Quick and easy vegan ceasar salad + pineapple raspberry smoothie (527 kcal)',
            value:'Quick and easy vegan ceasar salad + pineapple raspberry smoothie (527 kcal)',
            imageLink1:l4_1,
            imageLink2:l4_2,
            veg:true,
            vege:true,
        },
        {
            id:'5',
            label:'Tuna avocado salad + Peanut butter banana smoothie (541 kcal)',
            value:'Tuna avocado salad + Peanut butter banana smoothie (541 kcal)',
            imageLink1:l5_1,
            imageLink2:l5_2,
            veg:false,
            vege:false,
            big:true,
        },
        {
            id:'6',
            label:'Tomato and hummus pocket sandwich + brussels sprout slaw (555 kcal)',
            value:'Tomato and hummus pocket sandwich + brussels sprout slaw (555 kcal)',
            imageLink1:l6_1,
            imageLink2:l6_2,
            veg:true,
            vege:true,
            big:true,
        }
    ]))

    const theDinner = useMemo(()=>([
        {
            id: '1',
            label:'Thai Basil Chicken + Brocccoli with hummus and sesame seeds (402 kcal)',
            value:'Thai Basil Chicken + Brocccoli with hummus and sesame seeds (402 kcal)',
            imageLink1:d1_1,
            imageLink2:d1_2,
            veg:false,
            vege:false,
        },
        {
            id: '2',
            label:'Simple spicy garlic shrimp + Sour Cream and parsley mashed potatoes (448 kcal)',
            value:'Simple spicy garlic shrimp + Sour Cream and parsley mashed potatoes (448 kcal)',
            imageLink1:d2_1,
            imageLink2:d2_2,
            veg:false,
            vege:true,
        },
        {
            id:'3',
            label:'BBQ Chicken salad + easy sautéed spinach (634 kcal)',
            value:'BBQ Chicken salad + easy sautéed spinach (634 kcal)',
            imageLink1:d3_1,
            imageLink2:d3_2,
            veg:false,
            vege:false,
            big:true,
        },
        {
            id:'4',
            label:'Tempeh Strips with almond sauce + edamame slaw (527 kcal)',
            value:'Tempeh Strips with almond sauce + edamame slaw (527 kcal)',
            imageLink1:d4_1,
            imageLink2:d4_2,
            veg:true,
            vege:true,
        },
        {
            id:'5',
            label:'White bean and chicken Stir fry + green salad (730 kcal)',
            value:'White bean and chicken Stir fry + green salad (730 kcal)',
            imageLink1:d5_1,
            imageLink2:d5_2,
            veg:false,
            vege:false,
            big:true,
        },
        {
            id:'6',
            label:'Portobello steaks with avocado chimichurri + kale Avocado salad (684 kcal)',
            value:'Portobello steaks with avocado chimichurri + kale Avocado salad (684 kcal)',
            imageLink1:d6_1,
            imageLink2:d6_2,
            veg:true,
            vege:true,
            big:true,
        }
    ]))

    const theSnack = useMemo(()=>([
        {
            id: '1',
            label:'Peaches and almond butter on toast (198 kcal)',
            value:'Peaches and almond butter on toast (198 kcal)',
            imageLink1:s1_1,
            veg:true,
            vege:true,
        },
        {
            id: '2',
            label:'Avocado lettuce wrap (194 kcal)',
            value:'Avocado lettuce wrap (194 kcal)',
            imageLink1:s2_1,
            veg:true,
            vege:true,
        },
        {
            id:'3',
            label:'Fruit & Vegetable Plate with Almonds & Cheese (270 kcal)',
            value:'Fruit & Vegetable Plate with Almonds & Cheese (270) kcal)',
            imageLink1:s3_1,
            veg:false,
            vege:true,
        },
        {
            id:'4',
            label:'Raw Cauliflower tabouli (219 kcal)',
            value:'Raw Cauliflower tabouli (219 kcal)',
            imageLink1:s4_1,
            veg:true,
            vege:true,
        },
        {
            id:'5',
            label:'Light peanut butter mousse (301 kcal)',
            value:'Light peanut butter mousse (301) kcal)',
            imageLink1:s5_1,
            veg:false,
            vege:true,
            big:true,
        },
        {
            id:'6',
            label:'Hummus avocado toast (306 kcal)',
            value:'Hummus avocado toast (306 kcal)',
            imageLink1:s6_1,
            veg:true,
            vege:true,
            big:true,
        }
    ]))


    //radio buttons to select the Dietary 
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.header}> Welcome to the Home page ! </Text>
            
            <View style={styles.box}>

            <Text style={styles.header}> My meal plan </Text>
            <Text style={styles.header}> Breakfast </Text>

            <View> {theBreakfast.map((item)=> {
                       return(
                        <View>
                            {breakfast===item.value? <View style={styles.imageFontMain}>
                                <View style={{flexDirection:'row'}}>
                                    <Image source={item.imageLink1} style={styles.ImageStyle}/>
                                    <Image source={item.imageLink2} style={styles.ImageStyle}/>
                                </View>
                                <Text style={styles.titles}>{item.value}{`\n`}{`\n`}</Text>
                            </View>:null}   
                        </View> 
                    )
                    })}
            </View>
            <Text style={styles.header}> Lunch </Text>

            <View> {theLunch.map((item)=> {
                       return(
                        <View>
                            {lunch===item.value? <View style={styles.imageFontMain}>
                                <View style={{flexDirection:'row'}}>
                                    <Image source={item.imageLink1} style={styles.ImageStyle}/>
                                    <Image source={item.imageLink2} style={styles.ImageStyle}/>
                                </View>
                                <Text style={styles.titles}>{item.value}{`\n`}{`\n`}</Text>
                            </View>:null}   
                        </View> 
                    )
                    })}
            </View>
            <Text style={styles.header}> Dinner </Text>

            <View> {theDinner.map((item)=> {
                       return(
                        <View>
                            {dinner===item.value? <View style={styles.imageFontMain}>
                                <View style={{flexDirection:'row'}}>
                                    <Image source={item.imageLink1} style={styles.ImageStyle}/>
                                    <Image source={item.imageLink2} style={styles.ImageStyle}/>
                                </View>
                                <Text style={styles.titles}>{item.value}{`\n`}{`\n`}</Text>
                            </View>:null}   
                        </View> 
                    )
                    })}
            </View>
            <Text style={styles.header}>Snack</Text>

            <View> {theSnack.map((item)=> {
                       return(
                        <View>
                            {snack===item.value? <View style={styles.imageFontMain}>
                                <View style={{flexDirection:'row'}}>
                                    <Image source={item.imageLink1} style={styles.ImageStyle}/>
                                    
                                </View>
                                <Text style={styles.titles}>{item.value}{`\n`}{`\n`}</Text>
                            </View>:null}   
                        </View> 
                    )
                    })}
            </View>

            
            {/* Button to navigate to the "Meal" page */}
            
            <Text/>
            <Button title="My body informations" color="plum"
                onPress={() => navigation.navigate('BodyInfos', { name, surname, age, gender, height, weight, diet, sport,breakfast, lunch,dinner,snack  })}
            />
            <Text/>
            <Button title="Change my meal plan" color="plum"
                onPress={() => navigation.navigate('Meal', { name, surname, age, gender, height, weight, diet, sport,breakfast, lunch,dinner,snack })}
            />
             </View>

        </ScrollView>
    );
}

const styles=StyleSheet.create({
    container :{
        flex: 1,
        textAlign: 'center',
        marginBottom: 20,
        backgroundColor: 'plum',
        paddingBottom: 100,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    text:{
        fontSize: 14,
        fontWeight: 'bold',
    },
    input:{
        borderWidth: 1,
        borderColor: 'gray',
        width: 200,
        height: 40,
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
    box: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        padding: 15,
        marginLeft:20,
        marginBottom:20,
        marginRight:20,
        // ios shadows
        shadowColor: "#700070",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,

        // android shadows
        elevation: 8,
    },
    ImageStyle:{
        width:150,
        height:100,
        borderRadius:5,
        alignSelf:'center',
        margin:3,
    },
});
