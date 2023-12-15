// @ts-nocheck

import {writable, derived, get} from 'svelte/store';
import dictionary from './dictionary';
import { setLanguage } from '$lib/stores/layoutStore';

export const locale = writable('ENG');

setLanguage.subscribe(value => {
	// setLanguage 구독 = 스토어 값 변경될 때마다 locale 스토어 업데이트
	locale.set(value);
	// setLanguage 값으로 locale 스토어 업데이트
});

const localizedDictionary = derived(locale, $locale => dictionary[$locale])

export const l = derived(localizedDictionary, $localizedDictionary => {
	return (path) => getEntryReduce(path, $localizedDictionary)
})


function getEntryReduce(path, dictionary) {
	const keys = path.split('.')
	return keys.reduce((dict, key) => dict[key], dictionary)
}

function getEntryRecursive(path, dictionary) {
	if(typeof dictionary !== 'object') {
		return dictionary
	}else {
		const keys = path.split('.')
		const nextKey = keys[0]
		const remainingPath = keys.slice(1).join('.')
		const subDict = dictionary[nextKey]
		return getEntryRecursive(remainingPath, subDict)
	}
}