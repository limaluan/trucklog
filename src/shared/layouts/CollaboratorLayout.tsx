import { Outlet } from "react-router-dom";
import { Sidenav } from "../components/Collaborator/";
import { TripsProvider } from "../hooks/useTrips";
import { DriversProvider } from "../hooks/useDrivers";

export const ColaboratorLayout = () => {
  return (
    <TripsProvider>
      <DriversProvider>
        <Sidenav>
          <Outlet />
        </Sidenav>
      </DriversProvider>
    </TripsProvider>
  );
};
