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

type RideContextType = {
  selectedRide: Rider | null;
  setSelectedRide: (ride: Rider) => void;
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

export const useRide = () => {
  const context = useContext(RideContext);
  if (!context) {
    throw new Error("useRide must be used within a RideProvider");
  }
  return context;
};