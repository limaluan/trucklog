import { Outlet } from "react-router-dom";
import { Sidenav } from "../components/Collaborator/";
import {
  GasStationProvider,
  TripsProvider,
  TrucksProvider,
  DriversProvider,
} from "../hooks";

export const ColaboratorLayout = () => {
  return (
    <TripsProvider>
      <TrucksProvider>
        <DriversProvider>
          <GasStationProvider>
            <Sidenav>
              <Outlet />
            </Sidenav>
          </GasStationProvider>
        </DriversProvider>
      </TrucksProvider>
    </TripsProvider>
  );
};
