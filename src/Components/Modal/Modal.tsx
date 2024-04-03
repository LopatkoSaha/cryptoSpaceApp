
import { PropsWithChildren } from 'react';
import style from './Modal.module.css';
import CloseIcon  from '../icons/CloseIcon'
import { FC } from 'react';

type TProps = PropsWithChildren<{
    closeHandler: () => void,
}>

export const Modal: FC<TProps> = ({closeHandler, children})=>{
    return (
    <div className={style.wrapper}>
        <div className={style.content}>
            <div className={style.closeButton}>
                <CloseIcon closeHandler={closeHandler}/>
            </div>
            {children}
        </div>
    </div>
    )
}
