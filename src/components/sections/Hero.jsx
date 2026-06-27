import { motion } from 'framer-motion';
import { ArrowDown, BookOpen, Focus, ShieldCheck, Users } from 'lucide-react';
import NetworkVisual from '../visuals/NetworkVisual.jsx';
import styles from './Sections.module.css';

export default function Hero() {
  return <section id="hero" className={`${styles.hero} section`}>
    <div className="section-inner">
      <div className={styles.heroGrid}>
        <motion.div className={styles.heroCopy} initial="hidden" animate="visible" variants={{hidden:{},visible:{transition:{staggerChildren:.14}}}}>
          <motion.p className={styles.heroLabel} variants={{hidden:{opacity:0,y:18},visible:{opacity:1,y:0,transition:{duration:.6}}}}>MLN122 · CHƯƠNG 4 · NHÓM 2</motion.p>
          <motion.span className={styles.rideWord} variants={{hidden:{opacity:0,y:22},visible:{opacity:1,y:0,transition:{duration:.65}}}}>RIDE NOW</motion.span>
          <motion.h1 variants={{hidden:{opacity:0,y:38},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.16,1,.3,1]}}}}><span>TỪ CẠNH TRANH</span><span>ĐẾN</span><em>ĐỘC QUYỀN SỐ</em></motion.h1>
          <motion.p className={styles.heroLead} variants={{hidden:{opacity:0,y:24},visible:{opacity:1,y:0,transition:{duration:.65}}}}>Khám phá cách dữ liệu, thuật toán, hiệu ứng mạng và hệ sinh thái số có thể làm thay đổi quyền lực trong nền kinh tế thị trường.</motion.p>
          <motion.a className={styles.cta} href="#opening" variants={{hidden:{opacity:0,y:22},visible:{opacity:1,y:0,transition:{duration:.55}}}}>Bắt đầu câu chuyện <ArrowDown size={16}/></motion.a>
        </motion.div>
        <motion.div className={styles.heroVisual} initial={{opacity:0,y:30,scale:.96}} animate={{opacity:1,y:[0,-8,0],scale:1}} transition={{opacity:{duration:.9,delay:.35},scale:{duration:.9,delay:.35},y:{duration:7,repeat:Infinity,ease:'easeInOut',delay:1.2}}}><NetworkVisual /></motion.div>
      </div>
      <motion.div className={styles.infoGrid} initial="hidden" animate="visible" variants={{hidden:{},visible:{transition:{staggerChildren:.08,delayChildren:.75}}}}>
        <motion.article variants={{hidden:{opacity:0,y:24},visible:{opacity:1,y:0}}}><BookOpen/><div><b>Chương 4</b><span>Cạnh tranh và độc quyền trong nền kinh tế thị trường</span></div></motion.article>
        <motion.article variants={{hidden:{opacity:0,y:24},visible:{opacity:1,y:0}}}><Focus/><div><b>Nội dung lựa chọn</b><span>4.3.1. Biểu hiện mới của độc quyền</span></div></motion.article>
        <motion.article variants={{hidden:{opacity:0,y:24},visible:{opacity:1,y:0}}}><Users/><div><b>Nhóm 2</b><span>Long, Sang, Duy, Phát, Sơn</span></div></motion.article>
        <motion.article variants={{hidden:{opacity:0,y:24},visible:{opacity:1,y:0}}}><ShieldCheck/><div><b>Tình huống giả định</b><span>RideNow, MoveGo và FastTrip phục vụ mục đích học tập; không phải kết luận pháp lý về doanh nghiệp thực tế.</span></div></motion.article>
      </motion.div>
    </div>
  </section>;
}
