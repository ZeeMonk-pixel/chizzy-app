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
type User = {
  id: string;
  name: string | null;
  email: string;
  photo: string | null;
  familyName: string | null;
  givenName: string | null;
};
type AuthData = {
  idToken: string | null;
  user: User | null;
};
type UserData = any;
type Token = any;

type RideContextType = {
  selectedRide: Rider | null;
  setSelectedRide: (ride: Rider) => void;
};

type AuthContextType = {
  authData?: AuthData | null;
  setAuthData: (data: AuthData) => void;
};

type UserContextType = {
  userData?: UserData | null;
  setUserData: (data: UserData) => void;
};
type TokenContextType = {
  token?: Token | null;
  setToken: (data: Token) => void;
};

const RideContext = createContext<RideContextType | undefined>(undefined);

export const RideProvider = ({ children }: { children: ReactNode }) => {
  const [selectedRide, setSelectedRide] = useState<Rider | null>(null);

  return (
    <RideContext.Provider value={{ selectedRide, setSelectedRide }}>
      {children}
    </RideContext.Provider>
  );
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authData, setAuthData] = useState<AuthData | null>(null);

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};


const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};


const TokenContext = createContext<TokenContextType | undefined>(undefined);

export const TokenProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<Token | null>(null);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useRide = () => {
  const context = useContext(RideContext);
  if (!context) {
    throw new Error("useRide must be used within a RideProvider");
  }
  return context;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserData must be used within an AuthProvider");
  }
  return context;
};
export const useToken = (): TokenContextType => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("useToken must be used within an AuthProvider");
  }
  return context;
};
