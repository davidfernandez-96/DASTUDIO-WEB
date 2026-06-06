export const metadata = {
  title: "DA Studio | Code. Design. Create.",
  description:
    "DA Studio crea sitios web modernos, rápidos y funcionales para marcas, negocios y emprendedores.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
