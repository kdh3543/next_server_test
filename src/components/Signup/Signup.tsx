import styles from '@/components/Signup/signup.module.css'

function Signup() {
  return (
    <div>
      <span>signup</span>
      <div>
        <input className={styles.signupInfor} type="text" placeholder="id" />
        <input className={styles.signupInfor} type="text" placeholder="pw" />
      </div>
      <button className={styles.submit}>회원가입</button>
    </div>
  )
}

export default Signup
