import AsyncStorage from "@react-native-async-storage/async-storage";

export type UserAccount = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    };

export const saveUserAccount = async (account: UserAccount) => {
try {
    await AsyncStorage.setItem("userAccount", JSON.stringify(account));
    return true;
} catch (error) {
    console.log("Error saving account", error);
    return false;
}
};

export const getUserAccount = async (): Promise<UserAccount | null> => {
 try {
    const storedInfo = await AsyncStorage.getItem("userAccount");
    if (!storedInfo) return null;
    return JSON.parse(storedInfo);
} catch (error) {
    console.log("Error retrieving account", error);
    return null;
}
};

export const loginUser = async (email: string, password: string) => {
try {
    const account = await getUserAccount();
    if (!account) return false;
    if (account.email === email && account.password === password) {
    return true;
    }
} catch (error) {
    console.log("Login error", error);
    return false;
}
};

//this is just used to clear the AsyncStorage
export const logoutUser = async () => {
  try {
    await AsyncStorage.removeItem("userAccount");
  } catch (error) {
    console.log("Logout error", error);
  }
};
