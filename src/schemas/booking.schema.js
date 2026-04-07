
import { z } from "zod";

export const BookingFormatSchema = z.enum(["phone", "zoom"]);

export const BookingSchema = z.object({
  sessionId:  z.string().min(1, "Session ID is required"),
  format:     BookingFormatSchema,
  slotTime:   z.string().datetime({ message: "Invalid slot time" }),
  leadEmail:  z
    .string()
    .email("Please enter a valid email address")
    .optional(),
  leadPhone:  z
    .string()
    .regex(/^(\+44|0)[0-9]{9,10}$/, "Please enter a valid UK phone number")
    .optional(),
}).refine(
  (data) => data.leadEmail || data.leadPhone,
  { message: "Please provide either an email or phone number" }
);