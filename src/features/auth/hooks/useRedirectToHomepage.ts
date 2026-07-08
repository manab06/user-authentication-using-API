
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../config/routs';
import { useEffect, useState } from 'react';



export const useRedirectToHomepage =()=>{
    const navigate = useNavigate();
    const [count, setCount] = useState(5);
    useEffect(()=>{
      const interval = setInterval(()=>{
         setCount(prev => {
            if (prev === 0){
                clearInterval(interval);
                navigate(ROUTES.PUBLIC.LOGIN);
                return 0
            }
            return prev - 1;
         });
    },1000)

    return ()=> clearInterval(interval);
 
    },[navigate])

    
} 