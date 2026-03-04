import { StyleSheet, Text } from "react-native";

type Props = {
  message?: string;
};

export function FormErrorText({ message }: Props) {
  if (!message) return null;
  return <Text style={styles.text}>{message}</Text>;
}

const styles = StyleSheet.create({
  text: {
    marginTop: 6,
    color: "crimson",
    fontSize: 14,
  },
});