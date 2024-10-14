import { lazy } from 'react';

const ECommerce = lazy(() => import('../pages/Dashboard/ECommerce'));
const OverView = lazy(() => import('../pages/OverView/OverView'));
const CheckIn = lazy(() => import('../pages/CheckIn/CheckIn'));
const Receipts = lazy(() => import('../pages/Operations/Transfers/Receipts'));
const ReceiptsDetail = lazy(
  () => import('../pages/Operations/Transfers/ReceiptsDetail'),
);
const Deliveries = lazy(
  () => import('../pages/Operations/Transfers/Deliveries'),
);
const Manufacturings = lazy(
  () => import('../pages/Operations/Transfers/Manufacturings'),
);
const PhysicalInventory = lazy(
  () => import('../pages/Operations/Adjustments/PhysicalInventory'),
);
const Scrap = lazy(() => import('../pages/Operations/Adjustments/Scrap'));
const Products = lazy(() => import('../pages/Products/Products'));
const NewProduct = lazy(() => import ('../pages/Products/NewProduct'));
const ProductVariants = lazy(() => import('../pages/Products/ProductVariants'));

const coreRoutes = [
  {
    path: '/overview',
    title: 'OverView',
    component: OverView,
  },
  {
    path: '/operations/receipts',
    title: 'Receipts',
    component: Receipts,
  },
  {
    path: '/operations/receipts/detail/:id',
    title: 'Receipts Detail',
    component: ReceiptsDetail,
  },
  {
    path: '/operations/deliveries',
    title: 'Deliveries',
    component: Deliveries,
  },
  {
    path: '/operations/manufacturings',
    title: 'Manufacturings',
    component: Manufacturings,
  },
  {
    path: '/operations/physicalinventory',
    title: 'physical Inventory',
    component: PhysicalInventory,
  },
  {
    path: '/operations/scrap',
    title: 'Scrap',
    component: Scrap,
  },
  {
    path: '/products/products',
    title: 'Products',
    component: Products,
  },
  {
    path: '/products/products/newproduct',
    title: 'New Product',
    component: NewProduct,
  },
  {
    path: '/products/productvariants',
    title: 'Product Variants',
    component: ProductVariants,
  },
  {
    path: '/dashboard',
    title: 'dashboard',
    component: ECommerce,
  },
  {
    path: '/checkin',
    title: 'Check-In',
    component: CheckIn,
  },
];

const routes = [...coreRoutes];
export default routes;
