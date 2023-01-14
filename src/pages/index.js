import * as React from "react"
import DefaultLayout from "../components/layouts/default.layout";
import ogImage from "../../public/og_image.gif"

const IndexPage = () => {
  return (
    <DefaultLayout>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </DefaultLayout>
  )
}

export default IndexPage

export const Head = () => {
  return (
    <>
      <title>Docutod</title>
      <meta property="og:title" content="Docutod" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="256" />
      <meta property="og:image:height" content="256" />
    </>
  )
}