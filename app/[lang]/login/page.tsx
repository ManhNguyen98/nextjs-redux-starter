import Link from 'next/link'

export default function LoginPage({ params }: { params: { lang: string } }) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="box-border shadow-md p-3 border rounded-md w-[400px] h-[400px] text-center flex flex-col justify-between">
        <h2>Login Form</h2>
        <Link href={`/${params.lang}`} className="text-purple-700">
          Go back home
        </Link>
      </div>
    </div>
  )
}
