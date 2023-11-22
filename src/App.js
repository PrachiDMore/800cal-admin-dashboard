import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './pages/Signin';
import Restaurant from './pages/restaurant/Restaurant';
import { SubscriptionContextProvider } from './context/Subscriptions';
import { RestaurantContextProvider } from './context/Restaurant';
import NewSubscriptions from './pages/subscriptions/new-subscriptions/NewSubscriptions';
import AllSubscriptions from './pages/subscriptions/all-subscriptions/AllSubscriptions';
import Customer from './pages/customer/Customer';
import Rider from './pages/rider/Rider';
import Programs from './pages/programs/Programs';
import AllOrders from './pages/orders/all-orders/AllOrders';
import { OrderContextProvider } from './context/Orders';
import ProgramForm from './pages/programs/ProgramForm';
import OrderDetails from './pages/orders/OrderDetails';
import { ThemeContextProvider } from './context/Theme';
import { RidersContextProvider } from './context/Riders';
import RiderDetails from './pages/rider/RiderDetails';
import Details from './pages/Details/Details';
import { ProgramContextProvider } from './context/Program';
import { GlobalContextProvider } from './context/Global';

import Meals from './pages/meals/Meals';
import MealForm from './pages/meals/MealForm';
import { MealsContextProvider } from './context/Meals';

import MealsApplication from './pages/meals/MealsApplication';
import { MealApplicationContextProvider } from './context/MealApplications';

function App() {
  return (
    <>
      <Router>
        <GlobalContextProvider>
          <ThemeContextProvider>
            <RestaurantContextProvider>
              <RidersContextProvider>
                <SubscriptionContextProvider>
                  <ProgramContextProvider>
                    <MealsContextProvider>
                      <MealApplicationContextProvider>
                        <OrderContextProvider>
                          <Routes>
                            <Route path="/" element={<SignIn />} />


                            <Route path="/restaurant" element={<Restaurant />} />


                            <Route path="/subscription/all" element={<AllSubscriptions />} />
                            <Route path="/subscription/new" element={<NewSubscriptions />} />


                            <Route path="/orders/all" element={<AllOrders />} />
                            <Route path="/orders/new" element={<NewSubscriptions />} />
                            <Route path="/order/:_id" element={<OrderDetails />} />


                            <Route path="/customer" element={<Customer />} />


                            <Route path="/rider" element={<Rider />} />
                            <Route path="/rider/:_id" element={<RiderDetails />} />


                            <Route path="/programs" element={<Programs />} />
                            <Route path="/program/add" element={<ProgramForm />} />
                            <Route path="/program/:_id" element={<ProgramForm />} />

                            <Route path="/meals" element={<Meals />} />
                            <Route path="/meal/add" element={<MealForm />} />
                            <Route path="/meal/:_id" element={<MealForm />} />
                            <Route path="/meal/application" element={<MealsApplication />} />

                            <Route path="/details" element={<Details />} />
                          </Routes>
                        </OrderContextProvider>
                      </MealApplicationContextProvider>
                    </MealsContextProvider>
                  </ProgramContextProvider>
                </SubscriptionContextProvider>
              </RidersContextProvider>
            </RestaurantContextProvider>
          </ThemeContextProvider>
        </GlobalContextProvider>
      </Router>
    </>
  );
}

export default App;
