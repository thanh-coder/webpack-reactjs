import React, { lazy, Suspense } from "react"
import AuthenticatedGuard from "src/guards/AuthenticatedGuard"
import { Switch } from "react-router-dom"
import { PATH } from "src/constants/paths"
const Home = lazy(() => import("src/pages/Home/Home"))
export default function HomeRoutes() {
  return (
    <Switch>
      <AuthenticatedGuard
        exact
        path={PATH.HOME}
        component={() => (
          <Suspense fallback={<h1>Loading</h1>}>
            <Home />
          </Suspense>
        )}
      />
    </Switch>
  )
}
