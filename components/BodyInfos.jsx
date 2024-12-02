import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, ScrollView, Button } from 'react-native';
import { getDatabase, ref, get } from 'firebase/database';

export default function BodyInfos({ navigation, route }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { userId } = route.params;  // User ID passed from the previous screen

  useEffect(() => {
    const fetchUserData = async () => {
      const db = getDatabase();
      const userRef = ref(db, `users/${userId}`);  // Dynamic user reference

      try {
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          setUserData(snapshot.val());  // Update the state with the user data
        } else {
          console.log('No data found for this user:', userId);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]); // Re-fetch user data if userId changes

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  const { name, surname, age, gender, height, weight, diet, sport, breakfast, lunch,dinner,snack} = userData;

  // BMI Calculation
  const calculateBMI = (weight, height) => {
    if (weight && height) {
      const heightInMeters = height / 100;
      return (weight / (heightInMeters * heightInMeters)).toFixed(2);
    }
    return 0;
  };

  // BMR Calculation
  const calculateBMR = (age, weight, height, gender) => {
    if (age && weight && height) {
      if (gender === '2') {  // Male
        return (66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age)).toFixed(2);
      } else if (gender === '1') {  // Female
        return (655 + (9.563 * weight) + (1.850 * height) - (4.676 * age)).toFixed(2);
      }
    }
    return 0;
  };

  // Kcal Calculation based on activity level
  const calculateKcal = (bmr, sport) => {
    if (sport === 'none') {
      return ((bmr * 1.2).toFixed(2));  // Little to no exercise
    } else if (sport === 'light') {
      return ((bmr * 1.375).toFixed(2));  // Light exercise
    } else if (sport === 'moderate') {
      return ((bmr * 1.55).toFixed(2));  // Moderate exercise (3-5 days)
    } else if (sport === 'active') {
      return ((bmr * 1.725).toFixed(2));  // Very active exercise (6-7 days)
    } else if (sport === 'extra') {
      return ((bmr * 1.9).toFixed(2));  // Extra active exercise
    }
    return 0;
  };

  const bmi = calculateBMI(weight, height);
  const bmr = calculateBMR(age, weight, height, gender);
  const kcal = calculateKcal(bmr, sport);

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.header}>Body Information</Text>
          <Text style={styles.text}>Name:</Text>
          <Text style={styles.info}>{name} {surname}</Text>
          <Text style={styles.text}>Age:</Text>
          <Text style={styles.info}>{age}</Text>
          <Text style={styles.text}>Gender:</Text>
          <Text style={styles.info}>{gender === '2' ? 'Male' : 'Female'}</Text>
          <Text style={styles.text}>Height:</Text>
          <Text style={styles.info}>{height} cm</Text>
          <Text style={styles.text}>Weight:</Text>
          <Text style={styles.info}>{weight} kg</Text>
          <Text style={styles.text}>BMI:</Text>
          <Text style={styles.info}>{bmi}</Text>
          <Text style={styles.text}>BMR:</Text>
          <Text style={styles.info}>{bmr}</Text>
          <Text style={styles.text}>Diet:</Text>
          <Text style={styles.info}>{diet}</Text>
          <Text style={styles.text}>Total Daily Calorie Requirement:</Text>
          <Text style={styles.info}>{kcal} kcal</Text>

          <Button
            color="plum"
            title="Go to Home "
            onPress={() => {navigation.navigate('Home', {
              name, surname, age, gender, height, weight, diet, kcal,breakfast,lunch,dinner,snack
            });
          }}
          />
          <Text> </Text>
          <Button
            color="plum"
            title="Choose my meal plan"
            onPress={() => {
              navigation.navigate('Meal', {
                name, surname, age, gender, height, weight, diet, kcal,breakfast,lunch,dinner,snack
              });
            }}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'plum',
    paddingBottom: 100,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  box: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
    shadowColor: "#700070",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  info: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'plum',
    borderRadius: 20,
    paddingLeft: 10,
  },
});
