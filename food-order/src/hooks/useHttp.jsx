import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
    const res = await fetch(url, config);
    const response = await res.json();
    if (!res.ok) throw new Error(response.message || "Something went wrong!");
    return response;
}

export function useHttp(url, config, initialData) {
    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const sendRequest = useCallback(async () => {
        setLoading(true);
        try {
            const data = await sendHttpRequest();
            setData(data);
        } catch (err) {
            setError(err.message || "Something went wrong");
        }
        setLoading(false);
    }, [url, config])

    useEffect(() => {
        if (config && config.method === 'GET') {
            sendRequest();
        }
    }, [sendRequest, config]);

    return {
        data,
        loading,
        error,
        sendRequest
    }
}
