<script context="module">
  export const load = async ({ page }) => ({
    props: {
      key: page.path
    }
  });
</script>

<script lang="ts">
  import '../app.postcss';

  /**** Custom Fonts ****/

  // Display font
  import '@fontsource/plus-jakarta-sans/300.css';
  import '@fontsource/plus-jakarta-sans/300-italic.css';
  import '@fontsource/plus-jakarta-sans/400.css';
  import '@fontsource/plus-jakarta-sans/400-italic.css';
  import '@fontsource/plus-jakarta-sans/700.css';
  import '@fontsource/plus-jakarta-sans/700-italic.css';
  import '@fontsource/plus-jakarta-sans/800.css';
  import '@fontsource/plus-jakarta-sans/800-italic.css';

  // Sans Font
  import '@fontsource/ibm-plex-sans/300.css';
  import '@fontsource/ibm-plex-sans/300-italic.css';
  import '@fontsource/ibm-plex-sans/400.css';
  import '@fontsource/ibm-plex-sans/400-italic.css';
  import '@fontsource/ibm-plex-sans/700.css';
  import '@fontsource/ibm-plex-sans/700-italic.css';

  import Navbar from '$lib/components/Navbar.svelte';
  import PageTransition from '$lib/components/PageTransition.svelte';

  export let key: string;
</script>

<Navbar />

<PageTransition refresh={key}>
  <slot />
</PageTransition>
