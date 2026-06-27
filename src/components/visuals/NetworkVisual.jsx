import { motion } from 'framer-motion';
import { BrainCircuit, CarFront, CreditCard, Database, Map, UserRound, Utensils } from 'lucide-react';
import styles from './Visuals.module.css';

const nodes = [
  { label:'Người dùng', icon:UserRound, x:10, y:31 }, { label:'Tài xế', icon:CarFront, x:16, y:75 },
  { label:'Quán ăn', icon:Utensils, x:84, y:75 }, { label:'Dữ liệu', icon:Database, x:90, y:31 },
  { label:'AI', icon:BrainCircuit, x:69, y:13 }, { label:'Thanh toán', icon:CreditCard, x:48, y:87 },
  { label:'Bản đồ', icon:Map, x:29, y:13 },
];
export default function NetworkVisual() {
  return <div className={styles.network} aria-label="Mạng lưới nền tảng số minh họa">
    <svg viewBox="0 0 1000 430" preserveAspectRatio="none" aria-hidden="true">
      <defs><linearGradient id="signal" x1="0" x2="1"><stop stopColor="#ff8a3d"/><stop offset=".52" stopColor="#fff"/><stop offset="1" stopColor="#45dcff"/></linearGradient><filter id="blur"><feGaussianBlur stdDeviation="3"/></filter></defs>
      {nodes.map((n,i) => {const x=n.x*10,y=n.y*4.3; const path=`M500 215 C ${500+(x-500)*.28} ${215-(i%2?90:-90)}, ${500+(x-500)*.72} ${y+(i%2?-55:55)}, ${x} ${y}`; return <g key={n.label}><motion.path d={path} initial={{pathLength:0,opacity:0}} animate={{pathLength:1,opacity:.55}} transition={{delay:.65+i*.08,duration:1.25}}/><circle r="3" fill={i%2?'#45dcff':'#ff8a3d'}><animateMotion dur={`${3.6+i*.25}s`} repeatCount="indefinite" path={path}/></circle></g>})}
    </svg>
    <motion.div className={`${styles.node} ${styles.core}`} initial={{scale:0}} animate={{scale:1}} transition={{type:'spring',delay:.25}}><strong>RideNow</strong><small>AI + hệ sinh thái</small></motion.div>
    {nodes.map((n,i) => {const Icon=n.icon; return <motion.div key={n.label} className={styles.node} style={{left:`${n.x}%`,top:`${n.y}%`}} initial={{opacity:0,scale:.5}} animate={{opacity:1,scale:1}} transition={{delay:.7+i*.1}}><span><Icon/></span><b>{n.label}</b></motion.div>})}
    {Array.from({length:14},(_,i)=><motion.span key={i} className={styles.particle} style={{left:`${(i*37)%96}%`,top:`${(i*53)%90}%`}} animate={{y:[0,-14,0],opacity:[.15,.7,.15]}} transition={{duration:4+(i%5)*.5,repeat:Infinity,delay:-i*.3}}/>) }
  </div>;
}
