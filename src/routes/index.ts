import {lazy } from 'react';

const ECommerce = lazy(() => import('../pages/Dashboard/ECommerce'))
const OverView = lazy(() => import ("../pages/OverView/OverView"))
const ReceivePurchage = lazy(() => import("../pages/Receiving/ReceivePurchase"));
const ItemReceiptAndTransferOrder = lazy(() => import("../pages/Receiving/ItemReceiptAndTransferOrder"));
const UpdateInAndGenReports = lazy(() => import("../pages/Receiving/UpdateInAndGenReports"));
const CheckIn = lazy(() => import("../pages/CheckIn/CheckIn"));

const coreRoutes = [
  {
    path: '/overview',
    title: 'OverView',
    component: OverView,
  },
  {
    path: '/dashboard',
    title: 'dashboard',
    component: ECommerce,
  },
  {
    path: "/receiving/receivepurchage",
    title: "Receive Purchase",
    component: ReceivePurchage,
  },
  {
    path: "/receiving/itemreceipt",
    title: "Item Receipt & Transfer Order",
    component: ItemReceiptAndTransferOrder,
  },
  {
    path: "/receiving/updateandgenerate",
    title: "Update Inventory & Generate Reports",
    component: UpdateInAndGenReports,
  },
  {
    path: "/checkin",
    title: "Check-In",
    component: CheckIn,
  },

];

const routes = [...coreRoutes];
export default routes;
