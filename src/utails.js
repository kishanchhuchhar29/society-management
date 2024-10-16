export function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return re.test(email)
  }
  
  export function validatePassword(password) {
    return password.length >= 8 && /[A-Z]/.test(password)
  }