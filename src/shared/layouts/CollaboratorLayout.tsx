import { Outlet } from "react-router-dom";
import { Sidenav } from "../components/Collaborator/";
import { TripsProvider } from "../hooks/useTrips";

export const ColaboratorLayout = () => {
  return (
    <TripsProvider>
      <Sidenav>
        <Outlet />
      </Sidenav>
    </TripsProvider>
  );
};
