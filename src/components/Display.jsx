import React from 'react'
import styles from "./Display.module.css"
 
const Display = ({inp}) => {
  return (
    <div>
       <input type="text" className={styles.display}   value={inp}
       readOnly>
        </input>
    </div>
  )
}
// readOnly done to avoid writing in that input area
export default Display
