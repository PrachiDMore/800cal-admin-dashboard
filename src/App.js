import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/Signin";
import Restaurant from "./pages/restaurant/Restaurant";
import { SubscriptionContextProvider } from "./context/Subscriptions";
import { RestaurantContextProvider } from "./context/Restaurant";
import NewSubscriptions from "./pages/subscriptions/new-subscriptions/NewSubscriptions";
import AllSubscriptions from "./pages/subscriptions/all-subscriptions/AllSubscriptions";
import Customer from "./pages/customer/Customer";
import Rider from "./pages/rider/Rider";
import Programs from "./pages/programs/Programs";
import Withdrawal from "./pages/restaurant/Withdrawal";
import AllOrders from "./pages/orders/all-orders/AllOrders";
import { OrderContextProvider } from "./context/Orders";
import ProgramForm from "./pages/programs/ProgramForm";
import OrderDetails from "./pages/orders/OrderDetails";
import { ThemeContextProvider } from "./context/Theme";
import { RidersContextProvider } from "./context/Riders";
import RiderDetails from "./pages/rider/RiderDetails";
import Details from "./pages/Details/Details";
import { ProgramContextProvider } from "./context/Program";
import { GlobalContextProvider } from "./context/Global";

import Meals from "./pages/meals/Meals";
import MealForm from "./pages/meals/MealForm";
import { MealsContextProvider } from "./context/Meals";

import MealsApplication from "./pages/meals/MealsApplication";
import { MealApplicationContextProvider } from "./context/MealApplications";
import ViewSingleRestaurant from "./pages/restaurant/ViewSingleRestaurant";
import RestaurantOrders from "./pages/orders/RestaurantOrders";
import ProcessingOrders from "./pages/orders/processing/ProcessingOrders";
import CustomerDetails from "./pages/customer/CustomerDetails";
import ListIngredients from "./pages/ingredients/ListIngredients";
import CreateIngredients from "./pages/ingredients/create/Create";
import { IngredientsContextProvider } from "./context/Ingredients";
import Manager from "./pages/manager/Manager";
import ManagerDetails from "./pages/manager/ManagerDetails";

import { ManagerContextProvider } from "./context/Managers";

import AllTickets from "./pages/tickets/all-tickets/AllTickets";
import PendingTickets from "./pages/tickets/pending-tickets/PendingTickets";
import DetailTicket from "./pages/tickets/detail-ticket/DetailTicket";
import { TicketContextProvider } from "./context/Tickets";

function App() {
  return (
    <>
      <Router>
        <GlobalContextProvider>
          <ManagerContextProvider>
            <ThemeContextProvider>
              <RestaurantContextProvider>
                <RidersContextProvider>
                  <SubscriptionContextProvider>
                    <ProgramContextProvider>
                      <MealsContextProvider>
                        <MealApplicationContextProvider>
                          <OrderContextProvider>
                            <IngredientsContextProvider>
                              <TicketContextProvider>
                                <Routes>
                                  <Route path="/" element={<SignIn />} />

                                  <Route
                                    path="/restaurant"
                                    element={<Restaurant />}
                                  />
                                  <Route
                                    path="/restaurant/:_id"
                                    element={<ViewSingleRestaurant />}
                                  />
                                  <Route
                                    path="/billings"
                                    element={<Withdrawal />}
                                  />

                                  <Route
                                    path="/subscription/all"
                                    element={<AllSubscriptions />}
                                  />
                                  <Route
                                    path="/subscription/new"
                                    element={<NewSubscriptions />}
                                  />

                                  <Route
                                    path="/orders/all"
                                    element={<AllOrders />}
                                  />
                                  <Route
                                    path="/orders/new"
                                    element={<ProcessingOrders />}
                                  />
                                  <Route
                                    path="/order/:_id"
                                    element={<OrderDetails />}
                                  />
                                  <Route
                                    path="/order/restaurant/:_id"
                                    element={<RestaurantOrders />}
                                  />

                                  <Route
                                    path="/customer"
                                    element={<Customer />}
                                  />
                                  <Route
                                    path="/customer/:_id"
                                    element={<CustomerDetails />}
                                  />

                                  <Route path="/rider" element={<Rider />} />
                                  <Route
                                    path="/rider/:_id"
                                    element={<RiderDetails />}
                                  />

                                  <Route
                                    path="/programs"
                                    element={<Programs />}
                                  />
                                  <Route
                                    path="/program/add"
                                    element={<ProgramForm />}
                                  />
                                  <Route
                                    path="/program/:_id"
                                    element={<ProgramForm />}
                                  />

                                  <Route path="/meals" element={<Meals />} />
                                  <Route
                                    path="/meal/add"
                                    element={<MealForm />}
                                  />
                                  <Route
                                    path="/meal/:_id"
                                    element={<MealForm />}
                                  />
                                  <Route
                                    path="/meal/application"
                                    element={<MealsApplication />}
                                  />
                                  <Route
                                    path="/meal/application/:_id"
                                    element={<MealsApplication />}
                                  />

                                  <Route
                                    path="/details"
                                    element={<Details />}
                                  />

                                  <Route
                                    path="/accounts"
                                    element={<Withdrawal />}
                                  />

                                  <Route
                                    path="/ingredients"
                                    element={<ListIngredients />}
                                  />
                                  <Route
                                    path="/ingredients/create"
                                    element={<CreateIngredients />}
                                  />
                                  <Route
                                    path="/ingredients/:_id"
                                    element={<CreateIngredients />}
                                  />

                                  <Route
                                    path="/manager"
                                    element={<Manager />}
                                  />
                                  <Route
                                    path="/manager/:_id"
                                    element={<ManagerDetails />}
                                  />
                                  <Route
                                    path="/manager/create"
                                    element={<ManagerDetails />}
                                  />

                                  <Route
                                    path="/tickets/all"
                                    element={<AllTickets />}
                                  />
                                  <Route
                                    path="/tickets/pending"
                                    element={<PendingTickets />}
                                  />
                                  <Route
                                    path="/tickets/:id"
                                    element={<DetailTicket />}
                                  />
                                </Routes>
                              </TicketContextProvider>
                            </IngredientsContextProvider>
                          </OrderContextProvider>
                        </MealApplicationContextProvider>
                      </MealsContextProvider>
                    </ProgramContextProvider>
                  </SubscriptionContextProvider>
                </RidersContextProvider>
              </RestaurantContextProvider>
            </ThemeContextProvider>
          </ManagerContextProvider>
        </GlobalContextProvider>
      </Router>
    </>
  );
}

export default App;
