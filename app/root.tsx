import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/app.css";

export function links(){
  return [{ rel: "stylesheet", href: styles}]
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Budget Runner",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
			<link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png"></link>
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png"></link>
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png"></link>
			<link rel="manifest" href="/favicon_io/site.webmanifest"></link>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
