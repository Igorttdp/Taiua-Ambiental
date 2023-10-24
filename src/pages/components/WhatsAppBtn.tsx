import Image from "next/image"
import WppPng from "../../../public/whatsapp.png"

const WhatsAppBtn = () => {
    const CallWppMessage = () => {
        window.open("https://api.whatsapp.com/send/?phone=5562999818977&text&type=phone_number&app_absent=0");
    }

    return (
        <button className="wppBtn">
            <Image src={WppPng} alt="WhatsApp Button" onClick={CallWppMessage} width={60} height={60}/>
        </button>
    )
}

export default WhatsAppBtn;