import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Taiuá Ambiental - Um lugar incrível para momentos especiais",
    short_name: "Taiuá Ambiental",
    description:
      "Pousada e Camping Taiuá Ambiental, um lugar incrível para quem busca uma experiência única e sustentável em contato com a natureza.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    // icons: [
    //   {
    //     src: "/favicon.ico",
    //     sizes: "48x48",
    //     type: "image/x-icon",
    //   },
    //   {
    //     src: "/icon.png",
    //     sizes: "16x16",
    //     type: "image/png",
    //   },
    //   {
    //     src: "/icon2.png",
    //     sizes: "32x32",
    //     type: "image/png",
    //   },
    //   {
    //     src: "/apple-icon.png",
    //     type: "image/png",
    //   },
    // ],
  };
}
