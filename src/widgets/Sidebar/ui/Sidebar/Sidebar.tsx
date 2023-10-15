import { classNames } from "shared/lib/classNames";
import styles from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapled] = useState(false);

  const handleClick = () => {
    setCollapled(prevState => !prevState);
  };

  return (
    <div className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}> 
      <button onClick={handleClick}>Toggle sidebar</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} />
      </div>
    </div>
  )
}

export default Sidebar;