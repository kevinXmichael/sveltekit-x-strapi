<nav>
  <a href="/legal">Legal</a>
  <a href="/jobs">Jobs</a>
  <a href="/articles">Articles</a>
</nav>

<slot />

<footer style="position: fixed; left: 0; bottom: 0; padding: 2rem;">
  <span>{`© ${new Date().getFullYear()} some app (v${__APP_VERSION__})`}</span>
</footer>

<style>
  a {
    padding-right: 1rem;
  }
</style>
