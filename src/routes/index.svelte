<script lang="ts">
  import treeVisibleStore from '$lib/stores/treeVisibleStore';
  import { inview } from 'svelte-inview';
  let inviewOpts = {};
</script>

<div
  class="w-full flex justify-center mt-10 select-none skew-y-3"
  use:inview={inviewOpts}
  on:change={(event) => {
    const { inView } = event['detail'];
    treeVisibleStore.set(inView);
  }}
>
  <img class="imgsize" src="/icon.svg" alt="Tree Studio Logo" />
</div>

<h1
  class="ml-8 select-none text-center h1size font-display font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from to animate-bg skew-y-3 saturate-200 bg-center"
>
  Plan.<br />
  Shoot.<br />
  Edit.
</h1>

<div class="mt-8 flex flex-row place-items-center justify-center skew-y-3">
  <a
    class="h-12 px-3 py-2 rounded-md bg-white hover:scale-105 hover:shadow-sm transition-all duration-300 border-2 uppercase font-display btn select-none"
    href="https://space.bilibili.com/350952551"
  >
    Watch Videos
  </a>
  <a
    class="ml-3 h-12 px-3 py-2 rounded-md bg-blue-800 text-white hover:scale-105 hover:shadow-sm transition-all duration-300 border-2 uppercase font-display btn select-none"
    href="/about"
  >
    About
  </a>
</div>

<section class="mt-10 mb-10 flex flex-row flex-wrap w-full place-items-center justify-center">
  <div
    class="m-3 w-96 rounded border-2 flex flex-col place-items-center justify-center p-5 hover:shadow-md hover:skew-x-1 transition-all duration-300"
  >
    <h1 class="text-4xl font-display font-extrabold">Plan the video</h1>
    <p class="font-sans text-base mt-4 mx-2">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book.
    </p>
  </div>
  <div
    class="m-3 w-96 rounded border-2 flex flex-col place-items-center justify-center p-5 hover:shadow-md hover:skew-x-1 transition-all duration-300"
  >
    <h1 class="text-4xl font-display font-extrabold">Shoot the video</h1>
    <p class="font-sans text-base mt-4 mx-2">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book.
    </p>
  </div>
  <div
    class="m-3 w-96 rounded border-2 flex flex-col place-items-center justify-center p-5 hover:shadow-md hover:skew-x-1 transition-all duration-300"
  >
    <h1 class="text-4xl font-display font-extrabold">Edit the video</h1>
    <p class="font-sans text-base mt-4 mx-2">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book.
    </p>
  </div>
</section>

<style>
  @keyframes animate-bg {
    0% {
      background-position: 0%;
    }
    50% {
      background-position: 100%;
    }
    100% {
      background-position: 0%;
    }
  }
  .from {
    --tw-gradient-from: #3494e6;
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(52, 148, 230, 0));
  }
  .to {
    --tw-gradient-to: #ec6ead;
  }
  .animate-bg {
    background-size: 200%;
    background-repeat: repeat;
    animation: 6s animate-bg infinite;
  }
  .h1size {
    line-height: 0.95;
    font-size: 14vw;
  }
  .imgsize {
    width: 20vw;
    margin-bottom: -3vw;
    margin-top: -1vw;
  }
  .btn {
    line-height: 28px;
  }
</style>
