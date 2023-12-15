import { writable } from "svelte/store";

export let currentPath = writable(''); // 현재 패스 값
export let windowWidth = writable(0); // 현재 윈도우창 너비
export let setLanguage = writable('ENG'); // 현재 설정 언어
export let platformName = writable(''); // 현재 플랫폼명

const setPlatform = () => { // 플랫폼 인식
    let initValues = '';
    const { subscribe, update, set } = writable(initValues);

    const getPlatform = () => {
        const userAgent = navigator.userAgent;
        
        if (/Android/i.test(userAgent)) { // 모바일 환경 확인
            // 안드로이드
            set('Android');
        } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
            // iOS
            set('iOS')

        } else { // 모바일이 아닌 경우
          if (/Macintosh/i.test(userAgent)) { // 운영 체제 확인
              // macOS
                set('MacOS')

            } else if (/Windows/i.test(userAgent)) {
              // Windows
                set('Windows')

            } else if (/Linux/i.test(userAgent)) {
              // Linux
                set('Linux')
            } else {
                set('PC')
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