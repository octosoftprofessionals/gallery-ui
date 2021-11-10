import { OpenSeaPort, Network } from 'opensea-js'
import config from '../config'

const getSeaport = async () => {
  const seaport = new OpenSeaPort(
    window.ethereum,
    {
      networkName: Network.Main,
      apiKey: config.OPENSEA_API_KEY,
    },
    arg => console.log('HERE ARGS PROVIDER :>>', arg)
  )
  return seaport
}

export default getSeaport
