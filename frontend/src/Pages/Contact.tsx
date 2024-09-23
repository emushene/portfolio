import React from "react";
import AffliliateLogos from "../Components/AffliliateLogos/AffliliateLogos";
import ContactPage from "../Components/ContactPage/ContactPage";






type Props = {};

const Contact = (props: Props) => {
  return (
    <div className='w-[100%]'>
      
      <ContactPage/>
      <AffliliateLogos />
    </div>
  );
};

export default Contact;
