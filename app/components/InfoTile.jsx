import React from "react";
import styles from "./InfoTile.css";
class InfoTile extends React.Component {
    render() {
        return (
            <div className={styles.tile}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        服务声明
                </div>
                </div>


            </div>
        )
    }
}

export default InfoTile