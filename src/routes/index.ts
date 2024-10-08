import {lazy } from 'react';

const ECommerce = lazy(() => import('../pages/Dashboard/ECommerce'))
// const Track = lazy(() => import('../pages/Inventory/Track'));
// const BarcodeScanning = lazy(() => import('../pages/Inventory/BarcodeScanning'));
// const Order = lazy(() => import('../pages/Order/OrderAction'));
// const Receving = lazy(() => import('../pages/Receving&Shipping/Receving'));
// const Shipping = lazy(() => import('../pages/Receving&Shipping/Shipping'));
// const Analytics = lazy(() => import('../pages/Reporting&Analytics/Analytics'));
// const Reporting = lazy(() => import('../pages/Reporting&Analytics/Reporting'));
// const Warehouse = lazy(() => import('../pages/Warehouse'));
const ReceivePurchage = lazy(() => import("../pages/Receiving/ReceivePurchase"));
const ItemReceiptAndTransferOrder = lazy(() => import("../pages/Receiving/ItemReceiptAndTransferOrder"));
const UpdateInAndGenReports = lazy(() => import("../pages/Receiving/UpdateInAndGenReports"));
const CheckIn = lazy(() => import("../pages/CheckIn/CheckIn"));
const RepReverse = lazy(() => import("../pages/Replenishment/RepReverse"));
const RepTransfer = lazy(() => import("../pages/Replenishment/RepTransfer"));
const ProductsManagement = lazy(() => import("../pages/ProductsManagement/ProductsManagement"));
const OrderAction = lazy(() => import("../pages/Order/OrderAction"));
const PrintLabel = lazy(() => import("../pages/Order/PrintLable"));
const CycleCount = lazy(() => import("../pages/CycleCount/CycleCount"));
const ReturnsManagement = lazy(() => import("../pages/ReturnsManagement/ReturnsManagement"));

const coreRoutes = [
  {
    path: '/dashboard/ecommerce',
    title: 'Ecommerce',
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
  {
    path: "/replenishment/transfer",
    title: "Transfer",
    component: RepTransfer,
  },
  {
    path: "/replenishment/reverse",
    title: "Reverse",
    component: RepReverse,
  },
  {
    path: "/productsManagement",
    title: "Products Management",
    component: ProductsManagement,
  },
  {
    path: "/order/action",
    title: "Pick, Pack, Ship",
    component: OrderAction,
  },
  {
    path: "/order/print",
    title: "Print Label",
    component: PrintLabel,
  },
  {
    path: "/cyclecount",
    title: "Cycle Count",
    component: CycleCount,
  },
  {
    path: "/returnsManagement",
    title: "Returns Management",
    component: ReturnsManagement,
  },


];

const routes = [...coreRoutes];
export default routes;
