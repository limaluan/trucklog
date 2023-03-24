import { Outlet } from "react-router-dom";
import { Sidenav } from "../components/Collaborator/";
import { GasStationProvider } from "../hooks/useGasStations";
import { TripsProvider } from "../hooks/useTrips";
import { TrucksProvider } from "../hooks/useTrucks";

export const ColaboratorLayout = () => {
  return (
    <TripsProvider>
      <TrucksProvider>
        <GasStationProvider>
          <Sidenav>
            <Outlet />
          </Sidenav>
        </GasStationProvider>
      </TrucksProvider>
    </TripsProvider>
  );
};
