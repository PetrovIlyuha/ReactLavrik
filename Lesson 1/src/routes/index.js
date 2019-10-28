import Cart from "~p/cart";
import Order from "~p/order";
import Result from "~p/result";
import Page404 from "~p/Error404";
import Post from "~p/post";

let routes = [
  {
    url: "/",
    component: Cart,
    exact: true,
    name: "home"
  },
  {
    url: "/order",
    component: Order,
    exact: true,
    name: "order"
  },
  {
    url: "/done",
    component: Result,
    exact: true,
    name: "result"
  },
  {
    name: "blogPost",
    url: "news/:url",
    component: Post,
    exact: true
  },
  {
    url: "**",
    component: Page404
  }
];

let routesMap = {};

routes.forEach(route => {
  if (route.hasOwnProperty("name")) {
    routesMap[route.name] = route.url;
  }
});

let urlBuilder = function(name, params) {
  if (!routesMap.hasOwnProperty(name)) {
    return null;
  }

  let url = routesMap[name];
  for (let key in params) {
    url = url.replace(":" + key, params[key]);
  }
  return url;
};
export default routes;
export { routesMap, urlBuilder };
