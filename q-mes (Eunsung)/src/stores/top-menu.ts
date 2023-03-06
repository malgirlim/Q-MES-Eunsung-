import { defineStore } from "pinia";
import { Icon } from "../base-components/Lucide/Lucide.vue";

export interface Menu {
  icon: Icon;
  title: string;
  pageName?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface TopMenuState {
  menu: Array<Menu>;
}

export const useTopMenuStore = defineStore("topMenu", {
  state: (): TopMenuState => ({
    menu: [
      {
        icon: "LayoutDashboard",
        pageName: "top-menu-main",
        title: "메인",
      },
      {
        icon: "Folders",
        pageName: "",
        title: "기준정보",
        subMenu: [
          {
            icon: "FileText",
            pageName: "top-menu-master-user",
            title: "사용자 관리",
          },
          {
            icon: "FileText",
            pageName: "top-menu-master-facility",
            title: "설비 관리",
          },
          {
            icon: "FileText",
            pageName: "top-menu-master-product",
            title: "품목 관리",
          },
          {
            icon: "FileText",
            pageName: "top-menu-master-process",
            title: "공정 관리",
          },
          {
            icon: "FileText",
            pageName: "top-menu-master-bom",
            title: "BOM관리",
          },
          {
            icon: "FileText",
            pageName: "top-menu-master-code-nonop",
            title: "비가동코드관리",
          },
          {
            icon: "FileText",
            pageName: "top-menu-master-code-bad",
            title: "불량코드관리",
          },
          {
            icon: "FileText",
            pageName: "top-menu-master-client",
            title: "거래처관리",
          },
          {
            icon: "FileText",
            pageName: "top-menu-master-code-common",
            title: "공통코드관리",
          },
          {
            icon: "FileText",
            pageName: "top-menu-master-quality",
            title: "품질기준정보",
          },
          {
            icon: "FileText",
            pageName: "top-menu-master-stock",
            title: "재고기준정보",
          },
          {
            icon: "FileText",
            pageName: "top-menu-master-recipe",
            title: "레시피관리",
          },
        ],
      },
      {
        icon: "Folders",
        pageName: "",
        title: "주문관리",
        subMenu: [
          {
            icon: "FileText",
            pageName: "top-menu-order-add",
            title: "수주등록",
          },
          {
            icon: "FileText",
            pageName: "top-menu-order-current",
            title: "수주현황조회",
          },
          {
            icon: "FileText",
            pageName: "top-menu-order-forecast",
            title: "수주대비납품도달예보",
          },
          {
            icon: "FileText",
            pageName: "top-menu-order-notify",
            title: "수주대비납품통보",
          },
        ],
      },
      {
        icon: "Folders",
        pageName: "",
        title: "생산관리",
        subMenu: [
          {
            icon: "FileText",
            pageName: "top-menu-production-plan-add",
            title: "생산계획등록",
          },
          {
            icon: "FileText",
            pageName: "top-menu-production-plan-search",
            title: "생산계획조회",
          },
          {
            icon: "FileText",
            pageName: "top-menu-production-task-add",
            title: "작업지시등록",
          },
          {
            icon: "FileText",
            pageName: "top-menu-production-task-search",
            title: "작업지시조회",
          },
          {
            icon: "FileText",
            pageName: "top-menu-production-task-report",
            title: "작업일보작성",
          },
        ],
      },
      {
        icon: "Folders",
        pageName: "",
        title: "공정관리",
        subMenu: [
          {
            icon: "FileText",
            pageName: "top-menu-process-lot",
            title: "LOT구성(바코드생성)",
          },
          {
            icon: "FileText",
            pageName: "top-menu-process-checker",
            title: "검사기 설비상태정보",
          },
          {
            icon: "FileText",
            pageName: "top-menu-process-plate",
            title: "제판기 설비상태정보",
          },
          {
            icon: "FileText",
            pageName: "top-menu-process-printer1",
            title: "인쇄기1 설비상태정보",
          },
          {
            icon: "FileText",
            pageName: "top-menu-process-printer2",
            title: "인쇄기2 설비상태정보",
          },
          {
            icon: "FileText",
            pageName: "top-menu-process-printer3",
            title: "인쇄기3 설비상태정보",
          },
          {
            icon: "FileText",
            pageName: "top-menu-process-printer4",
            title: "인쇄기4 설비상태정보",
          },
          {
            icon: "FileText",
            pageName: "top-menu-process-printer5",
            title: "인쇄기5 설비상태정보",
          },
          {
            icon: "FileText",
            pageName: "top-menu-process-printer6",
            title: "인쇄기6 설비상태정보",
          },
          {
            icon: "FileText",
            pageName: "top-menu-process-printer7",
            title: "인쇄기7 설비상태정보",
          },
          {
            icon: "FileText",
            pageName: "top-menu-process-printer8",
            title: "인쇄기8 설비상태정보",
          },
        ],
      },
      {
        icon: "Folders",
        pageName: "",
        title: "품질관리",
        subMenu: [
          {
            icon: "FileText",
            pageName: "top-menu-quality-standard",
            title: "품질기준서 관리",
          },
          {
            icon: "FileText",
            pageName: "top-menu-quality-report",
            title: "검사성적서 관리",
          },
          {
            icon: "FileText",
            pageName: "top-menu-quality-incoming",
            title: "수입검사관리",
          },
          {
            icon: "FileText",
            pageName: "top-menu-quality-process",
            title: "공정검사관리",
          },
          {
            icon: "FileText",
            pageName: "top-menu-quality-shipment",
            title: "출하검사관리",
          },
          {
            icon: "FileText",
            pageName: "top-menu-quality-lot",
            title: "LOT추적",
          },
        ],
      },
      {
        icon: "Folders",
        pageName: "",
        title: "모니터링",
        subMenu: [
          {
            icon: "FileText",
            pageName: "top-menu-monitoring-plan",
            title: "계획대비 생산조회",
          },
          {
            icon: "FileText",
            pageName: "top-menu-monitoring-client-plan",
            title: "거래처별 생산조회",
          },
          {
            icon: "FileText",
            pageName: "top-menu-monitoring-stock-raw",
            title: "원재료 재고현황",
          },
          {
            icon: "FileText",
            pageName: "top-menu-monitoring-stock-finish",
            title: "완제품 재고현황",
          },
          {
            icon: "FileText",
            pageName: "top-menu-monitoring-kpi",
            title: "KPI지수 현황",
          },
        ],
      },
      {
        icon: "Folders",
        pageName: "",
        title: "재고관리",
        subMenu: [
          {
            icon: "FileText",
            pageName: "top-menu-stock-receive-raw",
            title: "원재료입고",
          },
          {
            icon: "FileText",
            pageName: "top-menu-stock-use-raw",
            title: "원재료출고",
          },
          {
            icon: "FileText",
            pageName: "top-menu-stock-wip-raw",
            title: "원재료재공",
          },
          {
            icon: "FileText",
            pageName: "top-menu-stock-wip-half",
            title: "반제품재공",
          },
          {
            icon: "FileText",
            pageName: "top-menu-stock-receive-finish",
            title: "완제품입고",
          },
          {
            icon: "FileText",
            pageName: "top-menu-stock-use-finish",
            title: "완제품출고",
          },
        ],
      },
    ],
  }),
});
