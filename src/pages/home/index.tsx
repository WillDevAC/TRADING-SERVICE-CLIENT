import React from "react";

import Link from "next/link";

import Layout from "../../components/layout/home";

import Slider from "../../components/home/slider";
import Option from "../../components/home/option";

import { ContainerOptions, LinkBox } from "../../template/home/styles";

import Cards from "../../json/cards.json";

const home: React.FC = () => {
  return (
    <>
      <Layout type="fixed">
        <Slider />

        <ContainerOptions>
          {Cards.map((card) => (
            <Link href={card.href}>
              <LinkBox>
                <Option
                  title={card.title}
                  icon={card.icon}
                  description={card.description}
                />
              </LinkBox>
            </Link>
          ))}
        </ContainerOptions>
      </Layout>
    </>
  );
};

export default home;
