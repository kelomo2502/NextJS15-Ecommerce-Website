import LoginPage from "./pages/auth/login/page";
import RegisterPage from "./pages/auth/register/page";

export default function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <LoginPage/>
      <RegisterPage/>

    </div>
    
  );
}
