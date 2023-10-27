import Ticket from "../app/(models)/Ticket";
import { cache } from "react";

export const dynamic = "force-dynamic";
export const getTickets = cache(async () => {
  let tickets = await Ticket.find({});
  return tickets;
});
