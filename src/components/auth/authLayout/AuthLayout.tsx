import "./style.css";
function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="auth">
        <section className="authContainer flex">
          <div className="authLeft width50"></div>
          <div className="authRight width50">{children}</div>
        </section>
      </main>
    </>
  );
}

export default AuthLayout;
