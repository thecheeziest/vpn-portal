import { writable } from "svelte/store";

export let isLogin = writable(false); // 로그인 상태