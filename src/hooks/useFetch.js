import {useState, useEffect} from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading('loading url ...')
        setData(null);
        setError(null);
        const source = axios.CancelToken.source();
        axios.get(url, { cancelToken: source.token })
            .then(res => {
                setLoading(false);
                res.data.content && setData(res.data.content);
            })
            .catch(err => {
                setLoading(false)
                setError('An error occurred. Awkward..')
            })
        return () => {
            source.cancel();
        }
    }, []);

    return { data, loading, error }
}

export default useFetch
