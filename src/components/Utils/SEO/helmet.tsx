import React from 'react';
import { Helmet } from 'react-helmet';

interface IHelmet {
  title: string;
  name: string;
  content: string;
}

export default function SEO({ title, name, content }: IHelmet) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name={name} content={content} />
    </Helmet>
  );
}
