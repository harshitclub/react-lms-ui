import AuthNav from "../authNav/authNav";
import "../style.css";
function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="auth">
        <section className="authContainer flex">
          <div className="authLeft width50"></div>
          <div className="authRight width50">
            <AuthNav />
            {children}
          </div>
        </section>
      </main>
    </>
  );
}

export default AuthLayout;
