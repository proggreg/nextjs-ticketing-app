import TicketCard from "./(components)/TicketCard";
import Ticket from "../app/(models)/Ticket";
const getTickets = async () => {
  try {
    let data = await Ticket.find();
    console.log(data);
    return {tickets :data};
  } catch (err) {
    console.error(err);
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();
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

export default Dashboard;
