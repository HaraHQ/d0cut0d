import * as React from "react"
import DefaultLayout from "../components/layouts/default.layout";

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

export const Head = () => <title>Home Page</title>
