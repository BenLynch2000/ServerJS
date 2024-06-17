import { Request, Response, NextFunction } from 'express';

export class requireAuth {
    static requireAuth(req: Request, res: Response, next: () => void) {
      if (req.session && req.session.loggedIn) {
        next();
        return;
      }
    
      res.status(403);
      res.send('Not permitted');
    }
}