export interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  publishDate: string;
  updatedDate?: string;
  author: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function organizationSchema(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MyTripTip',
    url: siteUrl,
    logo: `${siteUrl}/images/logo.svg`,
    description:
      'Practical Korea travel guides for first-time visitors. Honest recommendations for hotels, tours, transport, and eSIM.',
  };
}

export function articleSchema(props: ArticleSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: props.title,
    description: props.description,
    url: props.url,
    image: props.image,
    datePublished: props.publishDate,
    dateModified: props.updatedDate ?? props.publishDate,
    author: {
      '@type': 'Person',
      name: props.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'MyTripTip',
    },
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
