import TicketForm from "../../../app/(components)/TicketForm";
import Ticket from "../../(models)/Ticket";
const getTicketById = async (id) => {
  try {
    let foundTicket = await Ticket.findOne({ _id: id });
    return { foundTicket };
  } catch (error) {
    console.error(error);
  }
};

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;
  let updateTicketData = {};
  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }
  return (
    <div>
      <TicketForm ticket={updateTicketData} />
    </div>
  );
};

export default TicketPage;
