import Login from "@/components/Login";
// left at 59:51

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
