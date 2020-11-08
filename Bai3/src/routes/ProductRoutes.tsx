import React, { lazy, Suspense } from 'react'
import AuthenticatedGuard from '../guards/AuthenticatedGuard'
const ProductList = lazy(
  () => import('../pages/Product/ProductList/ProductList')
)
// import ProductList from '../pages/Product/ProductList/ProductList'
import { Switch } from 'react-router-dom'
import { PATH } from '@/constants/paths'
import ProductItem from '@/pages/Product/ProductItem/ProductItem'

export default function ProductRoutes() {
  return (
    <Switch>
      <AuthenticatedGuard
        exact
        path={PATH.PRODUCT}
        component={() => (
          <Suspense fallback={<h1></h1>}>
            <ProductList />
          </Suspense>
        )}
      />
      <AuthenticatedGuard
        exact
        path={PATH.PRODUCT + '/:idProduct'}
        component={ProductItem}
      />
    </Switch>
  )
}
