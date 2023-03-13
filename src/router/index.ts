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
          pagename: "사용자 관리",
          category: "기준정보",
        },
        component: MasterUser,
      },
      {
        path: "master/facility",
        name: "top-menu-master-facility",
        meta: {
          pagename: "설비 관리",
          category: "기준정보",
        },
        component: MasterFacility,
      },
      {
        path: "master/product",
        name: "top-menu-master-product",
        meta: {
          pagename: "품목 관리",
          category: "기준정보",
        },
        component: MasterProduct,
      },
      {
        path: "master/process",
        name: "top-menu-master-process",
        meta: {
          pagename: "공정 관리",
          category: "기준정보",
        },
        component: MasterProcess,
      },
      {
        path: "master/bom",
        name: "top-menu-master-bom",
        meta: {
          pagename: "BOM 관리",
          category: "기준정보",
        },
        component: MasterBOM,
      },
      {
        path: "master/code-nonop",
        name: "top-menu-master-code-nonop",
        meta: {
          pagename: "비가동코드 관리",
          category: "기준정보",
        },
        component: MasterCodeNonOP,
      },
      {
        path: "master/code-bad",
        name: "top-menu-master-code-bad",
        meta: {
          pagename: "불량코드관리",
          category: "기준정보",
        },
        component: MasterCodeBad,
      },
      {
        path: "master/client",
        name: "top-menu-master-client",
        meta: {
          pagename: "거래처관리",
          category: "기준정보",
        },
        component: MasterClient,
      },
      {
        path: "master/code-common",
        name: "top-menu-master-code-common",
        meta: {
          pagename: "공통코드관리",
          category: "기준정보",
        },
        component: MasterCodeCommon,
      },
      {
        path: "master/quality",
        name: "top-menu-master-quality",
        meta: {
          pagename: "품질기준정보",
          category: "기준정보",
        },
        component: MasterQuality,
      },
      {
        path: "master/stock",
        name: "top-menu-master-stock",
        meta: {
          pagename: "재고기준정보",
          category: "기준정보",
        },
        component: MasterStock,
      },
      {
        path: "master/recipe",
        name: "top-menu-master-recipe",
        meta: {
          pagename: "레시피관리",
          category: "기준정보",
        },
        component: MasterRecipe,
      },
      {
        path: "order/add",
        name: "top-menu-order-add",
        meta: {
          pagename: "수주등록",
          category: "주문관리",
        },
        component: OrderAdd,
      },
      {
        path: "order/current",
        name: "top-menu-order-current",
        meta: {
          pagename: "수주현황조회",
          category: "주문관리",
        },
        component: OrderCurrent,
      },
      {
        path: "order/forecast",
        name: "top-menu-order-forecast",
        meta: {
          pagename: "수주대비납품도달예보",
          category: "주문관리",
        },
        component: OrderForecast,
      },
      {
        path: "order/notify",
        name: "top-menu-order-notify",
        meta: {
          pagename: "수주대비납품통보",
          category: "주문관리",
        },
        component: OrderNotify,
      },
      {
        path: "production/plan-add",
        name: "top-menu-production-plan-add",
        meta: {
          pagename: "생산계획등록",
          category: " 생산관리",
        },
        component: ProductionPlanAdd,
      },
      {
        path: "production/plan-search",
        name: "top-menu-production-plan-search",
        meta: {
          pagename: "생산계획조회",
          category: " 생산관리",
        },
        component: ProductionPlanSearch,
      },
      {
        path: "production/task-add",
        name: "top-menu-production-task-add",
        meta: {
          pagename: "작업지시등록",
          category: " 생산관리",
        },
        component: ProductionTaskAdd,
      },
      {
        path: "production/task-search",
        name: "top-menu-production-task-search",
        meta: {
          pagename: "작업지시조회",
          category: " 생산관리",
        },
        component: ProductionTaskSearch,
      },
      {
        path: "production/task-report",
        name: "top-menu-production-task-report",
        meta: {
          pagename: "작업일보작성",
          category: " 생산관리",
        },
        component: ProductionTaskReport,
      },
      {
        path: "process/lot",
        name: "top-menu-process-lot",
        meta: {
          pagename: "LOT구성(바코드생성)",
          category: "공정관리",
        },
        component: ProcessLOT,
      },
      {
        path: "process/checker",
        name: "top-menu-process-checker",
        meta: {
          pagename: "검사기 설비상태정보",
          category: "공정관리",
        },
        component: ProcessChecker,
      },
      {
        path: "process/plate",
        name: "top-menu-process-plate",
        meta: {
          pagename: "제판기 설비상태정보",
          category: "공정관리",
        },
        component: ProcessPlate,
      },
      {
        path: "process/printer1",
        name: "top-menu-process-printer1",
        meta: {
          pagename: "인쇄기1 설비상태정보",
          category: "공정관리",
        },
        component: ProcessPrinter1,
      },
      {
        path: "process/printer2",
        name: "top-menu-process-printer2",
        meta: {
          pagename: "인쇄기2 설비상태정보",
          category: "공정관리",
        },
        component: ProcessPrinter2,
      },
      {
        path: "process/printer3",
        name: "top-menu-process-printer3",
        meta: {
          pagename: "인쇄기3 설비상태정보",
          category: "공정관리",
        },
        component: ProcessPrinter3,
      },
      {
        path: "process/printer4",
        name: "top-menu-process-printer4",
        meta: {
          pagename: "인쇄기4 설비상태정보",
          category: "공정관리",
        },
        component: ProcessPrinter4,
      },
      {
        path: "process/printe5",
        name: "top-menu-process-printer5",
        meta: {
          pagename: "인쇄기5 설비상태정보",
          category: "공정관리",
        },
        component: ProcessPrinter5,
      },
      {
        path: "process/printer6",
        name: "top-menu-process-printer6",
        meta: {
          pagename: "인쇄기6 설비상태정보",
          category: "공정관리",
        },
        component: ProcessPrinter6,
      },
      {
        path: "process/printer7",
        name: "top-menu-process-printer7",
        meta: {
          pagename: "인쇄기7 설비상태정보",
          category: "공정관리",
        },
        component: ProcessPrinter7,
      },
      {
        path: "process/printer8",
        name: "top-menu-process-printer8",
        meta: {
          pagename: "인쇄기8 설비상태정보",
          category: "공정관리",
        },
        component: ProcessPrinter8,
      },
      {
        path: "quality/standard",
        name: "top-menu-quality-standard",
        meta: {
          pagename: "품질기준서 관리",
          category: "품질관리",
        },
        component: QualityStandard,
      },
      {
        path: "quality/report",
        name: "top-menu-quality-report",
        meta: {
          pagename: "검사성적서 관리",
          category: "품질관리",
        },
        component: QualityReport,
      },
      {
        path: "quality/incoming",
        name: "top-menu-quality-incoming",
        meta: {
          pagename: "수입검사관리",
          category: "품질관리",
        },
        component: QualityIncoming,
      },
      {
        path: "quality/process",
        name: "top-menu-quality-process",
        meta: {
          pagename: "공정검사관리",
          category: "품질관리",
        },
        component: QualityProcess,
      },
      {
        path: "quality/shipment",
        name: "top-menu-quality-shipment",
        meta: {
          pagename: "출하검사관리",
          category: "품질관리",
        },
        component: QualityShipment,
      },
      {
        path: "quality/lot",
        name: "top-menu-quality-lot",
        meta: {
          pagename: "LOT추적",
          category: "품질관리",
        },
        component: QualityLOT,
      },
      {
        path: "monitoring/plan",
        name: "top-menu-monitoring-plan",
        meta: {
          pagename: "계획대비 생산조회",
          category: "모니터링",
        },
        component: MonitoringPlan,
      },
      {
        path: "monitoring/client-plan",
        name: "top-menu-monitoring-client-plan",
        meta: {
          pagename: "거래처별 생산조회",
          category: "모니터링",
        },
        component: MonitoringClientPlan,
      },
      {
        path: "monitoring/stock-raw",
        name: "top-menu-monitoring-stock-raw",
        meta: {
          pagename: "원재료 재고현황",
          category: "모니터링",
        },
        component: MonitoringStockRaw,
      },
      {
        path: "monitoring/stock-finish",
        name: "top-menu-monitoring-stock-finish",
        meta: {
          pagename: "완제품 재고현황",
          category: "모니터링",
        },
        component: MonitoringStockFinish,
      },
      {
        path: "monitoring/kpi",
        name: "top-menu-monitoring-kpi",
        meta: {
          pagename: "KPI지수 현황",
          category: "모니터링",
        },
        component: MonitoringKPI,
      },
      {
        path: "stock/receive-raw",
        name: "top-menu-stock-receive-raw",
        meta: {
          pagename: "원재료입고",
          category: "재고관리",
        },
        component: StockReceiveRaw,
      },
      {
        path: "stock/use-raw",
        name: "top-menu-stock-use-raw",
        meta: {
          pagename: "원재료출고",
          category: "재고관리",
        },
        component: StockUseRaw,
      },
      {
        path: "stock/wip-raw",
        name: "top-menu-stock-wip-raw",
        meta: {
          pagename: "원재료재공",
          category: "재고관리",
        },
        component: StockWIPRaw,
      },
      {
        path: "stock/wip-half",
        name: "top-menu-stock-wip-half",
        meta: {
          pagename: "반제품재공",
          category: "재고관리",
        },
        component: StockWIPHalf,
      },
      {
        path: "stock/receive-finish",
        name: "top-menu-stock-receive-finish",
        meta: {
          pagename: "완제품입고",
          category: "재고관리",
        },
        component: StockReceiveFinish,
      },
      {
        path: "stock/use-finish",
        name: "top-menu-stock-use-finish",
        meta: {
          pagename: "완제품출고",
          category: "재고관리",
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
