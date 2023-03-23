import { Outlet } from "react-router-dom";
import { Sidenav } from "../components/Collaborator/";
import { GasStationProvider } from "../hooks/useGasStations";
import { TripsProvider } from "../hooks/useTrips";

export const ColaboratorLayout = () => {
  return (
    <TripsProvider>
      <GasStationProvider>
        <Sidenav>
          <Outlet />
        </Sidenav>
      </GasStationProvider>
    </TripsProvider>
  );
};
