<script setup lang="ts">
import _ from "lodash";
import Button from "../../../base-components/Button";
import Lucide from "../../../base-components/Lucide";
import { Menu } from "../../../base-components/Headless";
import Table from "../../../base-components/Table";
</script>

<template>
  <!-- BEGIN: Invoice -->
  <div
    class="overflow-hidden intro-y box mb-3"
    style="overflow-y: scroll; overflow-x: hidden; height: 770px"
  >
    <div id="OrderDoc">
      <div
        class="text-center border-b border-slate-200/60 dark:border-darkmode-400 sm:text-left"
      >
        <div class="px-5 py-10 sm:px-20 sm:py-20">
          <div class="text-3xl font-semibold text-primary">수주서</div>
          <div class="mt-2">수주일자 : 2023-03-08</div>
          <div class="mt-1">
            수주번호 : <span class="font-medium">1923195</span>
          </div>
        </div>
        <div class="flex flex-col px-5 pb-10 lg:flex-row sm:px-20 sm:pb-20">
          <div>
            <div class="text-base text-slate-500">거래처</div>
            <div class="mt-2 text-md font-medium text-primary">
              (주)큐이노텍 귀하
            </div>
            <div style="font-size: 12px">
              <div class="mt-1">
                충남 천안시 서북구 직산읍 4산단5길 28, 2층 (신갈리 248)
              </div>

              <div class="mt-1">Tel. 041-553-1569</div>
              <div class="mt-1">Fax. 041-553-1570</div>
              <div class="mt-1">qinnotek@gmail.com</div>
            </div>
          </div>
          <div class="mt-10 lg:text-right lg:mt-0 lg:ml-auto">
            <div class="text-base text-slate-500">발주자</div>

            <div class="mt-1">
              <table
                class="tg"
                style="undefined;table-layout: fixed; width: 344px"
              >
                <colgroup>
                  <col style="width: 71px" />
                  <col style="width: 101px" />
                  <col style="width: 71px" />
                  <col style="width: 101px" />
                </colgroup>
                <thead>
                  <tr>
                    <th class="tg-36r9">등록번호</th>
                    <th class="tg-5qt9" colspan="3">126-81-10319</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="tg-36r9">상호</td>
                    <td class="tg-5qt9">(주)은성프린터스</td>
                    <td class="tg-36r9">성명</td>
                    <td class="tg-5qt9">차준은</td>
                  </tr>
                  <tr>
                    <td class="tg-36r9">주소</td>
                    <td class="tg-5qt9" colspan="3">
                      경기도 이천시 이섭대천로1032번길 78 (율현동 91-1)
                    </td>
                  </tr>
                  <tr>
                    <td class="tg-36r9">업태</td>
                    <td class="tg-5qt9">제조</td>
                    <td class="tg-36r9">종목</td>
                    <td class="tg-5qt9">옵셋인쇄</td>
                  </tr>
                  <tr>
                    <td class="tg-36r9">전화번호</td>
                    <td class="tg-5qt9">031-636-4651</td>
                    <td class="tg-36r9">팩스</td>
                    <td class="tg-5qt9">031-636-4655</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="px-5 py-10 text-center text-lg">아래와 같이 수주합니다.</div>
      <div class="px-16">
        <div class="overflow-x-auto">
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th
                  class="border-b-2 dark:border-darkmode-400 whitespace-nowrap"
                >
                  품명/규격
                </Table.Th>
                <Table.Th
                  class="text-right border-b-2 dark:border-darkmode-400 whitespace-nowrap"
                >
                  수량
                </Table.Th>
                <Table.Th
                  class="text-right border-b-2 dark:border-darkmode-400 whitespace-nowrap"
                >
                  단가
                </Table.Th>
                <Table.Th
                  class="text-right border-b-2 dark:border-darkmode-400 whitespace-nowrap"
                >
                  합계
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td class="border-b dark:border-darkmode-400">
                  <div class="font-medium whitespace-nowrap">상품명1</div>
                  <div class="text-slate-500 text-sm mt-0.5 whitespace-nowrap">
                    상품상세설명1
                  </div>
                </Table.Td>
                <Table.Td
                  class="w-32 text-right border-b dark:border-darkmode-400"
                >
                  2
                </Table.Td>
                <Table.Td
                  class="w-32 text-right border-b dark:border-darkmode-400"
                >
                  34,000
                </Table.Td>
                <Table.Td
                  class="w-32 font-medium text-right border-b dark:border-darkmode-400"
                >
                  68,000
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td class="border-b dark:border-darkmode-400">
                  <div class="font-medium whitespace-nowrap">상품명2</div>
                  <div class="text-slate-500 text-sm mt-0.5 whitespace-nowrap">
                    상품상세설명2
                  </div>
                </Table.Td>
                <Table.Td
                  class="w-32 text-right border-b dark:border-darkmode-400"
                >
                  1
                </Table.Td>
                <Table.Td
                  class="w-32 text-right border-b dark:border-darkmode-400"
                >
                  25,000
                </Table.Td>
                <Table.Td
                  class="w-32 font-medium text-right border-b dark:border-darkmode-400"
                >
                  25,000
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td class="border-b dark:border-darkmode-400">
                  <div class="font-medium whitespace-nowrap">상품명3</div>
                  <div class="text-slate-500 text-sm mt-0.5 whitespace-nowrap">
                    상품상세설명3
                  </div>
                </Table.Td>
                <Table.Td
                  class="w-32 text-right border-b dark:border-darkmode-400"
                >
                  1
                </Table.Td>
                <Table.Td
                  class="w-32 text-right border-b dark:border-darkmode-400"
                >
                  25,000
                </Table.Td>
                <Table.Td
                  class="w-32 font-medium text-right border-b dark:border-darkmode-400"
                >
                  25,000
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <div class="font-medium whitespace-nowrap">상품명4</div>
                  <div class="text-slate-500 text-sm mt-0.5 whitespace-nowrap">
                    상품상세설명4
                  </div>
                </Table.Td>
                <Table.Td class="w-32 text-right">3</Table.Td>
                <Table.Td class="w-32 text-right">25,000</Table.Td>
                <Table.Td class="w-32 font-medium text-right">
                  75,000
                </Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </div>
      </div>
      <div
        class="flex flex-col-reverse px-5 py-5 pb-10 sm:px-20 sm:pb-20 sm:flex-row"
      >
        <div class="mt-0">
          <div class="mt-1">납기일자 : 2023-04-01</div>
          <div class="mt-1">유효일자 : 2023-03-10</div>
          <div class="mt-1">납품장소 : 사업장 창고</div>
          <div class="mt-1">비고 :</div>
        </div>
        <div class="text-center sm:text-right sm:ml-auto">
          <div class="text-base text-slate-500">총 합계</div>
          <div class="mt-2 text-xl font-medium text-primary">₩193,000</div>
          <div class="mt-1">※ VAT 포함</div>
        </div>
      </div>
    </div>
  </div>
  <!-- END: Invoice -->
</template>
<style type="text/css">
.tg {
  border-collapse: collapse;
  border-spacing: 0;
}
.tg td {
  border-color: black;
  border-style: solid;
  border-width: 1px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  overflow: hidden;
  padding: 3px 2px;
  word-break: normal;
}
.tg th {
  border-color: black;
  border-style: solid;
  border-width: 1px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: normal;
  overflow: hidden;
  padding: 3px 2px;
  word-break: normal;
}
.tg .tg-36r9 {
  font-size: 11px;
  text-align: center;
  vertical-align: center;
}
.tg .tg-5qt9 {
  font-size: 11px;
  text-align: center;
  vertical-align: center;
}
</style>
