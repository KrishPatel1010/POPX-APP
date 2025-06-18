import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-[340px] h-full flex flex-col justify-end bg-[#F8F9FB] pb-10 px-6">
        <div className='container'>
          <h1>Welcome to PopX</h1>
          <p>
            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,
          </p>
          </div>
          <div className='button-container'>
          <button
            onClick={() => navigate('/create-account')}
            className="w-full bg-[#6C47FF] text-white py-3 rounded-lg text-sm font-bold create-button"
          >
            Create Account
          </button>
          <button
            onClick={() => navigate('/login')}
            className="w-full mt-3 bg-[#EDE9FE] text-[#3F3F46] py-3 rounded-lg text-sm font-semibold login-button"
          >
            Already Registered? Login
          </button>
          </div>
        </div>
      </div>
  )
}

export default Home
