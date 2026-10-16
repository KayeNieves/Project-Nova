module.exports = {
  paymentGateway: {
    provider: "NovaPay",
    enabled: process.env.PAYMENT_GATEWAY_ENABLED === "true",
  },
};
