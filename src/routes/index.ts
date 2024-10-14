import { lazy } from 'react';

const OverView = lazy(() => import('../pages/OverView/OverView'));
const Receipts = lazy(() => import('../pages/Operations/Transfers/Receipts'));
const ReceiptsDetail = lazy(
  () => import('../pages/Operations/Transfers/ReceiptsDetail'),
);
const NewReceipt = lazy(
  () => import('../pages/Operations/Transfers/NewReceipt'),
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
const Stock = lazy(() => import('../pages/Reporting/Stock'));
const MovesAnalysis = lazy(() => import('../pages/Reporting/MovesAnalysis'));
const MovesHistory = lazy(() => import('../pages/Reporting/MovesHistory'));
const Valuation = lazy(() => import('../pages/Reporting/Valuation'));

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
    path: '/operations/receipts/new',
    title: 'New Receipt',
    component: NewReceipt,
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
    path: '/reporting/stock',
    title: 'Stock',
    component: Stock,
  },
  {
    path: '/reporting/movesanalysis',
    title: 'Moves Analysis',
    component: MovesAnalysis,
  },
  {
    path: '/reporting/moveshistory',
    title: 'Moves History',
    component: MovesHistory,
  },
  {
    path: '/reporting/valuation',
    title: 'Valuation',
    component: Valuation,
  },
];

const routes = [...coreRoutes];
export default routes;
