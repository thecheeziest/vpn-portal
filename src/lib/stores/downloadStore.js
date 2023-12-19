import { downloadClient } from "$lib/utils/data";
import { writable } from "svelte/store";

export const clientList = writable(downloadClient, set => set(downloadClient)); // 다운로드 클라이언트 리스트

let setClient = () => {
    let initValues = {
        forYourDevice: {},
        others: {}
    };
    
    const { subscribe, update, set } = writable({...initValues});

    // @ts-ignore
    const setDevice = (os) => {
        update(item => {
            let forYourDevice = downloadClient.filter(item => item.os === os ||
                os === 'Windows' ? item.os === 'MacOS' :
                os === 'MacOS' ? item.os === 'Windows' :
                os === 'iOS' ? item.os === 'Uubuntu' :
                os === 'Android' ? item.os === 'Uubuntu' :
                []);
            return {
                forYourDevice, 
                others: downloadClient.filter(item => item.os !== forYourDevice[0].os)
            }
        });
    }

    return {
        subscribe,
        setDevice
    }
}

export const client = setClient();
