import React, { lazy, Suspense } from "react"
import { Switch } from "react-router-dom"
import AuthenticatedGuard from "../guards/AuthenticatedGuard"
import { PATH } from "@/constants/paths"
import ProductItem from "@/pages/Product/ProductItem/ProductItem"
const ProductList = lazy(
  () => import("../pages/Product/ProductList/ProductList")
)
export default function ProductRoutes() {
  return (
    <Switch>
      <AuthenticatedGuard
        exact
        path={PATH.PRODUCT}
        component={() => (
          <Suspense fallback={<h1>loading...</h1>}>
            <ProductList />
          </Suspense>
        )}
      />
      <AuthenticatedGuard
        exact
        path={PATH.PRODUCT + "/:idProduct"}
        component={ProductItem}
      />
    </Switch>
  )
}
