import { useState } from 'react';
import { motion } from 'framer-motion';
import { Orbit } from 'lucide-react';
import { pillars } from '../../data/content.js';
import SectionHeading from './SectionHeading.jsx';
import styles from './Sections.module.css';

export default function DigitalMonopoly(){
  const [active, setActive] = useState(null);
  return <section id="digital-monopoly" className={`${styles.monopoly} section`}><div className="section-inner">
    <SectionHeading eyebrow="03 · Bốn trụ cột quyền lực" title="Độc quyền trong nền kinh tế số có gì mới?" lead="Quyền lực không chỉ đến từ quy mô vốn. Trong không gian số, bốn lợi thế có thể liên tục củng cố lẫn nhau quanh một nền tảng trung tâm."/>
    <div className={styles.monopolyMap}>
      <svg viewBox="0 0 1000 520" preserveAspectRatio="none" aria-hidden="true">
        {[[245,130],[755,130],[245,390],[755,390]].map(([x,y],i)=><motion.line key={i} className={active===i?styles.lineActive:''} x1="500" y1="260" x2={x} y2={y} initial={{pathLength:0}} whileInView={{pathLength:1}} viewport={{once:true}} transition={{duration:.8,delay:.15*i}}/>)}
      </svg>
      <motion.div className={styles.platformCore} initial={{opacity:0,scale:.7}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{type:'spring',stiffness:120}}><Orbit/><b>RideNow</b><small>Nền tảng trung tâm</small></motion.div>
      {pillars.map(({icon:Icon,title,text},i)=><motion.article key={title} className={styles.pillar} onMouseEnter={()=>setActive(i)} onMouseLeave={()=>setActive(null)} initial={{opacity:0,x:i%2?-45:45}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.3}} transition={{duration:.65,delay:.1*i}}><span>0{i+1}</span><div className={styles.pillarIcon}><Icon/></div><div><h3>{title}</h3><p>{text}</p></div></motion.article>)}
    </div>
  </div></section>
}
