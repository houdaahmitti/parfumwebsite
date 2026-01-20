export const useAuth = () => {
  
  const token = useState<string | null>("token", () => null);
  const user = useState<any>("user", () => null);

  const setAuth = (t: string, u: any) => {
    token.value = t;
    user.value = u;
   
    if (typeof window !== "undefined") {
      localStorage.setItem("token", t);
      localStorage.setItem("user", JSON.stringify(u));
    }
  };

  const loadAuth = () => {
    if (typeof window !== "undefined") {
      token.value = localStorage.getItem("token");
      const u = localStorage.getItem("user");
      user.value = u ? JSON.parse(u) : null;
    }
  };

  const logout = () => {
    token.value = null;
    user.value = null;
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  };

  return { token, user, setAuth, loadAuth, logout };
};
