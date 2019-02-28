import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28645.27326316576!2d91.74989255732176!3d26.17522770063977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5901240ca543%3A0x8243adbe820eef0e!2sGateway+Of+Rongkimi+Namghar!5e0!3m2!1sen!2sin!4v1551356511367"
                width='100%'
                height='500px'
                frameBorder='0'
                allowFullScreen/>
        <div className="location_tag">
            <div>Location</div>
        </div>
        </div>

    )
}

export default Location; 