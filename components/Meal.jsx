//Meal Page
import {SafeAreaView, Text, TextInput, Button, View, Image, Pressable,ScrollView,useWindowDimensions} from "react-native"
import { useMemo, useState } from "react";
import { StyleSheet } from "react-native";
//import { RadioGroup } from "react-native-radio-buttons-group";
import RadioGroup from 'react-native-radio-buttons-group';
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";




// ALL THE PICTURES OF EACH MEAL
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
import s7_1 from '../assets/images/S7NOTHING.jpg';




//IL FAUT QUE SI ON APPUIE SUR UN BOUTON IL NOUS EMMENE SUR LA PAGE DU MEAL TOUT SEUL 
export default function ChoiceMeal({route}){
    
    //const {height1, width1} = useWindowDimensions();

    const navigation = useNavigation(); 
    

    const{diet,kcal}=route.params;

    

    // ALL THE POSSIBLE MEAL TIME
    
    const [breakfast,setBreakfast]=useState('Oatmeal and apples + Cucumber avocado toast (519 kcal)');
    const [lunch,setLunch]=useState("Quick and easy vegan ceasar salad + pineapple raspberry smoothie (527 kcal)");
    const [dinner,setDinner]=useState("Tempeh Strips with almond sauce + edamame slaw (527 kcal)");
    const [snack,setSnack]=useState("Raw Cauliflower tabouli (219 kcal)");

    


    
   

    //radio buttons to select the Meal plan BREAKFAST
    const radioButtonsBreakfast = useMemo(()=>([
        {
            id: '1', // ID 
            label:'Scrambled Eggs with Onion Flakes + Toast with Pear, Cottage Cheese, and Honey (370 kcal)', // NAME OF THE MEAL WITH CALORIES
            value:'Scrambled Eggs with Onion Flakes + Toast with Pear, Cottage Cheese, and Honey (370 kcal)', // NAME OF THE MEAL WITH CALORIES
            imageLink1:b1_1, // PHOTOS
            imageLink2:b1_2, // PHOTOS
            calo:370, // NUMBER OF CALORIES
            veg:false, // IF IT IS VEGAN
            vege:true, // IF IT IS VEGETARIAN
            
        },
        {
            id: '2',
            label:'Low Carb Pancakes + Toast with tomato, onion and hummus (370 kcal)',
            value:'Low Carb Pancakes + Toast with tomato, onion and hummus (370 kcal)',
            imageLink1:b2_1,
            imageLink2:b2_2,
            calo:370,
            veg:false,
            vege:true,
            
        },
        {
            id:'3',
            label:'Canadian Bacon Breakfast Sandwich + Plum and Greek yogurt snack (443 kcal)',
            value:'Canadian Bacon Breakfast Sandwich + Plum and Greek yogurt snack (443 kcal)',
            imageLink1:b3_1,
            imageLink2:b3_2,
            calo:443,
            veg:false,
            vege:false,
            
        },
        {
            id:'4',
            label:'Oatmeal and apples + Cucumber avocado toast (519 kcal)',
            value:'Oatmeal and apples + Cucumber avocado toast (519 kcal)',
            imageLink1:b4_1,
            imageLink2:b4_2,
            calo:519,
            veg:true,
            vege:true,
        },
        {
            id:'5',
            label:'Parsley and Tomato scramble + very berry cottage cheese  (529 kcal)',
            value:'Parsley and Tomato scramble + very berry cottage cheese (529 kcal)',
            imageLink1:b5_1,
            imageLink2:b5_2,
            calo:529,
            veg:false,
            vege:true,
            
        },
        {
            id:'6',
            label:'Peanut butter banana English muffin + veggie apple smoothie (549 kcal)',
            value:'Peanut butter banana English muffin + veggie apple smoothie (549 kcal)',
            imageLink1:b6_1,
            imageLink2:b6_2,
            calo:549,
            veg:true,
            vege:true,
            
        },
        {
            id:'7',
            label:'Nothing',
            value:'Nothing',
            imageLink1:s7_1,
            imageLink2:s7_1,
            calo:0,
            veg:true,
            vege:true,
            
        }
        
    ]))
   
    //radio buttons to select the Meal plan LUNCH
    const radioButtonsLunch = useMemo(()=>([
        {
            id: '1',
            label:'Simple Mixed Greens Salad + chocolate peanut butter oatmeal protein shake (424 kcal)',
            value:'Simple Mixed Greens Salad + chocolate peanut butter oatmeal protein shake (424 kcal)',
            imageLink1:l1_1,
            imageLink2:l1_2,
            calo:424,
            veg:false,
            vege:true,
            
        },
        {
            id: '2',
            label:'Banana Almond Shake + Mushroom and pepper tossed salad (387 kcal)',
            value:'Banana Almond Shake + Mushroom and pepper tossed salad (387 kcal)',
            imageLink1:l2_1,
            imageLink2:l2_2,
            calo:387,
            veg:false,
            vege:true,
           
        },
        {
            id:'3',
            label:'Sunrise smoothie + Cucumber salad (457 kcal)',
            value:'Sunrise smoothie + Cucumber salad (457 kcal)',
            imageLink1:l3_1,
            imageLink2:l3_2,
            calo:457,
            veg:false,
            vege:true,
        },
        {
            id:'4',
            label:'Quick and easy vegan ceasar salad + pineapple raspberry smoothie (527 kcal)',
            value:'Quick and easy vegan ceasar salad + pineapple raspberry smoothie (527 kcal)',
            imageLink1:l4_1,
            imageLink2:l4_2,
            calo:527,
            veg:true,
            vege:true,
            
        },
        {
            id:'5',
            label:'Tuna avocado salad + Peanut butter banana smoothie (541 kcal)',
            value:'Tuna avocado salad + Peanut butter banana smoothie (541 kcal)',
            imageLink1:l5_1,
            imageLink2:l5_2,
            calo:541,
            veg:false,
            vege:false,
            
        },
        {
            id:'6',
            label:'Tomato and hummus pocket sandwich + brussels sprout slaw (555 kcal)',
            value:'Tomato and hummus pocket sandwich + brussels sprout slaw (555 kcal)',
            imageLink1:l6_1,
            imageLink2:l6_2,
            calo:555,
            veg:true,
            vege:true,
            
        },
        {
            id:'7',
            label:'Nothing',
            value:'Nothing',
            imageLink1:s7_1,
            imageLink2:s7_1,
            calo:0,
            veg:true,
            vege:true,
            
        }
    ]))

    //radio buttons to select the Meal plan DINNER
    const radioButtonsDinner = useMemo(()=>([
        {
            id: '1',
            label:'Thai Basil Chicken + Brocccoli with hummus and sesame seeds (402 kcal)',
            value:'Thai Basil Chicken + Brocccoli with hummus and sesame seeds (402 kcal)',
            imageLink1:d1_1,
            imageLink2:d1_2,
            calo:402,
            veg:false,
            vege:false,
           
        },
        {
            id: '2',
            label:'Simple spicy garlic shrimp + Sour Cream and parsley mashed potatoes (448 kcal)',
            value:'Simple spicy garlic shrimp + Sour Cream and parsley mashed potatoes (448 kcal)',
            imageLink1:d2_1,
            imageLink2:d2_2,
            calo:448,
            veg:false,
            vege:true,
            
        },
        {
            id:'3',
            label:'BBQ Chicken salad + easy sautéed spinach (634 kcal)',
            value:'BBQ Chicken salad + easy sautéed spinach (634 kcal)',
            imageLink1:d3_1,
            imageLink2:d3_2,
            calo:634,
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
            calo:527,
            veg:true,
            vege:true,
        },
        {
            id:'5',
            label:'White bean and chicken Stir fry + green salad (730 kcal)',
            value:'White bean and chicken Stir fry + green salad (730 kcal)',
            imageLink1:d5_1,
            imageLink2:d5_2,
            calo:730,
            veg:false,
            vege:false,
            
            
        },
        {
            id:'6',
            label:'Portobello steaks with avocado chimichurri + kale Avocado salad (684 kcal)',
            value:'Portobello steaks with avocado chimichurri + kale Avocado salad (684 kcal)',
            imageLink1:d6_1,
            imageLink2:d6_2,
            calo:684,
            veg:true,
            vege:true,
            
            
        },
        {
            id:'7',
            label:'Nothing',
            value:'Nothing',
            imageLink1:s7_1,
            imageLink2:s7_1,
            calo:0,
            veg:true,
            vege:true,
            
        }
    ]))


//radio buttons to select the Meal plan SNACK
    const radioButtonsSnack = useMemo(()=>([
        {
            id: '1',
            label:'Peaches and almond butter on toast (198 kcal)',
            value:'Peaches and almond butter on toast (198 kcal)',
            imageLink1:s1_1,
            calo:198,
            veg:true,
            vege:true,
           
        },
        {
            id: '2',
            label:'Avocado lettuce wrap (194 kcal)',
            value:'Avocado lettuce wrap (194 kcal)',
            imageLink1:s2_1,
            calo:194,
            veg:true,
            vege:true,
            
        },
        {
            id:'3',
            label:'Fruit & Vegetable Plate with Almonds & Cheese (270 kcal)',
            value:'Fruit & Vegetable Plate with Almonds & Cheese (270) kcal)',
            imageLink1:s3_1,
            calo:270,
            veg:false,
            vege:true,
        },
        {
            id:'4',
            label:'Raw Cauliflower tabouli (219 kcal)',
            value:'Raw Cauliflower tabouli (219 kcal)',
            imageLink1:s4_1,
            calo:219,
            veg:true,
            vege:true,
        },
        {
            id:'5',
            label:'Light peanut butter mousse (301 kcal)',
            value:'Light peanut butter mousse (301) kcal)',
            imageLink1:s5_1,
            calo:301,
            veg:false,
            vege:true,
           
            
        },
        {
            id:'6',
            label:'Hummus avocado toast (306 kcal)',
            value:'Hummus avocado toast (306 kcal)',
            imageLink1:s6_1,
            calo:306,
            veg:true,
            vege:true,
            
            
        },
        {
            id:'7',
            label:'Nothing',
            value:'Nothing',
            imageLink1:s7_1,
            calo:0,
            veg:true,
            vege:true,
            
        }
    ]))

    
// CONSTANT TO COUNT THE CALORI WITH EACH CHOICE
    const [bcalo,setBcalo]=useState(0);
    const [lcalo,setLcalo]=useState(0);
    const [dcalo,setDcalo]=useState(0);
    const [scalo,setScalo]=useState(0);

    const lesCals = [bcalo,lcalo,dcalo,scalo];

    const [restKcal,setRestKcal]=useState(kcal)

    




// To only show the components in each sections (breakfast,lunch...)

    const [showComponent1, setShowComponent1] = useState(true);
    const [showComponent2, setShowComponent2] = useState(false);
    const [showComponent3, setShowComponent3] = useState(false);
    const [showComponent4, setShowComponent4] = useState(false);

    return(
        <ScrollView>
           
   
            
            <View style={styles.container}>
            

{/* equivalent to a button, to show the breakfast */}
            <TouchableOpacity
                    style={styles.topHeading}
                    onPress={() =>{if (showComponent1==false){
                        setShowComponent1(true)
                        setShowComponent2(false)
                        setShowComponent3(false)
                        setShowComponent4(false)
                        }else {setShowComponent1(false)}
                        }}>
                    <Text > Options for Breakfast </Text>
            </TouchableOpacity>
            
            {/* A .map to show all the choice for breakfast and 3 ifs, for different diet  */}

                {showComponent1 && (<View style={styles.radioImagecolumn}>
                    {diet==='Regular' ?<View> {radioButtonsBreakfast.map((item)=> {

                // to defined which meals containes to much calories
                        const isDisabled = restKcal < item.calo; 
                       return(
                        <Pressable
                        key={item.value}
                        onPress={()=>{setBreakfast(item.value);
                                        setBcalo(item.calo);
                                        setRestKcal(lesCals.reduce(
                                        (accumulator, currentValue) => accumulator - currentValue,
                                        kcal,
                        ));
                        }}
                        style={[styles.imageMain,isDisabled && { opacity: 0.5 },]}>
                            {breakfast===item.value? <View style={styles.imageFontMain}>
                            <FontAwesome name='check-circle' size={20} color="white"/>
                            </View>:null}
                            <View style={{flexDirection:'row'}}>
                                <Image source={item.imageLink1} style={styles.ImageStyle}/>
                                <Image source={item.imageLink2} style={styles.ImageStyle}/>
                            </View>
                            
                            <Text style={styles.titles}>{item.value}{`\n`}{`\n`}</Text>
                            
                        </Pressable>
                    )
                    })}</View>:null}


                    {diet==='Vegan' ?<View> {radioButtonsBreakfast.filter(item=>{item.veg}).map((item)=> {
                        const isDisabled = restKcal < item.calo;
                       return(
                        <Pressable
                        key={item.value}
                        onPress={()=>{setBreakfast(item.value);
                            setBcalo(item.calo);
                            setRestKcal(lesCals.reduce(
                                (accumulator, currentValue) => accumulator - currentValue,
                                kcal,
                              ));
                        }}
                        style={[styles.imageMain,isDisabled && { opacity: 0.5 },]}>
                            {breakfast===item.value? <View style={styles.imageFontMain}>
                                <FontAwesome name='check-circle' size={20} color="white"/>
                            </View>:null}
                            <View style={{flexDirection:'row'}}>
                                <Image source={item.imageLink1} style={styles.ImageStyle}/>
                                <Image source={item.imageLink2} style={styles.ImageStyle}/>
                            </View>
                            
                            <Text style={styles.titles}>{item.value}{`\n`}{`\n`}</Text>
                            
                        </Pressable>
                    )
                    })}</View>:null}


                    {diet==='Vegetarian' ?<View> {radioButtonsBreakfast.filter(item=>item.vege).map((item)=> {
                        const isDisabled = restKcal < item.calo;
                       return(
                        <Pressable
                        key={item.value}
                        onPress={()=>{setBreakfast(item.value);
                            setBcalo(item.calo);
                            setRestKcal(lesCals.reduce(
                                (accumulator, currentValue) => accumulator - currentValue,
                                kcal,
                              ));
                        }}
                        style={[styles.imageMain,isDisabled && { opacity: 0.5 },]}>
                            {breakfast===item.value? <View style={styles.imageFontMain}>
                                <FontAwesome name='check-circle' size={20} color="white"/>
                            </View>:null}
                            <View style={{flexDirection:'row'}}>
                                <Image source={item.imageLink1} style={styles.ImageStyle}/>
                                <Image source={item.imageLink2} style={styles.ImageStyle}/>
                            </View>
                            
                            <Text style={styles.titles}>{item.value}{`\n`}{`\n`}</Text>
                            
                        </Pressable>
                    )
                    })}</View>:null}
                  
                </View>)}
            
               
                
            </View>

            {/* Same as previously but for LUNCH */}

            <View style={styles.container}>
            <TouchableOpacity
                    style={styles.topHeading}
                    onPress={() =>{if (showComponent2==false){
                        setShowComponent1(false)
                        setShowComponent2(true)
                        setShowComponent3(false)
                        setShowComponent4(false)
                        }else {setShowComponent2(false)}
                        }}>
                    <Text >Options for Lunch </Text>
            </TouchableOpacity>
            
            {showComponent2 && (<View style={styles.radioImagecolumn}>
                {diet==='Regular' ?<View> {radioButtonsLunch.map((item)=> {
                    const isDisabled = restKcal < item.calo;
                        return(
                            <Pressable
                            key={item.value}
                            onPress={()=>{setLunch(item.value);
                                setLcalo(item.calo);
                                setRestKcal(lesCals.reduce(
                                    (accumulator, currentValue) => accumulator - currentValue,
                                    kcal,
                                  ));
                            }}
                            style={[styles.imageMain,isDisabled && { opacity: 0.5 },]}>
                                {lunch===item.value? <View style={styles.imageFontMain}>
                                    <FontAwesome name='check-circle' size={20} color="white"/>
                                </View>:null}
                                <View style={{flexDirection:'row'}}>
                                    <Image source={item.imageLink1} style={styles.ImageStyle}/>
                                    <Image source={item.imageLink2} style={styles.ImageStyle}/>
                                </View>
                                
                                <Text style={styles.titles}>{item.value}{`\n`}{`\n`}</Text>
                                
                            </Pressable>
                            
                        )
                    })}</View>:null}


                {diet==='Vegan' ?<View> {radioButtonsLunch.filter(item=>item.veg).filter(item=>item.calo<restKcal).map((item)=> {
                    const isDisabled = restKcal < item.calo;
                        return(
                            <Pressable
                            key={item.value}
                            onPress={()=>{setLunch(item.value);
                                setLcalo(item.calo);
                                setRestKcal(lesCals.reduce(
                                    (accumulator, currentValue) => accumulator - currentValue,
                                    kcal,
                                  ));
                            }}
                            style={[styles.imageMain,isDisabled && { opacity: 0.5 },]}>
                                {lunch===item.value? <View style={styles.imageFontMain}>
                                    <FontAwesome name='check-circle' size={20} color="white"/>
                                </View>:null}
                                <View style={{flexDirection:'row'}}>
                                    <Image source={item.imageLink1} style={styles.ImageStyle}/>
                                    <Image source={item.imageLink2} style={styles.ImageStyle}/>
                                </View>
                                
                                <Text style={styles.titles}>{item.value}{`\n`}{`\n`}</Text>
                                
                            </Pressable>
                            
                        )
                    })}</View>:null}


                    {diet==='Vegetarian' ?<View> {radioButtonsLunch.filter(item=>item.vege).map((item)=> {
                        const isDisabled = restKcal < item.calo;
                        return(
                            <Pressable
                            key={item.value}
                            onPress={()=>{setLunch(item.value);
                                setLcalo(item.calo);
                                setRestKcal(lesCals.reduce(
                                    (accumulator, currentValue) => accumulator - currentValue,
                                    kcal,
                                  ));
                            }}
                            style={[styles.imageMain,isDisabled && { opacity: 0.5 },]}>
                                {lunch===item.value? <View style={styles.imageFontMain}>
                                    <FontAwesome name='check-circle' size={20} color="white"/>
                                </View>:null}
                                <View style={{flexDirection:'row'}}>
                                    <Image source={item.imageLink1} style={styles.ImageStyle}/>
                                    <Image source={item.imageLink2} style={styles.ImageStyle}/>
                                </View>
                                
                                <Text style={styles.titles}>{item.value}{`\n`}{`\n`}</Text>
                                
                            </Pressable>
                            
                        )
                    })}</View>:null}
                    
                </View>)}
                
                
            </View>

            {/* Same as previously but for DINNER */}

            <View style={styles.container}>
            <TouchableOpacity
                    style={styles.topHeading}
                    onPress={() =>{if (showComponent3==false){
                        setShowComponent1(false)
                        setShowComponent2(false)
                        setShowComponent3(true)
                        setShowComponent4(false)
                        }else {setShowComponent3(false)}
                        }}
                >
                    <Text > Options for Dinner </Text>
            </TouchableOpacity>


            {showComponent3 && (<View style={styles.radioImagecolumn}>
                {diet==='Regular' ?<View> {radioButtonsDinner.map((item)=> {
                    const isDisabled = restKcal < item.calo;
                        return(
                            <Pressable
                            key={item.value}
                            onPress={()=>{setDinner(item.value);
                                setDcalo(item.calo);
                                setRestKcal(lesCals.reduce(
                                    (accumulator, currentValue) => accumulator - currentValue,
                                    kcal,
                                  ));
                            }}
                            style={[styles.imageMain,isDisabled && { opacity: 0.5 },]}>
                                {dinner===item.value? <View style={styles.imageFontMain}>
                                    <FontAwesome name='check-circle' size={20} color="white"/>
                                </View>:null}
                                <View style={{flexDirection:'row'}}>
                                    <Image source={item.imageLink1} style={styles.ImageStyle}/>
                                    <Image source={item.imageLink2} style={styles.ImageStyle}/>
                                </View>
                                
                                <Text style={styles.titles}>{item.value}{`\n`}{`\n`}</Text>
                                
                            </Pressable>
                            
                        )
                    })}</View>:null}


                    {diet==='Vegan' ?<View> {radioButtonsDinner.filter(item=>item.veg).map((item)=> {
                        const isDisabled = restKcal < item.calo;
                        return(
                            <Pressable
                            key={item.value}
                            onPress={()=>{setDinner(item.value);
                                setDcalo(item.calo);
                                setRestKcal(lesCals.reduce(
                                    (accumulator, currentValue) => accumulator - currentValue,
                                    kcal,
                                  ));
                            }}
                            style={[styles.imageMain,isDisabled && { opacity: 0.5 },]}>
                                {dinner===item.value? <View style={styles.imageFontMain}>
                                    <FontAwesome name='check-circle' size={20} color="white"/>
                                </View>:null}
                                <View style={{flexDirection:'row'}}>
                                    <Image source={item.imageLink1} style={styles.ImageStyle}/>
                                    <Image source={item.imageLink2} style={styles.ImageStyle}/>
                                </View>
                                
                                <Text style={styles.titles}>{item.value}{`\n`}{`\n`}</Text>
                                
                            </Pressable>
                            
                        )
                    })}</View>:null}


                    {diet==='Vegetarian' ?<View> {radioButtonsDinner.filter(item=>item.vege).map((item)=> {
                        const isDisabled = restKcal < item.calo;
                        return(
                            <Pressable
                            key={item.value}
                            onPress={()=>{setDinner(item.value);
                                setDcalo(item.calo);
                                setRestKcal(lesCals.reduce(
                                    (accumulator, currentValue) => accumulator - currentValue,
                                    kcal,
                                  ));
                            }}
                            style={[styles.imageMain,isDisabled && { opacity: 0.5 },]}>
                                {dinner===item.value? <View style={styles.imageFontMain}>
                                    <FontAwesome name='check-circle' size={20} color="white"/>
                                </View>:null}
                                <View style={{flexDirection:'row'}}>
                                    <Image source={item.imageLink1} style={styles.ImageStyle}/>
                                    <Image source={item.imageLink2} style={styles.ImageStyle}/>
                                </View>
                                
                                <Text style={styles.titles}>{item.value}{`\n`}{`\n`}</Text>
                                
                            </Pressable>
                            
                        )
                    })}</View>:null}
                    
                </View>)}
                
                
            </View>


            {/* Same as previously but for SNACK */}

            <View style={styles.container}>
               
                <TouchableOpacity
                        style={styles.topHeading}
                        onPress={() =>{if (showComponent4==false){
                            setShowComponent1(false)
                            setShowComponent2(false)
                            setShowComponent3(false)
                            setShowComponent4(true)
                            }else {setShowComponent4(false)}
                            }}>
                        <Text > Options for Snack  </Text>
                </TouchableOpacity>


                {showComponent4 && ( <View style={styles.radioImagecolumn}>
                    {diet==='Regular' ?<View> {radioButtonsSnack.map((item)=> {
                        const isDisabled = restKcal < item.calo;
                      return(
                        <Pressable
                        key={item.value}
                        onPress={()=>{setSnack(item.value);
                            setScalo(item.calo);
                            setRestKcal(lesCals.reduce(
                                (accumulator, currentValue) => accumulator - currentValue,
                                kcal,
                              ));
                        }}
                        style={[styles.imageMain,isDisabled && { opacity: 0.5 },]}>
                            {snack===item.value? <View style={styles.imageFontMain}>
                                <FontAwesome name='check-circle' size={20} color="white"/>
                            </View>:null}
                            <View style={{flexDirection:'row'}}>
                                <Image source={item.imageLink1} style={styles.ImageStyle}/>
                            </View>
                            
                            <Text style={styles.titles}>{item.value}{`\n`}{`\n`}</Text>
                            
                        </Pressable>
                        
                    )
                    })}</View>:null}


                    {diet==='Vegan' ?<View> {radioButtonsSnack.filter(item=>item.veg).map((item)=> {
                        const isDisabled = restKcal < item.calo;
                      return(
                        <Pressable
                        key={item.value}
                        onPress={()=>{setSnack(item.value);
                            setScalo(item.calo);
                            setRestKcal(lesCals.reduce(
                                (accumulator, currentValue) => accumulator - currentValue,
                                kcal,
                              ));
                        }}
                        style={[styles.imageMain,isDisabled && { opacity: 0.5 },]}>
                            {snack===item.value? <View style={styles.imageFontMain}>
                                <FontAwesome name='check-circle' size={20} color="white"/>
                            </View>:null}
                            <View style={{flexDirection:'row'}}>
                                <Image source={item.imageLink1} style={styles.ImageStyle}/>
                            </View>
                            
                            <Text style={styles.titles}>{item.value}{`\n`}{`\n`}</Text>
                            
                        </Pressable>
                        
                    )
                    })}</View>:null}
                    

                    {diet === 'Vegetarian' ? (
                    <View>
                        {radioButtonsSnack.filter(item => item.vege).map((item) => {
                            
                            const isDisabled = restKcal < item.calo;
                            return (
                            <Pressable
                                key={item.value}
                                onPress={() => { setSnack(item.value);
                                setScalo(item.calo);
                                setRestKcal(
                                    lesCals.reduce(
                                    (accumulator, currentValue) => accumulator - currentValue,
                                    kcal,
                                    )
                                );
                                }}
                                style={[styles.imageMain,isDisabled && { opacity: 0.5 },]}
                            >
                                {snack === item.value ? (
                                <View style={styles.imageFontMain}>
                                    <FontAwesome name="check-circle" size={20} color="white" />
                                </View>
                                ) : null}
                                <View style={{ flexDirection: 'row' }}>
                                <Image source={item.imageLink1} style={styles.ImageStyle} />
                                </View>
                                <Text style={styles.titles}>{item.value}{`\n`}{`\n`}</Text>
                            </Pressable>
                            );
                        })}
                    </View>
                    ) : null}

                        
                    </View>)}
                    <Text/>
                    <Text style={styles.text}>{restKcal}</Text>
               
            </View>
            
            
            {/* Button to navigate to the "Meal" page */}
            <Button
                title="See my meal plan"
                color="pink"
                onPress={() => navigation.navigate('Home', { breakfast,lunch,dinner,snack,diet})}
            />
            
            <Text></Text>
            {/*<Button title="Submit" onPress={() => {navigation.navigate('BodyInfos',
                {name:{name}})
            }}/>*/}
        </ScrollView>
    );
}



// CSS

const styles=StyleSheet.create({
    container :{
        flex : 1,
        backgroundColor: 'plum',
        alignItems: 'center',
        justifyContent:'center',
        textAlign: 'center',
        //marginBottom: 10,
        

        
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
    topHeading:{
        fontSize : 20,
        fontWeight:'bold',
        backgroundColor:'white',
        padding:10,
        borderRadius:15,
        margin:2,
       
    },
    text:{
        backgroundColor:'white',
        color:"plum",
        fontSize : 30,
        borderRadius: 5,
    },
    imageMain:{
        width:350,
        backgroundColor:"white",
        borderWidth:2,
       margin:2,
        padding:10,
        borderRadius:20,
    },
    radioImagecolumn:{
        flexDirection:'column',
        marginVertical:20,
    },
    ImageStyle:{
        width:150,
        height:100,
        borderRadius:5,
        alignSelf:'center',
        margin:3,
    },
    titles:{
        fontSize:15,
        margin:15,
    },
    imageFontMain:{
        position : 'absolute',
        width:40,
        height:40,
        zIndex:1,
        justifyContent:'right',
        alignItems:'center',
        bottom:15,
        right: 25,
        borderRadius:50,
        backgroundColor:'plum',
    }
});
