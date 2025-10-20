// this is a simple import to app.jsx and render it
// work on figuring out why its not showing as multiple instances instead of it just being in one box
export default function Fruits({items}) {

    
    return (
        <div className="w-80 sm:w-96 mx-auto ${color} text-center text-xl font-bold py-3 border-2 border-black shadow-meow hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1">
                {items.map(({name, price, emoji}) => ( 
                <div key={name}> {emoji} {name} {price}</div>))}
        </div>
    )
}

// try and recreate this example below and 
// export function ProfileCard({ name, age, occupation, location }) {
//   return (
//     <div className="profile-card">
//       <h2>{name}</h2>
//       <p>Age: {age}</p>
//       <p>Occupation: {occupation}</p>
//       <p>Location: {location}</p>
//     </div>
//   );
// }

// here's what the parent example looks like
/*
import { ProfileCard } from "./ProfileCard";

export default function App() {
  const users = [
    { id: 1, name: "Steven Forler", age: 27, occupation: "Frontend Developer", location: "California" },
    { id: 2, name: "Maria Lopez", age: 31, occupation: "Graphic Designer", location: "New York" },
    { id: 3, name: "John Carter", age: 25, occupation: "Data Analyst", location: "Texas" },
  ];

  return (
    <div>
      <h1>User Profiles</h1>
      {/* 👇 map over the array and render one ProfileCard per user */
//       {users.map(({ id, name, age, occupation, location }) => (
//         <ProfileCard
//           key={id}
//           name={name}
//           age={age}
//           occupation={occupation}
//           location={location}
//         />
//       ))}
//     </div>
//   );
// }







// the props way of mapping out itmes and destructuring the property
// export default function Fruits(props) {
// const {items} = props
    
//     return (
//         <div className="w-80 sm:w-96 mx-auto ${color} text-center text-xl font-bold py-3 border-2 border-black shadow-meow hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1">
//                 <div>
//                     {items.map((fruit) => ( 
//                     <li key={fruit.name}> {fruit.emoji} {fruit.name} {fruit.price}</li>))}
//                 </div>
//         </div>
//     )
// }

// export default function Fruits({items}) {

    
//     return (
//         <div>
//             <ul className="w-80 sm:w-96 mx-auto ${color} text-center text-xl font-bold py-3 border-2 border-black shadow-meow hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1">
//                 {items.map(({name, price, emoji}) => ( 
//                 <li key={name}> {emoji} {name} {price}</li>))}
//             </ul>
//         </div>
//     )
// }