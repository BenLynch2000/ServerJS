
import { Request, Response } from 'express';
import { get, use, controller } from './decorators';
import { requireAuth } from './middlewares';

@controller('')
class RouteController {
  @get('/')
  getRoot(req: Request, res: Response) {
      if (req.session && req.session.loggedIn) {
        res.send(`
          <div>
            <div>You are logged in</div>
            <a href="/auth/logout">Logout</a>
          </div>
        `);
      } else {
        res.send(`
          <div>
            <div>You are not logged in</div>
            <a href="/auth/login">Login</a>
          </div>
        `);
      }
  }

  @get('/protected')
  @use(requireAuth.requireAuth)
  async getProtected(req: Request, res: Response) {
    res.send('Welcome to protected route, logged in user');
  }

}