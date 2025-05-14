import React, { createContext, useContext, useState, ReactNode } from "react";

type Rider = {
  driver: string;
  carColor: string;
  carName: string;
  noOfSeats: number;
  price: string;
  departureTime?: string;
  departureDate?: string;
};
type UserAuth = {
  email?: string;
  name?: string;
  picture?: string;
};

type RideContextType = {
  selectedRide: Rider | null;
  setSelectedRide: (ride: Rider) => void;
};

type AuthContextType = {
  userAuthDetails: UserAuth | null;
  setUserAuthDetails: (auth: UserAuth) => void;
};

const RideContext = createContext<RideContextType | undefined>(undefined);
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const RideProvider = ({ children }: { children: ReactNode }) => {
  const [selectedRide, setSelectedRide] = useState<Rider | null>(null);

  return (
    <RideContext.Provider value={{ selectedRide, setSelectedRide }}>
      {children}
    </RideContext.Provider>
  );
};

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [userAuthDetails, setUserAuthDetails] = useState<UserAuth | null>(null);

//   return (
//     <AuthContext.Provider value={{ userAuthDetails, setUserAuthDetails }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

export const useRide = () => {
  const context = useContext(RideContext);
  if (!context) {
    throw new Error("useRide must be used within a RideProvider");
  }
  return context;
};

// export const useAuthUser = () => {
//   const context = useContext(RideContext);
//   if (!context) {
//     throw new Error("useRide must be used within a RideProvider");
//   }
//   return context;
// };