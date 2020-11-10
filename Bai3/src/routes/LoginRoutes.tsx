import React from "react"
import { Route, Switch } from "react-router-dom"
import Login from "@/pages/Login/Login"
import { PATH } from "@/constants/paths"

export default function LoginRoutes() {
  return (
    <Switch>
      <Route path={PATH.LOGIN} component={Login} />
    </Switch>
  )
}
