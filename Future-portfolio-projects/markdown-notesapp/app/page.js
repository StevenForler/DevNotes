import Login from "@/components/Login";
// left off at 2:23:03
// Notes starting point 1:23:40
// Additional React Components and imports 1:37:28

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
