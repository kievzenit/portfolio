import Layout from "../components/Layout";
import HomeMain from "../components/HomeMain";

export default function Home() {
  const activeLink = "home"

  return (
    <Layout activeLink={activeLink}>
      <HomeMain/>
    </Layout>
  )
}
