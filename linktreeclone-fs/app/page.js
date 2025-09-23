import { Placeholder } from "@/components/placeholder";
import { Cloud } from "@/components/gif";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { Cardlink } from "@/components/cardlink";
import Share from "@/components/Share";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-red-400 to-sky-200">
      <div className="flex justify-center items-center pt-4">
        <Placeholder/>
      </div>
      <div className="flex justify-center pt-5">
        <Cloud/>
      </div>
      <div className=" text-center text-white font-medium text-lg pt-2 pb-4">
        <h1>Coding station</h1>
        <h2>SteveticusTheThird</h2>
      </div>
      <div className="flex flex-col items-center gap-5">
        {links.map(link => <Cardlink link={link} key={link.text}/>)}
      </div>

      <Share/>
    </div>
  );
}

const links=[
  {link: "https://www.youtube.com/@codingstation11", 
  text: 'Youtube', 
  icon:<Youtube className="-mr-8" size={24} color="navy"/>,
  },
  {link: "https://www.youtube.com/@codingstation11", 
  text: 'Instagram', 
  icon:<Instagram className="-mr-8" size={24} color="navy"/>,
  },
  {link: "https://www.youtube.com/@codingstation11", 
  text: 'Linkedin', 
  icon:<Linkedin className="-mr-8" size={24} color="navy"/>,
  },
];