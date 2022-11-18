<script>
  import Users from "./lib/Users.svelte";
  import { onMount } from "svelte";
  import { Router, Link, Route } from "svelte-navigator";
  import Homepage from "./pages/Homepage.svelte";
  import UsersPage from "./pages/UsersPage.svelte";

  onMount(() => {
    const siteHeader = document.querySelector(".site-header");
    const siteNav = document.querySelector(".site-nav.desktop");
    siteHeader.append(siteNav);
  });
</script>

<Router>
  <nav class="site-nav desktop">
    <ul class="site-nav-ul">
      <li class="site-nav-li">
        <Link class="site-nav-link" to="/">Home</Link>
      </li>
      <li class="site-nav-li">
        <Link class="site-nav-link" to="/users">Users</Link>
      </li>
    </ul>
  </nav>

  <Route path="/">
    <Homepage />
  </Route>

  <Route path="/users">
    <UsersPage />
  </Route>
</Router>
