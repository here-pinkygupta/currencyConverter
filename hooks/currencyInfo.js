import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/3ef63b75538d2f31bc7251c5/latest/${currency}`)
            .then((res) => res.json()) // Fixed JSON parsing
            .then((res) => {
                setData(res.conversion_rates || {}); // Ensure valid data
            })
            .catch((error) => console.error("Error fetching data:", error)); // Handle errors properly
    }, [currency]); // Dependency array prevents infinite calls

    return data;
}

export default useCurrencyInfo;
