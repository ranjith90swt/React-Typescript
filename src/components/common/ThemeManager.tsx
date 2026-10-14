import { useEffect } from "react";
import { useAppSelector } from "../../store/hooks";



const ThemeManager = () => {
    const theme = useAppSelector((state) => state.theme.mode);

    useEffect(()=>{
        document.documentElement.setAttribute("data-bs-theme", theme);
        localStorage.setItem("theme", theme);

    }, [theme])
  return null;
}

export default ThemeManager