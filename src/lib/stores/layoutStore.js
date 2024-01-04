import { writable } from "svelte/store";

export let currentPath = writable(''); // 현재 패스 값
export let windowWidth = writable(0); // 현재 윈도우창 너비
export let setLanguage = writable('ENG'); // 현재 설정 언어
export let platformName = writable(''); // 현재 플랫폼명
export let darkmode = writable(false); // 다크 모드
export let setOS = writable(false); // 가이드 OS 맞춤 설정 OFF

const setPlatform = () => { // 플랫폼 인식
    let initValues = '';
    const { subscribe, update, set } = writable(initValues);

    const getPlatform = () => {
        const userAgent = navigator.userAgent;
        const isMac = navigator.userAgent.match(/iPhone|iPad|iPod/i) === null && navigator.maxTouchPoints === 0 ? true : false;
        // MacOS === 0 (true), iPad === 5 (false) / iPad Air, Pro === 0

            if (/Android/i.test(userAgent)) { // 안드로이드
                set('Android');
            } else if (/iPhone|iPad|iPod/i.test(userAgent)) { // 아이폰 & 아이패드 미니
                set('iOS');
            } else { // 모바일이 아니면
                if (/Windows/i.test(userAgent)) { // 윈도우
                    set('Windows');
                } else if (/Linux/i.test(userAgent)) { // 리눅스
                    set('Linux')
                } else if (/Macintosh/i.test(userAgent)) { // 맥 OS
                    set('MacOS'); // 아이패드 Air, Pro도 MacOS로 설정됨
                } else {
                    set('윈도우 혹은 맥 혹은 리눅스 아님');
                }
            }
        // 브라우저 확인

        if (/Chrome/i.test(userAgent)) {
            update(value =>
                value + '/Chrome');
        } else if (/Safari/i.test(userAgent)) {
            update(value =>
                value + '/Safari')
        } else if (/Firefox/i.test(userAgent)) {
            update(value =>
                value + '/Firefox')
            // 여기에 다른 브라우저를 확인하는 코드를 추가할 수 있습니다.
        }
    }

    return {
        subscribe,
        getPlatform
    }
}

export const platform = setPlatform();