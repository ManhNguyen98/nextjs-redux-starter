import Navbar from './components/navbar/Navbar'

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <div className="wrapper d-flex flex-column justify-between">
      <Navbar />
      <main className="flex-grow-1">{children}</main>
    </div>
  )
}
