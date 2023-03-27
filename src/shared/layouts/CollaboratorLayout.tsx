import { Navigate, Outlet } from "react-router-dom";
import { Sidenav } from "../components/User";
import {
  GasStationProvider,
  TripsProvider,
  TrucksProvider,
  RolesProvider,
} from "../hooks";

import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { UserProvider } from "../hooks/useUsers";
import { RouteProvider } from "../hooks/useRoutes";

export const ColaboratorLayout = () => {
  const { token } = useContext(AuthContext);

  return token ? (
    <UserProvider>
      <RolesProvider>
        <TripsProvider>
          <TrucksProvider>
            <GasStationProvider>
              <RouteProvider>
                <Sidenav>
                  <Outlet />
                </Sidenav>
              </RouteProvider>
            </GasStationProvider>
          </TrucksProvider>
        </TripsProvider>
      </RolesProvider>
    </UserProvider>
  ) : (
    <Navigate to="/login" />
  );
};
