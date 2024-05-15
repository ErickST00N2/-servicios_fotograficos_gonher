require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

const router = require("./routes").default;
const Sitemap = require("react-router-sitemap").default;

new Sitemap(router)
  .build("https://serviciosfotograficosgonher.web.app")
  .save("./public/sitemap.xml");

console.log("Sitemap generado con éxito.");
