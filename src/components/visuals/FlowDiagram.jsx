import { motion } from 'framer-motion';
import styles from './Visuals.module.css';
export default function FlowDiagram({ items, compact=false }) {
  return <div className={`${styles.flow} ${compact ? styles.compact : ''}`}>
    <motion.div className={styles.flowLine} initial={{scaleY:0}} whileInView={{scaleY:1}} viewport={{once:true,amount:.15}} transition={{duration:1.4,ease:[.16,1,.3,1]}}/>
    {items.map((item,index) => <motion.div className={styles.flowItem} key={item} initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.55}} transition={{duration:.6,delay:index*.06}}><span>{String(index+1).padStart(2,'0')}</span><i/><p>{item}</p></motion.div>)}
  </div>;
}
