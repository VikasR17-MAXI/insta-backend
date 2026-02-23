export default [
  "strapi::errors",
  {
    name: "strapi::cors",
    config: {
      origin: ["*"],
      headers: "*",
    },
  },
  "strapi::security",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];