import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  `pk_test_51LpFDMSCZCwYbJiPg0Rkw1imTX8b9xOWp7pAPgBeXKbFH9nVsTxAGzG1xYCP30DH7whTYW8lNtJyUwKQLqF15zkQ00ibFgNcZj`
);
