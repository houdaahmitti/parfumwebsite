export default defineNuxtRouteMiddleware((to) => {
  const { token, loadAuth } = useAuth();

  loadAuth();

  if (!token.value && to.path !== "/login" && to.path !== "/signup") {
    return navigateTo("/login");
  }

  if (token.value && (to.path === "/login" || to.path === "/signup")) {
    return navigateTo("/");
  }
});
