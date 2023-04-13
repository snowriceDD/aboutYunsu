import { Sending } from '@/components/sender/Sending';
import { SendingsSuccess } from '@/components/sender/SendingSuccess';
import { useState } from 'react';

export const SendingEmail = () => {
    const [submitStatus, setSubmitStatus] = useState(false);

    function StateChange(props:boolean) {
        setSubmitStatus(props);
      }

    return (
        <>
        {console.log(submitStatus)}
        {submitStatus ? <SendingsSuccess /> : <Sending onSubmitStateChange={StateChange} />}
        </>
    )
  };