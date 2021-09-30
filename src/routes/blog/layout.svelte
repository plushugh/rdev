<script>
  export let title;
  export let author;
  export let date;

  $: realdate = new Date(date).toLocaleDateString();
</script>

<svelte:head>
  <title>{title} | Tree Studio</title>
  <meta property="og:title" content={title} />
</svelte:head>

<article class="mt-20 mx-auto px-6">
  <h1 class="mb-8 text-6xl font-display font-extrabold text-center select-none">
    {title}
  </h1>
  <div class="prose max-w-prose mx-auto">
    <h6 class="text-center font-light font-display">
      <span class="">{author}</span> <span>@</span> <span>{realdate}</span>
    </h6>
    <hr class="!my-4" />
    <slot />
  </div>
</article>
