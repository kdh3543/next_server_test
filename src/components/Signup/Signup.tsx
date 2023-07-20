import styles from '@/components/Signup/signup.module.css'
import axios from 'axios'
import { useState } from 'react'

interface SignupType {
  id: string
  pw: string
}

function Signup() {
  const [signUpData, setSignUpData] = useState<SignupType>({
    id: '',
    pw: '',
  })

  const inputSignUpData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSignUpData((prev) => ({ ...prev, [name]: value }))
  }

  const onSignUp = async () => {
    console.log(signUpData)
    await fetch('/api/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(signUpData),
    }).then((res) => {
      console.log(res)
    })
  }

  return (
    <div>
      <span
        style={{
          fontSize: '15px',
          fontWeight: 'bold',
        }}
      >
        SIGNUP
      </span>
      <div>
        <input
          name="id"
          className={styles.signupInfor}
          type="text"
          placeholder="id"
          onChange={(e) => inputSignUpData(e)}
        />
        <input
          name="pw"
          className={styles.signupInfor}
          type="text"
          placeholder="pw"
          onChange={(e) => inputSignUpData(e)}
        />
      </div>
      <button onClick={onSignUp} className={styles.submit}>
        회원가입
      </button>
    </div>
  )
}

export default Signup
