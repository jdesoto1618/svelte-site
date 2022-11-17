<script>
  import Users from "./lib/Users.svelte";
  import { Router, Link, Route } from "svelte-navigator";
  import Homepage from "./pages/Homepage.svelte";
  import UsersPage from "./pages/UsersPage.svelte";
</script>

<Router>
  <nav class="site-nav">
    <Link to="/">Home</Link>
    <Link to="/users">Users</Link>
  </nav>

  <Route path="/">
    <Homepage />
  </Route>

  <Route path="/users">
    <UsersPage />
  </Route>
</Router>
