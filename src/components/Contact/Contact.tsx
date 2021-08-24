import React from 'react'
import ContactSearch from './ContactSearch/ContactSearch'
import styles from './Contact.module.scss'
import Conversations from './Conversations/Conversations'

const Contact = () => {
    return (
        <div className={styles.contact}>
            <ContactSearch></ContactSearch>
            <Conversations></Conversations>
        </div>
    )
}

export default Contact
