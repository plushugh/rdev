<script lang="ts">
  const postsPromise = fetch('blog/blog.json')
    .then((res) => res.json())
    .catch((err) => err);
</script>

<main class="max-w-prose mx-auto mt-16 px-4">
  <h1 class="font-display font-extrabold text-6xl text-center mb-8 tracking-tight">Blog Posts</h1>
  {#await postsPromise then data}
    {#each data.posts as post}
      <article
        class="mb-4 p-4 border-2 rounded-md hover:skew-y-1 hover:shadow-md transition-all duration-300"
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
</main>
