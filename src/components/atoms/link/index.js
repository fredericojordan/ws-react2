import * as React from 'react'

import styles from './styles.css'

const Link = props => <a className={styles.link} href={props.href}>{props.children}</a>

export default Link