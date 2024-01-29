import {useState, useEffect} from "react";

const useWindowsSize = () => {
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {
        const handleSize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        };

        window.addEventListener('resize', handleSize);

        return () => {
            window.removeEventListener('resize', handleSize)
        }
    }, []);

    return screenSize;

}

export default useWindowsSize
