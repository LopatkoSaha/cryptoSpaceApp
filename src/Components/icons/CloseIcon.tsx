import style from "./icons.module.css";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import { FC } from 'react';
import { PropsWithChildren } from 'react';

defineElement(lottie.loadAnimation);
type TProps = PropsWithChildren<{
    closeHandler: () => void,
}>

const CloseIcon: FC<TProps> = ({closeHandler}) => {
    return (
    //@ts-ignore
<lord-icon
    className={style.close}
    onClick={closeHandler}
    trigger="hover" 
    src="https://cdn.lordicon.com/nqtddedc.json"
    />
    );
};

export default CloseIcon;