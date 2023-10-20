import client from "@sanity/client"

export default client({
    projectId: "ahw9svuc",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-09-27"
})