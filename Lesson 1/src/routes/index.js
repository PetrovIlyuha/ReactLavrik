import Cart from "~p/cart";
import Order from "~p/order";
import Result from "~p/result";

let routes = [
  {
    url: "/",
    component: Cart,
    exact: true,
    id: 1,
    name: "home"
  },
  {
    url: "/order",
    component: Order,
    exact: true,
    id: 2,
    name: "order"
  },
  {
    url: "/done",
    component: Result,
    exact: true,
    id: 3,
    name: "result"
  }
];

let routesMap = {};

routes.forEach(route => {
  routesMap[route.name] = route.url;
});
export default routes;
export { routesMap };
