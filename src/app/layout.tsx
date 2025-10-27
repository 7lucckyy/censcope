import { homeMetadata } from '@/config/metadata';

import "./global.css";

export const metadata = homeMetadata

export default function Layout(properties: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body>{properties.children}</body>
    </html>
  );
}
