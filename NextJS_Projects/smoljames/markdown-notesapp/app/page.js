import Login from "@/components/Login";
// left off at 1:26:17
// Notes starting point 1:23:40

export default function Home() {
  return (
    <main id="hero">
      <div className="hero-img"> 
        <img alt="hero-img" src="hero-img.jpeg"/>
      </div>
      <div className="hero-login">
        <Login />
      </div>
    </main>
  );
}
