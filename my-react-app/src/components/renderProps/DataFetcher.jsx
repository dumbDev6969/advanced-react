import { useEffect, useState } from "react";

const FetchData = ({ render, url }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                    const response = await fetch(url);

                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    // store the response
                    const result = await response.json();

                    // set the data
                    setData(result);

            } catch (error) {
                console.error("Fetching data failed: ", error);
            }
        };
        // call the function
        fetchData();
    }, [url]);
    return render(data)
}

export default FetchData