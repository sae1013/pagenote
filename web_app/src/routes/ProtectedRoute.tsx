import React from "react";
import { useAtom } from "jotai";
import { Navigate } from "react-router-dom";
import { userAtom } from "../atoms/userAtom";

interface ProtectedRoute {
  children: React.ReactNode;
}
function ProtectedRoute({ children }: ProtectedRoute) {
  const [user] = useAtom(userAtom);

  // eslint-disable-next-line no-extra-boolean-cast
  return !!user ? children : <Navigate to="login"></Navigate>;
}

export default ProtectedRoute;
