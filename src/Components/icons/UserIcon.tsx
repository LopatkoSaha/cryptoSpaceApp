import style from './icons.module.css';
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

defineElement(lottie.loadAnimation);

const UserIcon = () => {
    return (
    //@ts-ignore
<lord-icon
    className={style.user}
    trigger="hover" 
    src="https://cdn.lordicon.com/xzalkbkz.json"
    />
    );
};

export default UserIcon;
