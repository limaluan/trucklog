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
import { UserProvider } from "../hooks/useUsers";
import { RouteProvider } from "../hooks/useRoutes";

export const ColaboratorLayout = () => {
  const { token } = useContext(AuthContext);

  return token ? (
    <UserProvider>
      <TripsProvider>
        <TrucksProvider>
          <DriversProvider>
            <GasStationProvider>
              <RouteProvider>
                <Sidenav>
                  <Outlet />
                </Sidenav>
              </RouteProvider>
            </GasStationProvider>
          </DriversProvider>
        </TrucksProvider>
      </TripsProvider>
    </UserProvider>
  ) : (
    <Navigate to="/login" />
  );
};
