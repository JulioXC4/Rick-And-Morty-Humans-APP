import { getHumans } from '@/app/services/public.service'
import Landing from '@/app/components/landing/Landing'

async function getData() {
    const response = await getHumans()
    if (response.status !== 200) {
      throw new Error('Failed to fetch data')
    }
   
    return response.data
  }

async function Home() {
  
  const characters: any = await getData()
  return (
    <Landing characters={characters}/>
  )
}

export default Home