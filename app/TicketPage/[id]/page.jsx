import TicketForm from "@/app/(components)/TicketForm";
const getTicketById = async (id) => {
  try {
    let host = process.env.API || "http:localhost:3000";
    const res = await fetch(host + `/api/Tickets/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to get ticket.");
    }

    return res.json();
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
