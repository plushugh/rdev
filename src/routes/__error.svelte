<script context="module" lang="ts">
  export function load({ error, status }) {
    return {
      props: {
        status,
        message: error.message
      }
    };
  }
</script>

<script lang="ts">
  export let status: string;
  export let message: string;
</script>

<svelte:head>
  <title>{status} Error | Tree Studio</title>
</svelte:head>

<div class="flex flex-col w-full justify-center place-items-center mt-20">
  <h1 class="text-9xl font-display font-extrabold tracking-tighter">{status}</h1>
  <h2 class="text-4xl font-sans font-normal mt-4">{message}</h2>
  <a
    class="mt-4 h-12 px-3 py-2 rounded-md bg-white hover:scale-105 hover:shadow-sm transition-all duration-300 border-2 uppercase font-display btn select-none"
    href="/"
  >
    Go Back Home
  </a>
</div>

<style>
  .btn {
    line-height: 28px;
  }
</style>
