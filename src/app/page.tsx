import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Portfolio Juca',
  description: 'Portfolio',
  openGraph: {
    title: 'Utilizando NextJs',
    description: 'Portfolio'
  }
}

export default function Home(){
  return(
    <div>
      <h1>Jucas</h1> 
    </div>
  )
}