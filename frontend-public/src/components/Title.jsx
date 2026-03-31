import styles from './Title.module.css'
import { h } from '../../h.js'

export default function Title({ text }) {
  return <h1 class={styles.title}>{text}</h1>
}
