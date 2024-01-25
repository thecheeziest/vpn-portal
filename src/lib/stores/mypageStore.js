import { writable } from "svelte/store";
import {patchApi} from '../../service/api.js';
import {goto} from '$app/navigation';

export let pwEdit = writable(false); // 비밀번호 변경 활성화

export const changePw = async (/** @type {any} */ passward) => {
    try {
        const options = {
            path: '/user/change',
            data: passward
        }
        const result = await patchApi(options);
        console.log(result);
        alert('비밀번호가 변경되었습니다.');
        await goto('/');
    } catch (err) {
        alert('오류가 발생했습니다. 다시 시도해 주세요.')
    }
}