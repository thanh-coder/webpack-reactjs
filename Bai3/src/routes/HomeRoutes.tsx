import React, { lazy, Suspense } from 'react'
import AuthenticatedGuard from '@/guards/AuthenticatedGuard'
const Home = lazy(() => import('@/pages/Home/Home'))
import { Switch } from 'react-router-dom'
import { PATH } from '@/constants/paths'

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
