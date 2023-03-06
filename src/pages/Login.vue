<script setup lang="ts">
import DarkModeSwitcher from "../components/DarkModeSwitcher";
import MainColorSwitcher from "../components/MainColorSwitcher";
import logoUrl from "../assets/images/logo.svg";
import illustrationUrl from "../assets/images/illustration.png";
import { FormInput, FormCheck } from "../base-components/Form";
import Button from "../base-components/Button";
import { ref } from "vue";
import axios from "axios";
import router from "../router";

import { useCookies } from "vue3-cookies";
import { useStore } from "vuex";
const { cookies } = useCookies();

const login_id = ref("");
const login_pw = ref("");

//@@ 로그인 처리
const login = async () => {
  try {
    await axios
      .post("/api/auth/login", {
        login_id: login_id.value,
        login_pw: login_pw.value,
      })
      .then((res) => {
        console.log(res);
        router.push({ path: "/" });
      })
      .catch((err) => {
        alert(err.response.data);
      });
  } catch (err: any) {
    alert(err);
  }
};
</script>

<template>
  <div
    :class="[
      '-m-3 sm:-mx-8 p-3 sm:px-8 relative h-screen lg:overflow-hidden bg-primary xl:bg-white dark:bg-darkmode-800 xl:dark:bg-darkmode-600',
      'before:hidden before:xl:block before:content-[\'\'] before:w-[57%] before:-mt-[28%] before:-mb-[16%] before:-ml-[13%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[-4.5deg] before:bg-success/20 before:rounded-[100%] before:dark:bg-darkmode-400',
      'after:hidden after:xl:block after:content-[\'\'] after:w-[57%] after:-mt-[20%] after:-mb-[13%] after:-ml-[13%] after:absolute after:inset-y-0 after:left-0 after:transform after:rotate-[-4.5deg] after:bg-success after:rounded-[100%] after:dark:bg-darkmode-700',
    ]"
  >
    <div class="text-right intro-y mt-5 mr-5 hidden xl:block">
      &copy;2023 QInnotek. All rights reserved.
    </div>
    <div class="container relative z-10 sm:px-10">
      <div class="block grid-cols-2 gap-4 xl:grid">
        <!-- BEGIN: Login Info -->
        <div class="flex-col hidden min-h-screen xl:flex">
          <a href="" class="flex items-center pt-5 -intro-x">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="w-6"
              :src="logoUrl"
            />
            <span class="ml-3 text-lg text-white"> Q-MES </span>
          </a>
          <div class="my-auto">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="w-2/3 -mt-16 -intro-x"
              :src="illustrationUrl"
            />
            <div
              class="mt-10 text-4xl font-medium leading-tight text-white -intro-x"
            >
              Welcome To Q-MES
            </div>
            <div
              class="mt-5 text-lg text-white -intro-x text-opacity-70 dark:text-slate-400"
            ></div>
          </div>
        </div>
        <!-- END: Login Info -->
        <!-- BEGIN: Login Form -->
        <div class="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
          <div
            class="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 dark:bg-darkmode-600 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto"
          >
            <h2
              class="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-left"
            >
              로그인
            </h2>
            <div
              class="mt-2 text-xl text-center intro-x text-slate-400 xl:hidden"
            >
              한국 나가노 재고관리 MES
            </div>
            <div class="mt-8 intro-x">
              <FormInput
                type="text"
                class="block px-4 py-3 intro-x login__input min-w-full xl:min-w-[350px]"
                v-model="login_id"
                placeholder="ID"
              />
              <FormInput
                type="password"
                class="block px-4 py-3 mt-4 intro-x login__input min-w-full xl:min-w-[350px]"
                v-model="login_pw"
                placeholder="Password"
              />
            </div>

            <div class="mt-5 text-center intro-x xl:mt-8 xl:text-left">
              <Button
                variant="primary"
                class="w-full px-4 py-3 align-top xl:w-32 xl:mr-3"
                @click="login()"
              >
                로그인
              </Button>
            </div>
            <div
              class="mt-10 text-center intro-x xl:mt-24 text-slate-600 dark:text-slate-500 xl:text-left"
            >
              사용자 등록 및 패스워드 분실 문의<br />
              담당자 : 홍길동 대리 (010-1234-1234)
            </div>
          </div>
        </div>
        <!-- END: Login Form -->
      </div>
    </div>
  </div>
</template>
