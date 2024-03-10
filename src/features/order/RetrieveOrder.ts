import { Order } from "@prisma/client";
import { prisma } from "../../common/lib"

export default function RetrieveOrder(email: string): Promise<Order | null> {
    return prisma.user.findFirst({
        where: {
          email: email,
        },
      })
      .then((user) => {
        if (user) {
          return prisma.order.findFirst({
            where: {
              user_id: user.id,
              paid: false,
            },
          });
        } else {
          return null;
        }
      })
      .catch((error) => {
        console.error("Error retrieving order:", error);
        throw new Error("An error occurred during order retrieval.");
      });
  }