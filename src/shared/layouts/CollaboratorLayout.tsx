import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Sidenav } from "../components/User";
import {
  GasStationProvider,
  TripsProvider,
  TrucksProvider,
  DriversProvider,
} from "../hooks";

import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const ColaboratorLayout = () => {
  const { token } = useContext(AuthContext);

  return token ? (
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
  ) : (
    <Navigate to="/login" />
  );
};
