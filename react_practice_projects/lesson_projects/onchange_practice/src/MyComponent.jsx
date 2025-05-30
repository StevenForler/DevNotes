import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState("");
    const [quantity, setQuantity] =useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping]= useState("");

    function handleNameChange(event){
        setName(event.target.value)
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return( <div>
                <input value={name} onChange={handleNameChange} />
                <p>Name: {name}</p>

                <input value={quantity} onChange={handleQuantityChange} type="number" />
                <p>Quantity: {quantity} </p>
                
                <textarea value={comment} onChange={handleCommentChange}
                placeholder=''></textarea>
                <p>Comment: {comment}</p>

                <select value={payment} onChange={handlePaymentChange}>
                    <option value="">Select An Option</option>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Giftcard">Giftcard</option>
                </select>
                <p>WHAT UR YEH BUYIN WITH?!: {payment}</p>

                 <label>
                    <input type="radio" Value="Pick Up" 
                            checked={shipping === "Pick Up"}
                            onChange={handleShippingChange}/>
                    Pick Up
                </label><br/>
                <label>
                <input type="radio" Value="Delivery" 
                            checked={shipping === "Delivery"}
                            onChange={handleShippingChange}/>
                    Delivery
                </label>
                <p>Shipping: {shipping}</p>
            </div> );
}

export default MyComponent