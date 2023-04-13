import { Container } from "@/components/sender/styled";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/navbar/Navbar";

export const SendingsSuccess = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/market');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    
        return (
            <>
            <Navbar />
            <Container>
                <div className='form2'>
                    <div className='afterSubmit'>윤수님에게 오퍼레터가 전송되었습니다.</div>
                    <div className='afterSubmit'>3초 뒤에 되돌아갑니다.</div>
                </div>
            </Container>
            </>
        ) 
  };