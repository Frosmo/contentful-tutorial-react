import React from 'react'
import styles from './hero.module.css'

class Hero extends React.Component {
  render () {
    const data = this.props.data
    const imgSrc = `${data.image.fields.file.url}?w=1180&h=480&q=50&fm=webp&fit=pad&bg=rgb%3A000000`

    return (
      <div className={styles.hero}>
        <img className={styles.heroImage} alt={data.name} src={imgSrc} />
        <div className={styles.heroDetails}>
          <h3 className={styles.heroHeadline}>{data.name}</h3>
          <p className={styles.heroTitle}>{data.title}</p>
          <p>{data.company}</p>
        </div>
      </div>
    )
  }
}

export default Hero