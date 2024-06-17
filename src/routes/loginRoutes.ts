/*
  This is no longer used and could be removed but keeping as reference.
*/

/*

import { Router, Request, Response } from 'express';

const router = Router();

export { router };

*/

/*
function post(routeName: string) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    const routeHandler = target[key];

    if (!routeHandler) {
      return;
    }

    router.post(routeName, routeHandler);
  }
}

function get(routeName: string) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    const routeHandler = target[key];

    if (!routeHandler) {
      return;
    }

    router.get(routeName, routeHandler);
  }
}

function use(middleware: any) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    const routeHandler = target[key];

    if (!routeHandler) {
      return;
    }

    router.use(middleware);
  }
}

*/
