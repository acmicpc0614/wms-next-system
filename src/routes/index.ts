import { lazy } from 'react';

const Track = lazy(() => import('../pages/Inventory/Track'));
const BarcodeScanning = lazy(() => import('../pages/Inventory/BarcodeScanning'));
const Order = lazy(() => import('../pages/Order'));
const Receving = lazy(() => import('../pages/Receving&Shipping/Receving'));
const Shipping = lazy(() => import('../pages/Receving&Shipping/Shipping'));
const Analytics = lazy(() => import('../pages/Reporting&Analytics/Analytics'));
const Reporting = lazy(() => import('../pages/Reporting&Analytics/Reporting'));

const coreRoutes = [
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
];

const routes = [...coreRoutes];
export default routes;
