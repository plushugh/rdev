<script lang="ts">
  import { goto } from '$app/navigation';

  import Card from '$lib/components/Card.svelte';
  import treeVisibleStore from '$lib/stores/treeVisibleStore';

  // Inview doesn't have types yet
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  import { inview } from 'svelte-inview';
  let inviewOpts = {};

  const postsPromise = fetch('blog/blog.json')
    .then((res) => res.json())
    .catch((err) => err);
</script>

<svelte:head>
  <title>Tree Studio</title>
</svelte:head>

<div
  class="w-full flex justify-center mt-10 select-none skew-y-3"
  use:inview={inviewOpts}
  on:change={(event) => {
    const { inView } = event['detail'];
    treeVisibleStore.set(inView);
  }}
>
  <img class="imgsize" height="140" width="128" src="/icon.svg" alt="Tree Studio Logo" />
</div>

<h1
  class="select-none text-center h1size font-display font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from to animate-bg skew-y-3 saturate-200 bg-center"
>
  Plan.<br />
  Shoot.<br />
  Edit.
</h1>

<div class="mt-14 flex flex-row place-items-center justify-center">
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

<section
  class="mt-10 mb-10 px-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full place-items-center justify-center max-w-md md:max-w-screen-2xl mx-auto"
>
  <Card title="Plan The Video" content="Hey" />
  <Card title="Shoot The Video" content="Hey" />
  <Card title="Edit The Video" content="Hey" />
</section>

<section class="max-w-prose mx-auto px-4 mt-20">
  <h2 class="text-center text-5xl sm:text-6xl font-display font-extrabold mb-4">
    Recent Blog Posts
  </h2>
  {#await postsPromise then data}
    {#each data.posts as post}
      <article
        class="mb-4 p-4 border-2 rounded-md hover:skew-y-1 hover:shadow-md transition-all duration-300"
        on:click={() => goto('/blog/' + post['slug'])}
      >
        <h2 class="text-3xl mb-2 font-display font-light tracking-tight">{post['title']}</h2>
        <span class="text-sm font-sans font-light"
          >{new Date(post['date']).toLocaleDateString()}</span
        >
        <p class="text-base font-sans font-normal my-2">{post['summary']}</p>
        <a href={'/blog/' + post['slug']} class="text-blue-600 hover:underline">Read More</a>
      </article>
    {/each}
  {/await}
</section>

<style>
  @keyframes animate-bg {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
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
    line-height: 0.9;
    font-size: 20vw;
  }
  @media (min-width: 500px) {
    .h1size {
      font-size: clamp(128px, 14vw, 300px);
    }
  }
  .imgsize {
    width: 60vw;
    margin-bottom: -3vw;
    margin-top: -1vw;
  }
  @media (min-width: 500px) {
    .imgsize {
      width: clamp(200px, 20vw, 600px);
    }
  }
  .btn {
    line-height: 28px;
  }
</style>
