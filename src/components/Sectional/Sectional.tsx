import React, { CSSProperties } from "react"
import styles from './Sectional.module.css';

const Sectional: React.FC<{
  className?: string
  style?: CSSProperties
  innerStyle?: CSSProperties
}> = ({ children, className = "", style, innerStyle = {}, ...props }) => {
  return (
    <div
      className={[className, styles.container].join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export default Sectional
