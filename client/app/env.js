export const dev = window.location.origin.includes('localhost')
export const baseURL = dev ? 'http://localhost:3000' : ''
export const useSockets = false
export const domain = 'swanky.us.auth0.com'
export const audience = 'https://swanky.com'
export const clientId = 'yrk8rIXdLCdPxwEJTIKeOyeczNqZXx2R'