<script lang="ts">
  import { Menu, X } from 'lucide-svelte';

  let mobileOpen = $state(false);

  const links = [
    { label: 'Learn', href: '/n/' },
    { label: 'Shop', href: '/n/' },
    { label: 'Community', href: '/n/' },
    { label: 'Support', href: '/n/' }
  ];
</script>

<!-- Navbar -->
<nav style="position: fixed; top: 0; left: 0; right: 0; z-index: 100; height: 56px; display: flex; align-items: center; background: #000; border-bottom: 1px solid rgba(255,255,255,0.06);">
  <div style="max-width: 1000px; margin: 0 auto; padding: 0 24px; width: 100%; display: flex; align-items: center; justify-content: space-between;">
    <!-- Left: wordmark -->
    <a href="/n/" style="font-family: var(--bm-font); font-size: 16px; font-weight: 600; color: var(--bm-white); text-decoration: none; flex-shrink: 0;">
      Being Muslim
    </a>

    <!-- Center: nav links (desktop) -->
    <div class="nav-desktop" style="display: flex; align-items: center; gap: 32px;">
      {#each links as link}
        <a href={link.href} style="font-family: var(--bm-font); font-size: 13px; font-weight: 400; color: rgba(255,255,255,0.5); text-decoration: none; transition: color 0.2s;">
          {link.label}
        </a>
      {/each}
    </div>

    <!-- Right: CTA + hamburger -->
    <div style="display: flex; align-items: center; gap: 16px;">
      <a href="/n/" class="nav-cta bm-btn-gradient" style="font-size: 13px; padding: 8px 20px; border-radius: 6px;">
        Get Started
      </a>
      <button
        class="nav-hamburger"
        onclick={() => mobileOpen = !mobileOpen}
        style="display: none; background: none; border: none; color: var(--bm-white); cursor: pointer; padding: 4px;"
        aria-label="Toggle menu"
      >
        {#if mobileOpen}
          <X size={20} />
        {:else}
          <Menu size={20} />
        {/if}
      </button>
    </div>
  </div>
</nav>

<!-- Mobile overlay -->
{#if mobileOpen}
  <div
    style="position: fixed; inset: 0; z-index: 99; background: rgba(0,0,0,0.95); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); padding-top: 56px;"
    role="dialog"
  >
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; gap: 32px;">
      {#each links as link}
        <a
          href={link.href}
          onclick={() => mobileOpen = false}
          style="font-family: var(--bm-font); font-size: 20px; font-weight: 500; color: var(--bm-white); text-decoration: none;"
        >
          {link.label}
        </a>
      {/each}
      <a
        href="/n/"
        onclick={() => mobileOpen = false}
        class="bm-btn-gradient"
        style="margin-top: 16px; font-size: 15px; padding: 12px 32px;"
      >
        Get Started
      </a>
    </div>
  </div>
{/if}

<!-- Spacer for fixed nav -->
<div style="height: 56px;"></div>

<style>
  @media (max-width: 768px) {
    .nav-desktop {
      display: none !important;
    }
    .nav-cta {
      display: none !important;
    }
    .nav-hamburger {
      display: flex !important;
    }
  }

  .nav-desktop a:hover {
    color: rgba(255,255,255,0.9) !important;
  }
</style>
