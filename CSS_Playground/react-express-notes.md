# These notes will help cover what will help build a website <br> using React and Express together w/o a database

## These notes will be divided into Frontend(React) and Backend(Express)

### General Best Practices

Having something to assign the backend to the front seems to make the testing process easier.  
especially since you're going to be servicing the data in express and not react it will help on where to place the data. 


### Frontend-React
to grab the data from the frontend we will be using the HTTP library called "axios" to help fetch data  
from the backend. (it also can be used to help send requests too.)


Codebox:
```
import axios from "axios";
import { usestate,uesEffect } from "react";

Function App(){
    const [array, setArray] = useState([]);

    const fetchData = async () => {
        const response = await axios.get("http://localhost:8080");
    }
}

export default App;
```


### Backend-Express

The backend and frontend will load on different ports using the cors package to help take in req. from the frontend so it can res. to said req. <!-- req.= request; res.= response-->

Codebox:
```
import cors from "cors";

const corsOptions = {
    origin: [http://locahost:5174]
}

app.use(cors(corsOptions))
```


