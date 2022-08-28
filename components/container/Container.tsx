import styles from './Container.module.scss';
import {ReactNode} from "react";

type Props = {
    children: ReactNode;
}
const Container = ({children}: Props) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default Container;