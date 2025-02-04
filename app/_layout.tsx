import { Stack } from "expo-router";
import HeaderBooking from "@/components/HeaderBooking";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerBackTitle: "",
      }}
    >
      {/* Cacher le header sur la page d'accueil */}
      <Stack.Screen 
        name="index" 
        options={{ headerShown: false }} 
      />

      {/* Afficher un header personnalisé sur Booking */}
      <Stack.Screen 
        name="Booking/Booking" 
        options={{ 
          header: () => <HeaderBooking /> 
        }} 
      />
    </Stack>
  );
}
