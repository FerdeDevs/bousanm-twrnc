import AsyncStorage from '@react-native-async-storage/async-storage'

export const setItem = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log("Error storing value", error);
    }
}

export const getItem = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return values;
    } catch (error) {
        console.log("Error retrieve value", error);
    }
}

export const removeItem = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log("Error removing value", error);

    }
}