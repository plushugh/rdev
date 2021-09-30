<script lang="ts">
  export let title: string;
  export let content: string;
</script>

<div
  class="w-full rounded border-2 flex flex-col place-items-center justify-center py-5 px-0 hover:shadow-md hover:scale-105 hover:skew-y-1 transition-all duration-300"
>
  <h1 class="text-3xl font-display font-extrabold">{title}</h1>
  <p class="font-sans text-base mt-4 mx-2">
    {content}
  </p>
</div>
