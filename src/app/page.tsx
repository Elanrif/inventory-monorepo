'use client';
import GridSofa from '@/components/custom/body/grid-sofa';
import Header from '@/components/custom/header/header';
import SubHeader from '@/components/custom/header/sub-header';
import SubCardSofa from '@/components/custom/body/sub-card-sofa';
import Banner from '@/components/custom/body/banner';
import Footer from '@/components/custom/footer/footer';
import SubFooter from '@/components/custom/footer/sub-footer';
import { NavMain } from '@/components/nav-main';

export default function Home() {
  return (
    <>
      <Header />
      <SubHeader />
      <GridSofa />
      <SubCardSofa />
      <Banner />
      <Footer />
      <SubFooter />
    </>
  );
}
