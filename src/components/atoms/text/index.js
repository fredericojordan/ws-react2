import * as React from 'react'

import styles from './styles.css'

const Text = props => <span className={styles.text}>{props.children}</span>

export default Text