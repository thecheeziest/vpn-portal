<script>
  import { onMount } from "svelte";
	import { page } from '$app/stores';
  import { currentPath } from '$lib/stores/layoutStore';
  import ShadowWall from "$lib/images/ShadowWall.png";
  import { goto } from "$app/navigation";

    onMount(() => {
        $currentPath = $page.url.pathname;
    });
</script>

<section class="">
    <div class="hero h-screen bg-base-200">
      <div class="hero-content flex-col">
        <div class="text-center">
          <h1 class="text-5xl font-bold"><img src={ShadowWall} alt="ShadowWall"></h1>
          <p class="py-5 text-gray-500">VPN User Portal</p>
        </div>
        <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form class="card-body">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Account</span>
                  </label>
                  <input type="email" placeholder="Enter your VPN account" class="input input-bordered" required />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="Enter password for your account" class="input input-bordered" required />
                </div>
                <div class="form-control mt-6">
                  <button class="btn" on:click={() => goto('/')}>Login</button>
                </div>
              </form>
            </div>
        </div>
      </div>
</section>