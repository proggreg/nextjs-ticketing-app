"use client";
import TicketCard from "./(components)/TicketCard";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  useEffect(() => {
    const getTickets = async () => {
      try {
        const res = await fetch("/api/Tickets", {
          cache: "no-store",
        });

        const { tickets } = await res.json();

        setTickets(tickets);
        setUniqueCategories([
          ...new Set(tickets?.map(({ category }) => category)),
        ]);
      } catch (error) {
        console.error("Failed to get tickets", error);
      }
    };

    getTickets();
  }, []);

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredticket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredticket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
