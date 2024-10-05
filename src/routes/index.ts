import { lazy } from 'react';

const ECommerce = lazy(() => import('../pages/Dashboard/ECommerce'))
const Track = lazy(() => import('../pages/Inventory/Track'));
const BarcodeScanning = lazy(() => import('../pages/Inventory/BarcodeScanning'));
const Order = lazy(() => import('../pages/Order'));
const Receving = lazy(() => import('../pages/Receving&Shipping/Receving'));
const Shipping = lazy(() => import('../pages/Receving&Shipping/Shipping'));
const Analytics = lazy(() => import('../pages/Reporting&Analytics/Analytics'));
const Reporting = lazy(() => import('../pages/Reporting&Analytics/Reporting'));
const Warehouse = lazy(() => import('../pages/Warehouse'));

const coreRoutes = [
  {
    path: '/dashboard/ecommerce',
    title: 'Ecommerce',
    component: ECommerce,
  },
  {
    path: '/inventory/track',
    title: 'Track',
    component: Track,
  },
  {
    path: '/inventory/barcode-scanning',
    title: 'Barcode Scanning',
    component: BarcodeScanning,
  },
  {
    path: '/order',
    title: 'Order',
    component: Order,
  },
  {
    path: '/receving&shipping/receving',
    title: 'Receving',
    component: Receving,
  },
  {
    path: '/receving&shipping/shipping',
    title: 'Shipping',
    component: Shipping,
  },
  {
    path: '/reporting&analytics/reporting',
    title: 'Reporting',
    component: Reporting,
  },
  {
    path: '/reporting&analytics/Analytics',
    title: 'Analytics',
    component: Analytics,
  },
  {
    path: '/warehouse',
    title: 'Warehouse',
    component: Warehouse,
  },
];

const routes = [...coreRoutes];
export default routes;
