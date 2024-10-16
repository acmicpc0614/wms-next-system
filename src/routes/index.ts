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
const NewProduct = lazy(() => import('../pages/Products/NewProduct'));
const ProductVariants = lazy(() => import('../pages/Products/ProductVariants'));
const Stock = lazy(() => import('../pages/Reporting/Stock'));
const NewStock = lazy(() => import('../pages/Reporting/NewStock'));
const MovesAnalysis = lazy(() => import('../pages/Reporting/MovesAnalysis'));
const MovesHistory = lazy(() => import('../pages/Reporting/MovesHistory'));
const Valuation = lazy(() => import('../pages/Reporting/Valuation'));
const Profile = lazy(() => import('../pages/Account/Profile'));
const Settings = lazy(() => import('../pages/Configuration/Settings'));
const Warehouses = lazy(() => import('../pages/Configuration/Warehouses'));
const OperationsTypes = lazy(
  () => import('../pages/Configuration/OperationsTypes'),
);
const ProductCategories = lazy(
  () => import('../pages/Configuration/ProductCategories'),
);
const Attributes = lazy(() => import('../pages/Configuration/Attributes'));
const DeliveryMethods = lazy(
  () => import('../pages/Configuration/DeliveryMethods'),
);

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
    path: '/reporting/stock/newstock',
    title: 'New Stock',
    component: NewStock,
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
  {
    path: '/configuration/warehouses',
    title: 'Warehouses',
    component: Warehouses,
  },
  {
    path: '/configuration/operationstypes',
    title: 'Operatons Types',
    component: OperationsTypes,
  },
  {
    path: '/configuration/productcategories',
    title: 'Product Categories',
    component: ProductCategories,
  },
  {
    path: '/configuration/attributes',
    title: 'Attribues',
    component: Attributes,
  },

  {
    path: '/configuration/deliverymethods',
    title: 'Delivery Methods',
    component: DeliveryMethods,
  },
  {
    path: '/configuration/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/profile',
    title: 'My Profile',
    component: Profile,
  },
];

const routes = [...coreRoutes];
export default routes;
