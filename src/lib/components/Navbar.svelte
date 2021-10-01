<script>
  import { fly } from 'svelte/transition';

  import treeVisibleStore from '$lib/stores/treeVisibleStore';

  let navitems = [
    { href: '/', name: 'Home' },
    { href: '/about', name: 'About' },
    { href: '/blog', name: 'Blog' },
    { href: 'https://space.bilibili.com/350952551', name: 'Watch' }
  ];
</script>

<header class="fixed top-0 h-16 z-50 bg-transparent backdrop-blur w-screen shadow-md">
  <div class="flex w-full h-full flex-row px-6 place-items-center">
    <div class="transition-all duration-500" style="width: {!$treeVisibleStore ? '32px' : '0px'};">
      {#if !$treeVisibleStore}
        <img
          class="transition-all duration-300 mt-1"
          src="/icon.svg"
          alt="Tree Studio Logo"
          height="34"
          width="32"
          in:fly={{ x: -32, duration: 500 }}
          out:fly={{ x: -32, duration: 500 }}
        />
      {/if}
    </div>
    <h1
      class="select-none flex-grow text-4xl font-display font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600"
    >
      <a href="/">Tree Studio</a>
    </h1>

    <nav class="sm:flex flex-row place-items-center group hidden select-none">
      {#each navitems as navitem}
        <a
          class="mr-3 leading-none text-md text-gray-800 hover:text-blue-800 border-b-0 hover:border-b-2 transition-all duration-300"
          href={navitem.href}>{navitem.name}</a
        >
      {/each}
    </nav>
  </div>
</header>
<div class="h-16"></div>
