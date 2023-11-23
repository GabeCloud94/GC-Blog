import AuthForm from './auth-form'

export default function Home() {
  return (
    <div className="row flex flex-col items-center justify-center h-screen gap-4">
      <div className="max-w-md md:max-w-lg text-center">
        <h1 className="header text-3xl mb-4">Welcome to Gabe Cloud's Blog</h1>
        <p className='text-lg'>
          Please login to continue.
        </p>
      </div>
      <div className="auth-widget">
        <AuthForm />
      </div>
    </div>
  )
}
