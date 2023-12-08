import { writable } from "svelte/store";

export let currentPath = writable('');
export let windowWidth = writable(0);