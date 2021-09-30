import {Response, Router} from 'express'
const routes = Router() 

routes.get('/', (_, response: Response) => {
  response.json({message: 'Hello Dev!'})
})

export default routes
