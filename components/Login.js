import { useState } from 'react';
import LoginForm from './LoginForm';
import SecurityModal from './SecurityModal';

function Login() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {!showModal && <LoginForm setShowModal={setShowModal} />}
      {showModal && <SecurityModal setShowModal={setShowModal} />}
    </>
  );
}

export default Login;
