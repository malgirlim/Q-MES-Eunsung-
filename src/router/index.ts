import { createRouter, createWebHistory } from "vue-router";

import SideMenu from "../layouts/SideMenu/SideMenu.vue";
import SimpleMenu from "../layouts/SimpleMenu/SimpleMenu.vue";
import TopMenu from "../layouts/TopMenu/TopMenu.vue";
import Main from "../pages/Main.vue";
import Login from "../pages/Login.vue";

import MasterUser from "../pages/master/MasterUser.vue";
import MasterFacility from "../pages/master/MasterFacility.vue";
import MasterProduct from "../pages/master/MasterProduct.vue";
import MasterProcess from "../pages/master/MasterProcess.vue";
import MasterBOM from "../pages/master/MasterBOM.vue";
import MasterCodeNonOP from "../pages/master/MasterCodeNonOP.vue";
import MasterCodeBad from "../pages/master/MasterCodeBad.vue";
import MasterClient from "../pages/master/MasterClient.vue";
import MasterCodeCommon from "../pages/master/MasterCodeCommon.vue";
import MasterQuality from "../pages/master/MasterQuality.vue";
import MasterStock from "../pages/master/MasterStock.vue";
import MasterRecipe from "../pages/master/MasterRecipe.vue";
import OrderAdd from "../pages/order/OrderAdd.vue";
import OrderCurrent from "../pages/order/OrderCurrent.vue";
import OrderForecast from "../pages/order/OrderForecast.vue";
import OrderNotify from "../pages/order/OrderNotify.vue";
import ProductionPlanAdd from "../pages/production/ProductionPlanAdd.vue";
import ProductionPlanSearch from "../pages/production/ProductionPlanSearch.vue";
import ProductionTaskAdd from "../pages/production/ProductionTaskAdd.vue";
import ProductionTaskSearch from "../pages/production/ProductionTaskSearch.vue";
import ProductionTaskReport from "../pages/production/ProductionTaskReport.vue";
import ProcessLOT from "../pages/process/ProcessLOT.vue";
import ProcessChecker from "../pages/process/ProcessChecker.vue";
import ProcessPlate from "../pages/process/ProcessPlate.vue";
import ProcessPrinter1 from "../pages/process/ProcessPrinter1.vue";
import ProcessPrinter2 from "../pages/process/ProcessPrinter2.vue";
import ProcessPrinter3 from "../pages/process/ProcessPrinter3.vue";
import ProcessPrinter4 from "../pages/process/ProcessPrinter4.vue";
import ProcessPrinter5 from "../pages/process/ProcessPrinter5.vue";
import ProcessPrinter6 from "../pages/process/ProcessPrinter6.vue";
import ProcessPrinter7 from "../pages/process/ProcessPrinter7.vue";
import ProcessPrinter8 from "../pages/process/ProcessPrinter8.vue";
import QualityStandard from "../pages/quality/QualityStandard.vue";
import QualityReport from "../pages/quality/QualityReport.vue";
import QualityIncoming from "../pages/quality/QualityIncoming.vue";
import QualityProcess from "../pages/quality/QualityProcess.vue";
import QualityShipment from "../pages/quality/QualityShipment.vue";
import QualityLOT from "../pages/quality/QualityLOT.vue";
import MonitoringPlan from "../pages/monitoring/MonitoringPlan.vue";
import MonitoringClientPlan from "../pages/monitoring/MonitoringClientPlan.vue";
import MonitoringStockRaw from "../pages/monitoring/MonitoringStockRaw.vue";
import MonitoringStockFinish from "../pages/monitoring/MonitoringStockFinish.vue";
import MonitoringKPI from "../pages/monitoring/MonitoringKPI.vue";
import StockReceiveRaw from "../pages/stock/StockReceiveRaw.vue";
import StockUseRaw from "../pages/stock/StockUseRaw.vue";
import StockWIPRaw from "../pages/stock/StockWIPRaw.vue";
import StockWIPHalf from "../pages/stock/StockWIPHalf.vue";
import StockReceiveFinish from "../pages/stock/StockReceiveFinish.vue";
import StockUseFinish from "../pages/stock/StockUseFinish.vue";
import Card from "../components/Common/Main/KPICard.vue";

import axios from "axios";

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/",
    component: TopMenu,

    children: [
      {
        path: "/",
        name: "top-menu-main",
        component: Main,
      },
      {
        path: "master/user",
        name: "top-menu-master-user",
        meta: {
          pagename: "????????? ??????",
          category: "????????????",
        },
        component: MasterUser,
      },
      {
        path: "master/facility",
        name: "top-menu-master-facility",
        meta: {
          pagename: "?????? ??????",
          category: "????????????",
        },
        component: MasterFacility,
      },
      {
        path: "master/product",
        name: "top-menu-master-product",
        meta: {
          pagename: "?????? ??????",
          category: "????????????",
        },
        component: MasterProduct,
      },
      {
        path: "master/process",
        name: "top-menu-master-process",
        meta: {
          pagename: "?????? ??????",
          category: "????????????",
        },
        component: MasterProcess,
      },
      {
        path: "master/bom",
        name: "top-menu-master-bom",
        meta: {
          pagename: "BOM ??????",
          category: "????????????",
        },
        component: MasterBOM,
      },
      {
        path: "master/code-nonop",
        name: "top-menu-master-code-nonop",
        meta: {
          pagename: "??????????????? ??????",
          category: "????????????",
        },
        component: MasterCodeNonOP,
      },
      {
        path: "master/code-bad",
        name: "top-menu-master-code-bad",
        meta: {
          pagename: "??????????????????",
          category: "????????????",
        },
        component: MasterCodeBad,
      },
      {
        path: "master/client",
        name: "top-menu-master-client",
        meta: {
          pagename: "???????????????",
          category: "????????????",
        },
        component: MasterClient,
      },
      {
        path: "master/code-common",
        name: "top-menu-master-code-common",
        meta: {
          pagename: "??????????????????",
          category: "????????????",
        },
        component: MasterCodeCommon,
      },
      {
        path: "master/quality",
        name: "top-menu-master-quality",
        meta: {
          pagename: "??????????????????",
          category: "????????????",
        },
        component: MasterQuality,
      },
      {
        path: "master/stock",
        name: "top-menu-master-stock",
        meta: {
          pagename: "??????????????????",
          category: "????????????",
        },
        component: MasterStock,
      },
      {
        path: "master/recipe",
        name: "top-menu-master-recipe",
        meta: {
          pagename: "???????????????",
          category: "????????????",
        },
        component: MasterRecipe,
      },
      {
        path: "order/add",
        name: "top-menu-order-add",
        meta: {
          pagename: "????????????",
          category: "????????????",
        },
        component: OrderAdd,
      },
      {
        path: "order/current",
        name: "top-menu-order-current",
        meta: {
          pagename: "??????????????????",
          category: "????????????",
        },
        component: OrderCurrent,
      },
      {
        path: "order/forecast",
        name: "top-menu-order-forecast",
        meta: {
          pagename: "??????????????????????????????",
          category: "????????????",
        },
        component: OrderForecast,
      },
      {
        path: "order/notify",
        name: "top-menu-order-notify",
        meta: {
          pagename: "????????????????????????",
          category: "????????????",
        },
        component: OrderNotify,
      },
      {
        path: "production/plan-add",
        name: "top-menu-production-plan-add",
        meta: {
          pagename: "??????????????????",
          category: " ????????????",
        },
        component: ProductionPlanAdd,
      },
      {
        path: "production/plan-search",
        name: "top-menu-production-plan-search",
        meta: {
          pagename: "??????????????????",
          category: " ????????????",
        },
        component: ProductionPlanSearch,
      },
      {
        path: "production/task-add",
        name: "top-menu-production-task-add",
        meta: {
          pagename: "??????????????????",
          category: " ????????????",
        },
        component: ProductionTaskAdd,
      },
      {
        path: "production/task-search",
        name: "top-menu-production-task-search",
        meta: {
          pagename: "??????????????????",
          category: " ????????????",
        },
        component: ProductionTaskSearch,
      },
      {
        path: "production/task-report",
        name: "top-menu-production-task-report",
        meta: {
          pagename: "??????????????????",
          category: " ????????????",
        },
        component: ProductionTaskReport,
      },
      {
        path: "process/lot",
        name: "top-menu-process-lot",
        meta: {
          pagename: "LOT??????(???????????????)",
          category: "????????????",
        },
        component: ProcessLOT,
      },
      {
        path: "process/checker",
        name: "top-menu-process-checker",
        meta: {
          pagename: "????????? ??????????????????",
          category: "????????????",
        },
        component: ProcessChecker,
      },
      {
        path: "process/plate",
        name: "top-menu-process-plate",
        meta: {
          pagename: "????????? ??????????????????",
          category: "????????????",
        },
        component: ProcessPlate,
      },
      {
        path: "process/printer1",
        name: "top-menu-process-printer1",
        meta: {
          pagename: "?????????1 ??????????????????",
          category: "????????????",
        },
        component: ProcessPrinter1,
      },
      {
        path: "process/printer2",
        name: "top-menu-process-printer2",
        meta: {
          pagename: "?????????2 ??????????????????",
          category: "????????????",
        },
        component: ProcessPrinter2,
      },
      {
        path: "process/printer3",
        name: "top-menu-process-printer3",
        meta: {
          pagename: "?????????3 ??????????????????",
          category: "????????????",
        },
        component: ProcessPrinter3,
      },
      {
        path: "process/printer4",
        name: "top-menu-process-printer4",
        meta: {
          pagename: "?????????4 ??????????????????",
          category: "????????????",
        },
        component: ProcessPrinter4,
      },
      {
        path: "process/printe5",
        name: "top-menu-process-printer5",
        meta: {
          pagename: "?????????5 ??????????????????",
          category: "????????????",
        },
        component: ProcessPrinter5,
      },
      {
        path: "process/printer6",
        name: "top-menu-process-printer6",
        meta: {
          pagename: "?????????6 ??????????????????",
          category: "????????????",
        },
        component: ProcessPrinter6,
      },
      {
        path: "process/printer7",
        name: "top-menu-process-printer7",
        meta: {
          pagename: "?????????7 ??????????????????",
          category: "????????????",
        },
        component: ProcessPrinter7,
      },
      {
        path: "process/printer8",
        name: "top-menu-process-printer8",
        meta: {
          pagename: "?????????8 ??????????????????",
          category: "????????????",
        },
        component: ProcessPrinter8,
      },
      {
        path: "quality/standard",
        name: "top-menu-quality-standard",
        meta: {
          pagename: "??????????????? ??????",
          category: "????????????",
        },
        component: QualityStandard,
      },
      {
        path: "quality/report",
        name: "top-menu-quality-report",
        meta: {
          pagename: "??????????????? ??????",
          category: "????????????",
        },
        component: QualityReport,
      },
      {
        path: "quality/incoming",
        name: "top-menu-quality-incoming",
        meta: {
          pagename: "??????????????????",
          category: "????????????",
        },
        component: QualityIncoming,
      },
      {
        path: "quality/process",
        name: "top-menu-quality-process",
        meta: {
          pagename: "??????????????????",
          category: "????????????",
        },
        component: QualityProcess,
      },
      {
        path: "quality/shipment",
        name: "top-menu-quality-shipment",
        meta: {
          pagename: "??????????????????",
          category: "????????????",
        },
        component: QualityShipment,
      },
      {
        path: "quality/lot",
        name: "top-menu-quality-lot",
        meta: {
          pagename: "LOT??????",
          category: "????????????",
        },
        component: QualityLOT,
      },
      {
        path: "monitoring/plan",
        name: "top-menu-monitoring-plan",
        meta: {
          pagename: "???????????? ????????????",
          category: "????????????",
        },
        component: MonitoringPlan,
      },
      {
        path: "monitoring/client-plan",
        name: "top-menu-monitoring-client-plan",
        meta: {
          pagename: "???????????? ????????????",
          category: "????????????",
        },
        component: MonitoringClientPlan,
      },
      {
        path: "monitoring/stock-raw",
        name: "top-menu-monitoring-stock-raw",
        meta: {
          pagename: "????????? ????????????",
          category: "????????????",
        },
        component: MonitoringStockRaw,
      },
      {
        path: "monitoring/stock-finish",
        name: "top-menu-monitoring-stock-finish",
        meta: {
          pagename: "????????? ????????????",
          category: "????????????",
        },
        component: MonitoringStockFinish,
      },
      {
        path: "monitoring/kpi",
        name: "top-menu-monitoring-kpi",
        meta: {
          pagename: "KPI?????? ??????",
          category: "????????????",
        },
        component: MonitoringKPI,
      },
      {
        path: "stock/receive-raw",
        name: "top-menu-stock-receive-raw",
        meta: {
          pagename: "???????????????",
          category: "????????????",
        },
        component: StockReceiveRaw,
      },
      {
        path: "stock/use-raw",
        name: "top-menu-stock-use-raw",
        meta: {
          pagename: "???????????????",
          category: "????????????",
        },
        component: StockUseRaw,
      },
      {
        path: "stock/wip-raw",
        name: "top-menu-stock-wip-raw",
        meta: {
          pagename: "???????????????",
          category: "????????????",
        },
        component: StockWIPRaw,
      },
      {
        path: "stock/wip-half",
        name: "top-menu-stock-wip-half",
        meta: {
          pagename: "???????????????",
          category: "????????????",
        },
        component: StockWIPHalf,
      },
      {
        path: "stock/receive-finish",
        name: "top-menu-stock-receive-finish",
        meta: {
          pagename: "???????????????",
          category: "????????????",
        },
        component: StockReceiveFinish,
      },
      {
        path: "stock/use-finish",
        name: "top-menu-stock-use-finish",
        meta: {
          pagename: "???????????????",
          category: "????????????",
        },
        component: StockUseFinish,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

export default router;
