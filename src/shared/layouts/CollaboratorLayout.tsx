import { Outlet } from "react-router-dom";
import { Sidenav } from "../components/User";
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
