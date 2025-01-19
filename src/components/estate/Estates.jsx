import { useEffect, useState } from "react";
import Estate from "./estate";

const Estates = () => {

    const [data , setData] = useState([]);

    useEffect(() => {
        fetch("/data/state.json")
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
            <h1 className="text-4xl text-center my-16">Apartments</h1>
            {
                data.map(item => <Estate key={item.id} estateData={item}></Estate>)
            }
        </div>
    );
};

export default Estates;