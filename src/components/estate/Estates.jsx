import { useEffect, useState } from "react";
import Estate from "./estate";

const Estates = () => {

    const [data , setData] = useState([]);

    useEffect(() => {
        fetch("/state.json")
            .then((response) => {
                console.log("Response:", response);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => setData(data))
            .catch((error) => console.error("Error:", error));
    }, []);
    

    return (
        <div>
            {
                data.map(item => <Estate key={item.id} data={item}></Estate>)
            }
        </div>
    );
};

export default Estates;