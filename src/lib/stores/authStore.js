import { writable } from "svelte/store";
import {getApi, postApi} from '../../service/api.js';
import { goto } from '$app/navigation';

// 로그인을 하게 되면 isSession에 session=값을 저장하고, 값이 일치하면 로그인 상태 유지 true
// isSession에 값이 없으면 로그인 상태 해제 false

const setAuth = () => {
    let initValues = {
        // isLogin: false,
    };

    const {subscribe, update} = writable({...initValues});

    const login = async (/** @type {any} */ loginForm) => {
        try {
            const options = {
                path: '/auth/login',
                data: loginForm
            }
            const result = await postApi(options);
            // update(data => ({ ...data,
            //     isLogin: "",
            // }) );
            // 로그인 성공 시 로그인 상태 isLogin: true, 세션 값 저장
            alert('로그인 되었습니다.');
            await goto('/');
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
            // update(data => ({ ...data,
            //     isLogin: "",
            // }) );
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
