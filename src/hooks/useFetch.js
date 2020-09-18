import { useState, useEffect } from 'react';

export const useFetchFromApi = (url ) => {

    // const isMounted = useRef(true);
    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(true);

    // const [state, setState] = useState({ data: null, loading: true, error: null });

    // useEffect( () => {
    //     return () => {
    //         isMounted.current = false;
    //     }
    // }, [])
  
    useEffect(() => {
        const getBrewries = async () => {
            setLoading(true);
            const brewieres = await (await fetch(url)).json();
            setState(brewieres);
            setLoading(false)
        }

        getBrewries();
    }, [url])

    // useEffect( () => {

    //     setState({ data: null, loading: true, error: null });

    //     fetch( url )
    //         .then( resp => resp.json() )
    //         .then( data => {

    //             if ( isMounted.current ) {
    //                 setState({
    //                     loading: false,
    //                     error: null,
    //                     data
    //                 });
    //             }

    //         })
    //         .catch( () => {
    //             setState({
    //                 data: null,
    //                 loading: false,
    //                 error: 'No se pudo cargar la info'
    //             })
    //         })

    // },[url])
  
    return [state, loading];    
    // return state;
}