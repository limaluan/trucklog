import { Outlet } from "react-router-dom";
import { Sidenav } from "../components/Collaborator/";
import { TripsProvider } from "../hooks/useTrips";
import { TrucksProvider } from "../hooks/useTrucks";

export const ColaboratorLayout = () => {
  return (
    <TripsProvider>
      <TrucksProvider>
        <Sidenav>
          <Outlet />
        </Sidenav>
      </TrucksProvider>
    </TripsProvider>
  );
};
