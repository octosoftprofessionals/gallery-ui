import React, { CSSProperties } from "react"

const Sectional: React.FC<{
  className?: string
  style?: CSSProperties
  innerStyle?: CSSProperties
}> = ({ children, className = "", style, innerStyle = {}, ...props }) => {
  return (
    <div
      className={className}
      {...props}
      style={{
        ...style,
        display: "flex",
        flexShrink: 0,
        justifyContent: "center",
      }}
    >
      <div
        style={{
          ...{
            maxWidth: "1180px",
            width: "100%",
            padding: "16px",
            boxSizing: "border-box",
          },
          ...innerStyle,
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Sectional
