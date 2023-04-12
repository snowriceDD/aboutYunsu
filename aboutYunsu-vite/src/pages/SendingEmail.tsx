import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Container } from "@/components/sender/styled";
import { Navbar } from "@/components/navbar/Navbar";
import { useNavigate } from "react-router-dom";

export const SendingEmail = () => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const rangeRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();
    const [range, setRange] = useState('2800');
    const [submitStatus, setSubmitStatus] = useState(false);
    const apiKey = process.env.NEXT_PUBLIC_EMAILJS_KEY;
    const svcKey = process.env.NEXT_PUBLIC_SERVICE_KEY;

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (formRef.current) {
            emailjs.sendForm(svcKey ? svcKey : '', 'template_rraim77', formRef.current, apiKey)
              .then((result) => {
                console.log(result.text);
                setSubmitStatus(true);
                navigate('/market');
              }, (error) => {
                console.log(error.text);
              });
          }
      };
    


    const rangeCurrent = (e: React.MouseEvent<HTMLInputElement> | React.TouchEvent<HTMLInputElement>) => {
        e.preventDefault();

        if (rangeRef.current) {
            setRange(rangeRef.current.value)
        }
    }
    
    if (submitStatus === true) {
        useEffect(() => {
            const timer = setTimeout(() => {
                navigate('/market');
            }, 3000);

            return () => clearTimeout(timer);
        }, []);

        return (
            <Container>
                <div className='afterSubmit'>윤수님에게 오퍼레터가 전송되었습니다.</div>
            </Container>
        )
    } else {
        return (
        <div>
        <Navbar/>
        <Container>
        <form className='form' ref={formRef} onSubmit={sendEmail}>
            <div className='title'>Offer letter</div>
            <div className='grid1'>
                <div className="name">
                    <label htmlFor="company">회사명*</label>
                    <input type="text" name="company" id="company" required/>
                </div>
                <div className="name2">
                    <label htmlFor="sender_name">작성자명*</label>
                    <input type="text" name="sender_name" id="sender_name" required/>
                </div> 
            </div>
            <div className='grid2'>
                <div className="name3">
                    <label htmlFor="sender_email">이메일*</label>
                    <input type="text" name="sender_email" id="sender_email" required/>
                </div>
                <div className="name4">
                    <label htmlFor="phoneNum">연락처*</label>
                    <input type="text" name="phoneNum" id="phoneNum" required/>
                </div>
            </div>
        <div className="position">
            <label htmlFor="jobposition">채용 포지션*</label>
            <form>
            <input type="radio" name="job" id="jobposition" value="feDev" /> 웹 프론트엔드 개발자 
            <input type="radio" name="job" id="jobposition" value="PM" /> 웹 서비스 기획자
            <input type="radio" name="job" id="jobposition" value="productDesigner" /> 프로덕트 디자이너
            <input type="radio" name="job" id="jobposition" value="etc" /> 협의 
            </form>
        </div>
        <div className="howmoney">
            <label htmlFor="howmoney">제안 연봉</label>
            <input 
                type="range" 
                name="howmoney" 
                id="howmoney"
                min="2800" max="5000" step="100"
                ref={rangeRef}
                onMouseUp={rangeCurrent}
                onTouchEnd={rangeCurrent}
            />
        </div>
        <div className='moneyCount'>
            {range} 만원
        </div>
        <div className="contentsTitle">
            <label htmlFor="message">내용*</label>
            <input type="text" name="message" id="message" required/>
        </div>
        <input className='submit' type="submit" id="button" value="Send Email" disabled={submitStatus}/>
        </form>
        </Container>
        </div>
        );
    }
  };