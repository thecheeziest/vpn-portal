import { writable } from "svelte/store";
import {getApi, postApi} from '../../service/api.js';
import { goto } from '$app/navigation';

const setAuth = () => {
    let initValues = {};

    const {subscribe} = writable({...initValues});

    const login = async (/** @type {any} */ loginForm) => {
        try {
            const options = {
                path: '/auth/login',
                data: loginForm
            }
            await postApi(options);
            alert('로그인 되었습니다.');
            await goto('/mypage');
        } catch (err) {
            alert('오류가 발생했습니다. 다시 시도해 주세요.')
        }
    }

    const logout = async () => {
        try {
            const options = {
                path: '/auth/logout',
            }
            await getApi(options);
            alert('로그아웃 되었습니다.');
            await goto('/');
        }
        catch(err) {
            alert('오류가 발생했습니다. 다시 시도해 주세요.')
        }
    }

    return {
        subscribe,
        login,
        logout,
    }
}

export const auth = setAuth(); // 로그인 인증 정보

export const isLogin = writable(false); // 로그인 상태
export const getSession = writable(''); // 쿠키 세션 추출