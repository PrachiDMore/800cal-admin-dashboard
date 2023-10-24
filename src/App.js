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

function App() {
  return (
    <>
      <Router>
        <RestaurantContextProvider>
          <SubscriptionContextProvider>
            <OrderContextProvider>
              <Routes>
                <Route path="/" element={<SignIn />} />


                <Route path="/restaurant" element={<Restaurant />} />


                <Route path="/subscription/all" element={<AllSubscriptions />} />
                <Route path="/subscription/new" element={<NewSubscriptions />} />


                <Route path="/orders/all" element={<AllOrders />} />
                <Route path="/orders/new" element={<NewSubscriptions />} />


                <Route path="/customer" element={<Customer />} />


                <Route path="/rider" element={<Rider />} />


                <Route path="/programs" element={<Programs />} />
                <Route path="/program/add" element={<ProgramForm />} />
              </Routes>
            </OrderContextProvider>
          </SubscriptionContextProvider>
        </RestaurantContextProvider>
      </Router>
    </>
  );
}

export default App;
