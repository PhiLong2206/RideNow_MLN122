import { useEffect, useMemo, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigation } from '../../data/content.js';
import { useScrollSpy } from '../../utils/scrollSpy.js';
import styles from './Header.module.css';

export default function Header() {
  const ids = useMemo(() => navigation.map(([id]) => id), []);
  const active = useScrollSpy(ids);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const update = () => setProgress((window.scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight)) * 100);
    update(); window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <header className={styles.header}>
    <div className={styles.progress} style={{ width: `${progress}%` }} />
    <a className={styles.brand} href="#hero" aria-label="Về đầu trang"><span>R</span> RIDE NOW</a>
    <button className={styles.menu} onClick={() => setOpen(!open)} aria-label={open ? 'Đóng trình đơn' : 'Mở trình đơn'}>{open ? <X/> : <Menu/>}</button>
    <nav className={`${styles.nav} ${open ? styles.open : ''}`} aria-label="Điều hướng nội dung">
      {navigation.map(([id,label]) => <a key={id} className={active === id ? styles.active : ''} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
    </nav>
  </header>;
}
