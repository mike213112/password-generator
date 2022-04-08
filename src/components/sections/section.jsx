import React from 'react'
import './section.css'

const Section = () => {
  const titleInput = 'The password will be displayed in this field'
  const letters = 'a b c d e f g h i j k l m n ñ o p q r s t u v w x y z'
  const letter = 'A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z'
  const symbols = '! @ # $ % ^ & * ( ) > <'
  const numbers = '0 1 2 3 4 5 6 7 8 9'

  const ButtonGeneratePassword = () => {
    const union = `${letters}${letter}${symbols}${numbers}`
    union.trim()
    const generate = union.split(' ')
    // console.log(generate);
    let password = ''

    for(let i = 0; i < 8; i++) {
      password += generate[Math.floor(Math.random() * generate.length)]
    }

    const selectInput = document.getElementsByClassName('input')[0]
    selectInput.value = password
  }

  return (
    <>
      <div className="section">
        <input className="input" disabled placeholder={titleInput} />
        <button className="generate-button" onClick={ButtonGeneratePassword} type='button'>Generate Password</button>
      </div>
    </>
  )
}

export default Section
