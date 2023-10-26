import TicketCard from "./TicketCard";
const getTickets = async () => {
  try {
    let host = process.env.VERCEL_URL || "http://localhost:3000";

    const res = await fetch(host + "/api/Tickets", {
      cache: "no-store",
    });

    return res.json();
  } catch (err) {
    console.error(err);
  }
};

const DashBoard = async () => {
  const { tickets } = await getTickets();
  console.log(tickets);
  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

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
export default DashBoard;
