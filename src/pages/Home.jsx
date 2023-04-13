import React from "react";
import Container from "../components/00_container/container";
import Header from "../components/00_container/01_header/Header";
import Search from "../components/00_container/02_search/Search";
import Hero from "../components/00_container/03_hero/Hero";
import Recipes from "../components/00_container/04_recipes/Recipes";
import Footer from "../components/00_container/05_footer/Footer";

export default function Home() {
  return (
    <Container>
      <Header />
      <Search />
      <Hero />
      <Recipes />
      <Footer />
    </Container>
  );
}
