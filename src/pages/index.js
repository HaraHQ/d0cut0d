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

export const Head = () => {
  return (
    <>
      <title>Docutod</title>
      <meta property="og:title" content="Docutod" />
      <meta property="og:image" content="https://lh4.googleusercontent.com/qMhAhZstz_q-VSiKxVJmolEpJ4hiG_Nqhx7FlPBlWq2CF6YDLQMx_VLT7iLhjnOtsn50IQcRsO-Y0uc9nXgychOqAlkh7THK4wWNHXqM8jQnGGUBTwovXpjrSK3f5DMhKzYAZ-eOCzbLxEbXS6A_J0oVYkbgbNHcgCXY=w1280" />
      <meta property="og:image:width" content="256" />
      <meta property="og:image:height" content="256" />
    </>
  )
}