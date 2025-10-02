import Login from "@/components/Login";
// left at 1:04:30

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
