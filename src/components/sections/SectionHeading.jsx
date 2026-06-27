import { motion } from 'framer-motion';
export default function SectionHeading({ eyebrow, title, lead }) {
  return <motion.div initial="hidden" whileInView="visible" viewport={{once:true,amount:.3}} variants={{hidden:{},visible:{transition:{staggerChildren:.11}}}}>
    <motion.p className="eyebrow" variants={{hidden:{opacity:0,y:14},visible:{opacity:1,y:0}}}>{eyebrow}</motion.p><motion.h2 className="heading" variants={{hidden:{opacity:0,y:34,clipPath:'inset(0 0 100% 0)'},visible:{opacity:1,y:0,clipPath:'inset(0 0 0% 0)',transition:{duration:.8,ease:[.16,1,.3,1]}}}}>{title}</motion.h2>{lead && <motion.p className="lead" variants={{hidden:{opacity:0,y:18},visible:{opacity:1,y:0}}}>{lead}</motion.p>}
  </motion.div>;
}
