import { useEffect, useRef, useState } from 'react';
import {im} from '../images/images.js';
import axios from "axios"
import styles from "./page8.module.scss"

function Page8() {
    return (
        <>
            <main>
                <section className={styles.sect1}>
                    <div className={styles.navig}>
                        <p>Главная → Новости</p>
                        <h3>Заголовок новости</h3>
                    </div>
                    <div className={styles.info}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget varius eleifend, massa nibh imperdiet est, vel sagittis quam justo vestibulum eros. Cras dignissim mi quis fringilla feugiat. Proin malesuada luctus diam, vitae faucibus dolor venenatis vel. In hac habitasse platea dictumst. </p>
                        <div className={styles.foto}>
                            <img src={im.foto} alt="" />
                        </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget varius eleifend, massa nibh imperdiet est, vel sagittis quam justo vestibulum eros. Cras dignissim mi quis fringilla feugiat. Proin malesuada luctus diam, vitae faucibus dolor venenatis vel. In hac habitasse platea dictumst. Vestibulum tristique porta aliquam. Suspendisse blandit et sapien sit amet sagittis. Praesent tristique ante sed lacinia congue. Etiam egestas mauris at arcu gravida interdum. Aliquam feugiat risus lacus, ac rutrum dolor porttitor vitae. Etiam porta, nunc sit amet pellentesque posuere, risus nulla sollicitudin enim, commodo bibendum nulla lacus et lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                            <p>Proin sit amet lorem consequat, elementum nibh vitae, congue quam. Nunc sapien sapien, commodo nec lorem a, elementum facilisis tortor. Sed porta ultrices orci, maximus tincidunt est sodales vel. Vestibulum lobortis turpis nibh. Vestibulum eros urna, gravida quis lorem at, facilisis pulvinar felis. In eget hendrerit ex, nec consequat orci. Suspendisse a est porta, fringilla ligula nec, ornare dolor. In tristique sagittis mauris dictum volutpat. Maecenas id risus orci. Fusce faucibus metus a leo tincidunt, in commodo elit sollicitudin. Fusce consectetur nulla vel leo feugiat, a ultrices leo imperdiet. Sed eget est quis felis molestie dictum. Sed consequat malesuada quam, id malesuada augue euismod nec. Phasellus ultrices velit non venenatis sagittis.</p>
                        
                    </div>
                </section>
            </main>
        </>
    )
}
export default Page8