import { getFeaturesData } from '../persistence'

export const getFeatures = () => new Promise((resolve, reject) => {
    resolve(getFeaturesData())
})