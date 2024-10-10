import { lazy } from 'react';

const ECommerce = lazy(() => import('../pages/Dashboard/ECommerce'));
const OverView = lazy(() => import('../pages/OverView/OverView'));
const ReceivePurchage = lazy(
  () => import('../pages/Receiving/ReceivePurchase'),
);
const ItemReceiptAndTransferOrder = lazy(
  () => import('../pages/Receiving/ItemReceiptAndTransferOrder'),
);
const UpdateInAndGenReports = lazy(
  () => import('../pages/Receiving/UpdateInAndGenReports'),
);
const CheckIn = lazy(() => import('../pages/CheckIn/CheckIn'));
const Receipts = lazy(() => import('../pages/Operations/Transfers/Receipts'));
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
    path: '/dashboard',
    title: 'dashboard',
    component: ECommerce,
  },
  {
    path: '/receiving/receivepurchage',
    title: 'Receive Purchase',
    component: ReceivePurchage,
  },
  {
    path: '/receiving/itemreceipt',
    title: 'Item Receipt & Transfer Order',
    component: ItemReceiptAndTransferOrder,
  },
  {
    path: '/receiving/updateandgenerate',
    title: 'Update Inventory & Generate Reports',
    component: UpdateInAndGenReports,
  },
  {
    path: '/checkin',
    title: 'Check-In',
    component: CheckIn,
  },
];

const routes = [...coreRoutes];
export default routes;
