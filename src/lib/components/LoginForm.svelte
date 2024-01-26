<script>
    import {l} from '../../routes/i18n.js';
    import {auth, isLogin} from '$lib/stores/authStore.js';
    import Button from '$lib/components/Button.svelte';

    let username = '', password = '';

    const onLogin = async () => {
        if (username === "" || password === "") {
            alert("아이디와 비밀번호를 입력해 주세요.");
            return;
        } else if (username.trim() === "" || password.includes(" ")) {
            alert("아이디 및 비밀번호에 공백 값이 들어갈 수 없습니다.");
            return;
        }

        try {
            await auth.login( { login: { username, password } } );
            $isLogin = true; // 로그인 시 로그인 유지 설정
            username = '';
            password = '';
        } catch(err) {
            console.log(err)
        }
    }
</script>

<form class="bg-base-100 border rounded-3xl drop-shadow-xl">
    <div class="form-control m-4 w-60">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">
            <span class="label-text">{$l(`login.username`)}</span>
        </label>
        <input type="text" bind:value={username} placeholder={$l(`login.usernamePl`)} required autocomplete="username" class="input input-bordered px-1"/>
    </div>
    <div class="form-control m-4 w-60">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">
            <span class="label-text">{$l(`login.password`)}</span>
        </label>
        <input type="password" bind:value={password} placeholder={$l(`login.passwordPl`)} required autocomplete="current-password" class="input input-bordered px-1"/>
    </div>
    <div class="form-control m-4 mt-7">
        <!-- <button class="btn border-base-300" on:click={login}>{$l(`login.login`)}</button> -->
        <Button type="login" login={onLogin}>{$l(`login.login`)}</Button>
    </div>
</form>