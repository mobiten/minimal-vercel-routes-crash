import Prismic from '@prismicio/client'

const apiEndpoint = process.env.PRISMIC_API_ENDPOINT
const accessToken = process.env.PRISMIC_ACCESS_TOKEN

// Client method to query Prismic
const PrismicClient = Prismic.client(apiEndpoint, { accessToken })

import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { RichText } from 'prismic-reactjs'

export default function BlogPage({ name }): JSX.Element {
  return <h1>{name}</h1>
}

export const getStaticPaths: GetStaticPaths = async (_context) => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const citySlug = params.citySlug as string

  const graphQuery = `{
    city {
      ...cityFields
      body
    }
  }`

  const document = await PrismicClient.getByUID('city', citySlug, {
    graphQuery,
  })

  // If the page is null, the necessary content has not been found, we can return a 404
  if (!document || !document.data) {
    return null
  }

  // Otherwise we render the page
  return {
    props: { id: document.id, name: RichText.asText(document.data.name) },
    revalidate: 1,
  }
}
