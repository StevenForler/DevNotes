import Fruits from "../components/fruits"
import Linktree  from "../components/linkTreeRef"
import PropsPractice1 from "../components/propsPractice1"


export default function FruitOutput() {

const fruits = [
        {name: "Apple", price: 4, emoji:"🍏"},
        {name: "Mango", price: 6, emoji:"🥭"},
        {name: "Banana", price: 1, emoji:"🍌"},
        {name: "Orange", price: 2, emoji:"🍊"},
        {name: "Pineapple", price: 8, emoji:"🍍"},
        {name: "Strawberry", price: 25, emoji:"🍓"},
];

    return (
        <div>
            <Fruits items={fruits}/>
        </div>
    )
}