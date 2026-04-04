<script lang="ts">
  // Minimal footer — no icon imports needed
</script>

<footer style="background: #000; border-top: 1px solid rgba(255,255,255,0.06); padding: 48px 0 32px;">
  <div style="max-width: 1000px; margin: 0 auto; padding: 0 24px;">
    <!-- Top row: logo left + link groups right -->
    <div class="footer-top" style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 40px;">
      <!-- Logo -->
      <div>
        <a href="/n/" style="font-family: var(--bm-font); font-size: 15px; font-weight: 600; color: var(--bm-white); text-decoration: none;">Being Muslim</a>
        <p style="font-size: 13px; color: var(--bm-muted); margin: 8px 0 0; max-width: 200px; line-height: 1.5;">A practical guide to Islamic faith and practice.</p>
      </div>

      <!-- Link groups -->
      <div class="footer-links" style="display: flex; gap: 64px;">
        <div>
          <p style="font-size: 12px; font-weight: 500; color: rgba(255,255,255,0.3); text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 12px;">Learn</p>
          <a href="/n/" class="bm-footer-link" style="display: block;">Courses</a>
          <a href="/n/" class="bm-footer-link" style="display: block;">The Book</a>
          <a href="/n/" class="bm-footer-link" style="display: block;">Articles</a>
        </div>
        <div>
          <p style="font-size: 12px; font-weight: 500; color: rgba(255,255,255,0.3); text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 12px;">Shop</p>
          <a href="/n/" class="bm-footer-link" style="display: block;">Boxed Set</a>
          <a href="/n/" class="bm-footer-link" style="display: block;">Prayer Cards</a>
          <a href="/n/" class="bm-footer-link" style="display: block;">eBook</a>
        </div>
        <div>
          <p style="font-size: 12px; font-weight: 500; color: rgba(255,255,255,0.3); text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 12px;">Community</p>
          <a href="/n/" class="bm-footer-link" style="display: block;">Join</a>
          <a href="/n/" class="bm-footer-link" style="display: block;">Support</a>
          <a href="/n/" class="bm-footer-link" style="display: block;">Contact</a>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
      <p style="font-size: 12px; color: var(--bm-muted); margin: 0;">&copy; 2026 Being Muslim Project. All rights reserved.</p>

      <!-- Social icons (inline SVGs for minimal deps) -->
      <div style="display: flex; align-items: center; gap: 16px;">
        <a href="/n/" class="bm-social-link" aria-label="Instagram">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
        <a href="/n/" class="bm-social-link" aria-label="YouTube">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
        </a>
        <a href="/n/" class="bm-social-link" aria-label="Twitter">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
        </a>
        <a href="/n/" class="bm-social-link" aria-label="Facebook">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </a>
      </div>
    </div>
  </div>
</footer>

<style>
  @media (max-width: 768px) {
    .footer-top {
      flex-direction: column !important;
      gap: 32px;
    }
    .footer-links {
      gap: 32px !important;
      flex-wrap: wrap;
    }
  }
</style>
