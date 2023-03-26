import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Sidenav } from "../components/User";
import {
  GasStationProvider,
  TripsProvider,
  TrucksProvider,
  DriversProvider,
} from "../hooks";

import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect } from "react";
import { UserProvider } from "../hooks/useLoginUser";

export const ColaboratorLayout = () => {
  const { token } = useContext(AuthContext);

  return token ? (
    <UserProvider>
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
    </UserProvider>
  ) : (
    <Navigate to="/login" />
  );
};
