import React, { useEffect } from "react";
import NavItem from "./NavItem";
import GoogleTranslate from "./GoogleTranslate";
import { UseSubscriptionContext } from "../context/Subscriptions";
import { UseOrderContext } from "../context/Orders";
import { UseProgramContext } from "../context/Program";
import { UseMealsContext } from "../context/Meals";
import { UseTicketContext } from "../context/Tickets";

const Navbar = () => {
  const { subscriptions } = UseSubscriptionContext();
  const { orders } = UseOrderContext();
  const { programs } = UseProgramContext();
  const { meals } = UseMealsContext();
  const { tikets } = UseTicketContext();

  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "ur",
          },
          "google_translate_element"
        );
      };
    }
  }, []);

  return (
    <>
      <div className="w-1/5 p-5 Lexend border-r border-textGray max-h-screen h-screen overflow-scroll">
        <div>
          <img className="h-20 w-20" src="/assets/logo.png" alt="" />
        </div>
        <div className="text-white grid grid-cols-1 gap-2">
          <NavItem
            link={{
              url: "/dashboard",
              title: "Dashboard",
            }}
          />
          <NavItem
            link={{
              url: "/restaurant",
              title: "Restaurant",
            }}
          />
          <NavItem
            title={"Subscriptions"}
            items={[
              {
                url: "/subscription/all",
                title: "All Subscriptions",
                number: subscriptions?.length,
              },
              {
                url: "/subscription/new",
                title: "New Subscriptions",
                number: subscriptions?.filter((data) => {
                  return data?.order_status === "new";
                }).length,
              },
              // {
              //   url: "/confirmed-orders",
              //   title: "Confirmed Orders",
              //   number: 2
              // },
              // {
              //   url: "/completed-orders",
              //   title: "Completed Orders",
              //   number: 2
              // },
              // {
              //   url: "/cancelled-orders",
              //   title: "Cancelled Orders",
              //   number: 2
              // }
            ]}
          />
          <NavItem
            title={"Orders"}
            items={[
              {
                url: "/orders/all",
                title: "All Orders",
                number: orders?.length,
              },
              {
                url: "/orders/new",
                title: "New Orders",
                number: orders?.filter((e) => e.status === "processing").length,
              },
              // {
              //   url: "/confirmed-orders",
              //   title: "Confirmed Orders",
              //   number: 2
              // },
              // {
              //   url: "/completed-orders",
              //   title: "Completed Orders",
              //   number: 2
              // },
              // {
              //   url: "/cancelled-orders",
              //   title: "Cancelled Orders",
              //   number: 2
              // }
            ]}
          />
          <NavItem
            link={{
              url: "/customer",
              title: "Customer",
            }}
          />
          <NavItem
            title={"Program"}
            items={[
              {
                url: "/programs",
                title: "Programs",
                number: programs?.length,
              },
              {
                url: "/program/add",
                title: "Add Program",
              },
            ]}
          />
          <NavItem
            title={"Meals"}
            items={[
              {
                url: "/meals",
                title: "Meals",
                number: meals?.length,
              },
              {
                url: "/meal/add",
                title: "Add Meal",
              },
              {
                url: "/meal/application",
                title: "Meals Application",
              },
            ]}
          />
          {localStorage.getItem("role") === "admin" && (
            <NavItem
              link={{
                url: "/accounts",
                title: "Accounts",
              }}
            />
          )}
          <NavItem
            link={{
              url: "/rider",
              title: "Rider",
            }}
          />
          <NavItem
            title={"Ingredients"}
            items={[
              {
                url: "/ingredients",
                title: "Ingredients",
                // number: meals?.length
              },
              {
                url: "/ingredients/create",
                title: "Add Ingredient",
              },
            ]}
          />
          {localStorage.getItem("role") === "admin" && (
            <NavItem
              title={"Manager"}
              items={[
                {
                  url: "/manager",
                  title: "Managers",
                  // number: meals?.length
                },
                {
                  url: "/manager/create",
                  title: "Add Manager",
                },
              ]}
            />
          )}
          {/* <NavItem link={{
            url: "/rider/restaurant",
            title: "Restaurant Rider"
          }} /> */}
          {/* <NavItem link={{
            url: "/reviews",
            title: "Reviews"
          }} /> */}
          <NavItem
            link={{
              url: "/details",
              title: "Details",
            }}
          />
          <NavItem
            title={"Tickets"}
            items={[
              {
                url: "/tickets/all",
                title: "All Tickets",
                number: tikets?.length,
              },
              {
                url: "/tickets/pending",
                title: "Pending Tickets",
                number: tikets?.filter((data) => data.status === "new").length,
              },
            ]}
          />
        </div>

        <div id="google_translate_element"></div>
      </div>
    </>
  );
};

export default Navbar;
