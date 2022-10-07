import AboutMain from "../../components/AboutMain";
import Layout from "../../components/Layout";

export default function About() {
  const activeLink = "about"

  return (
    <Layout activeLink={activeLink}>
      <AboutMain/>
    </Layout>
  )
}