<script lang="ts">
  import { type Snippet } from 'svelte';
  import '../styles.css';
  import NavbarN from '../NavbarN.svelte';
  import FooterN from '../FooterN.svelte';

  let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
  <title>Being Muslim — The modern guide to Islamic faith and practice</title>
  <meta name="description" content="Education, community, and support — designed for converts and beginners. Courses, resources, and a global community." />
</svelte:head>

<div class="bm-root">
  <NavbarN />
  <main>
    {@render children()}
  </main>
  <FooterN />
</div>
