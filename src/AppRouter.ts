import express from 'express';

export class AppRouter {
  private static instance: express.Router;      // create a static instance of express.Router (singleton)

  static getInstance(): express.Router {
    if (!AppRouter.instance) {
      AppRouter.instance = express.Router();
    }

    return AppRouter.instance;
  }
}