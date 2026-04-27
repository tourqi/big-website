// src/lib/PageMeta.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_NAME = "Bogor Interior Garage";
const SITE_DESC =
  "Interior custom, kitchen set, renovasi & furnitur — Bogor, Jakarta, dan sekitarnya. Konsultasi gratis, harga transparan.";

export default function PageMeta({ title, description, canonical }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const desc = description || SITE_DESC;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:site_name" content={SITE_NAME} />
    </Helmet>
  );
}
