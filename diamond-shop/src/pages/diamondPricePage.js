import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/navBar';
import { Breadcrumbs, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { routes } from '../routes';
import Footer from '../components/footer';


const HeaderSection = styled.section`
  background-color: white;
  color: black;
  padding: 20px;
  text-align: center;
  font-family: 'Playwrite IT Moderna', sans-serif;
  font-weight: 500;
  font-size: 18px;
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  font-size: 1.3em;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1em;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const Note = styled.p`
  font-size: 0.9em;
  color: #212121; 
`;

const NavbarContainer = styled.div`
  background-color: #e0e0e0;
  padding: 10px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px; 
  top: 0;
  z-index: 1000;
`;

const NavbarList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const NavbarItem = styled.li`
  margin: 0 15px;
  display: flex;
  align-items: center;
`;

const NavbarLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Figtree', sans-serif;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 5px; 
  &:hover {
    background-color: black;
    color: white;
    text-decoration: none;
  }
`;

const PageContainer = styled.div`
  padding-top: 0; 
`;

const Section = styled.section`
  padding: 20px;
  background: white;
  color: black;
  font-family: 'Kanit', sans-serif;
`;

const SectionHeader = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Nunito', sans-serif;
  color: black; 
  
  span {
    color: red; 
  }
`;

const TableContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  font-family: 'Figtree', sans-serif;
`;

const PriceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  background: #212121;
  color: white;
  padding: 10px;
  text-align: center;
`;

const TableCell = styled.td`
  border: 1px solid #555;
  padding: 10px;
  text-align: center;
`;

const DiamondPricePage = () => {
    const data = [
        {
            size: "3.6mm",
            prices: [
                { grade: "D", if: "10,800,000", vvs1: "9,800,000", vvs2: "8,800,000", vs1: "8,200,000", vs2: "7,000,000" },
                { grade: "E", if: "10,500,000", vvs1: "9,200,000", vvs2: "8,000,000", vs1: "7,200,000", vs2: "5,000,000" },
                { grade: "F", if: "9,800,000", vvs1: "9,100,000", vvs2: "8,000,000", vs1: "6,000,000", vs2: "3,900,000" },
                { grade: "J", if: "8,000,000", vvs1: "7,800,000", vvs2: "6,500,000", vs1: "6,200,000", vs2: "5,300,000" },
            ],
        },
        {
            size: "3.9mm",
            prices: [
                { grade: "D", if: "12,900,000", vvs1: "11,500,000", vvs2: "10,000,000", vs1: "10,600,000", vs2: "9,500,000" },
                { grade: "E", if: "12,400,000", vvs1: "10,800,000", vvs2: "9,000,000", vs1: "8,800,000", vs2: "7,500,000" },
                { grade: "F", if: "11,500,000", vvs1: "10,200,000", vvs2: "9,000,000", vs1: "8,000,000", vs2: "6,600,000" },
                { grade: "J", if: "10,100,000", vvs1: "9,800,000", vvs2: "7,000,000", vs1: "6,800,000", vs2: "6,600,000" },
            ],
        },
        {
            size: "4.1mm",
            prices: [
                { grade: "D", if: "20,433,000", vvs1: "16,147,000", vvs2: "15,289,000", vs1: "12,311,000", vs2: "11,635,000" },
                { grade: "E", if: "19,576,000", vvs1: "15,289,000", vvs2: "14,432,000", vs1: "11,635,000", vs2: "10,913,000" },
                { grade: "F", if: "18,718,000", vvs1: "14,432,000", vvs2: "13,575,000", vs1: "10,913,000", vs2: "10,191,000" },
                { grade: "J", if: "10,200,000", vvs1: "9,800,000", vvs2: "9,100,000", vs1: "7,100,000", vs2: "6,000,000" },
            ],
        },
        {
            size: "4.5mm",
            prices: [
                { grade: "D", if: "24,800,000", vvs1: "21,200,000", vvs2: "19,800,000", vs1: "18,500,000", vs2: "16,000,000" },
                { grade: "E", if: "22,600,000", vvs1: "19,200,000", vvs2: "17,500,000", vs1: "16,100,000", vs2: "14,900,000" },
                { grade: "F", if: "21,900,000", vvs1: "18,100,000", vvs2: "16,000,000", vs1: "14,800,000", vs2: "12,000,000" },
                { grade: "J", if: "14,000,000", vvs1: "13,800,000", vvs2: "13,200,000", vs1: "12,900,000", vs2: "10,500,000" },
            ],
        },
        {
            size: "5.0mm",
            prices: [
                { grade: "D", if: "39,000,000", vvs1: "36,500,000", vvs2: "35,000,000", vs1: "32,000,000", vs2: "30,500,000" },
                { grade: "E", if: "38,100,000", vvs1: "35,800,000", vvs2: "33,000,000", vs1: "30,100,000", vs2: "29,000,000" },
                { grade: "F", if: "32,200,000", vvs1: "31,100,000", vvs2: "26,000,000", vs1: "23,000,000", vs2: "20,200,000" },
                { grade: "J", if: "25,300,000", vvs1: "23,800,000", vvs2: "24,500,000", vs1: "49,900,000", vs2: "18,000,000" },
            ],
        },
        {
            size: "5.2mm",
            prices: [
                { grade: "D", if: "54,500,000", vvs1: "52,800,000", vvs2: "49,800,000", vs1: "46,600,000", vs2: "42,100,000" },
                { grade: "E", if: "52,000,000", vvs1: "50,200,000", vvs2: "47,200,000", vs1: "45,100,000", vs2: "40,800,000" },
                { grade: "F", if: "35,000,000", vvs1: "33,300,000", vvs2: "30,200,000", vs1: "27,100,000", vs2: "24,800,000" },
                { grade: "J", if: "32,000,000", vvs1: "31,100,000", vvs2: "28,200,000", vs1: "25,300,000", vs2: "22,500,000" },
            ],
        },
        {
            size: "5.3mm",
            prices: [
                { grade: "D", if: "55,900,000", vvs1: "54,800,000", vvs2: "52,000,000", vs1: "48,800,000", vs2: "46,800,000" },
                { grade: "E", if: "54,200,000", vvs1: "53,300,000", vvs2: "51,900,000", vs1: "49,000,000", vs2: "45,200,000" },
                { grade: "F", if: "49,600,000", vvs1: "48,000,000", vvs2: "46,800,000", vs1: "43,600,000", vs2: "42,000,000" },
                { grade: "J", if: "34,800,000", vvs1: "32,100,000", vvs2: "30,800,000", vs1: "29,500,000", vs2: "28,200,000" },
            ],
        },
        {
            size: "5.4mm",
            prices: [
                { grade: "D", if: "79,200,000", vvs1: "75,200,000", vvs2: "69,900,000", vs1: "66,300,000", vs2: "62,900,000" },
                { grade: "E", if: "68,800,000", vvs1: "66,300,000", vvs2: "64,600,000", vs1: "58,000,000", vs2: "53,500,000" },
                { grade: "F", if: "59,200,000", vvs1: "56,500,000", vvs2: "49,800,000", vs1: "45,100,000", vs2: "42,000,000" },
                { grade: "J", if: "36,900,000", vvs1: "34,100,000", vvs2: "29,500,000", vs1: "29,000,000", vs2: "27,600,000" },
            ],
        },
        {
            size: "6.0mm",
            prices: [
                { grade: "D", if: "121,800,000", vvs1: "119,200,000", vvs2: "108,600,000", vs1: "78,800,000", vs2: "75,200,000" },
                { grade: "E", if: "119,600,000", vvs1: "118,500,000", vvs2: "106,600,000", vs1: "76,200,000", vs2: "73,000,000" },
                { grade: "F", if: "118,100,000", vvs1: "116,500,000", vvs2: "102,000,000", vs1: "74,400,000", vs2: "71,500,000" },
                { grade: "J", if: "75,500,000", vvs1: "70,800,000", vvs2: "69,900,000", vs1: "62,200,000", vs2: "58,000,000" },
            ],
        },
        {
            size: "6.2mm",
            prices: [
                { grade: "D", if: "182,200,000", vvs1: "180,900,000", vvs2: "179,000,000", vs1: "176,400,000", vs2: "174,000,000" },
                { grade: "E", if: "175,500,000", vvs1: "173,200,000", vvs2: "171,600,000", vs1: "168,000,000", vs2: "166,000,000" },
                { grade: "F", if: "166,600,000", vvs1: "163,800,000", vvs2: "159,800,000", vs1: "155,300,000", vs2: "150,700,000" },
                { grade: "J", if: "105,000,000", vvs1: "102,000,000", vvs2: "98,800,000", vs1: "96,500,000", vs2: "94,000,000" },
            ],
        },
        // {
        //     size: "6.3mm(<1CT)",
        //     prices: [
        //         { grade: "D", if: "192,300,000", vvs1: "188,100,000", vvs2: "183,600,000", vs1: "166,600,000", vs2: "162,000,000" },
        //         { grade: "E", if: "190,600,000", vvs1: "186,400,000", vvs2: "182,600,000", vs1: "164,300,000", vs2: "160,100,000" },
        //         { grade: "F", if: "188,200,000", vvs1: "183,200,000", vvs2: "180,000,000", vs1: "162,200,000", vs2: "158,800,000" },
        //         { grade: "J", if: "102,600,000", vvs1: "98,000,000", vvs2: "85,000,000", vs1: "72,200,000", vs2: "60,500,000" },
        //     ],
        // },
        // {
        //     size: "6.3mm(>1CT)",
        //     prices: [
        //         { grade: "D", if: "205,300,000", vvs1: "203,600,000", vvs2: "202,000,000", vs1: "199,900,000", vs2: "198,100,000" },
        //         { grade: "E", if: "203,600,000", vvs1: "201,700,000", vvs2: "198,300,000", vs1: "195,600,000", vs2: "190,400,000" },
        //         { grade: "F", if: "198,400,000", vvs1: "195,600,000", vvs2: "189,100,000", vs1: "185,200,000", vs2: "183,800,000" },
        //         { grade: "J", if: "102,600,000", vvs1: "98,000,000", vvs2: "85,000,000", vs1: "72,200,000", vs2: "60,500,000" },
        //     ],
        // },
        // {
        //     size: "6.8mm",
        //     prices: [
        //         { grade: "D", if: "340,000,000", vvs1: "338,000,000", vvs2: "326,000,000", vs1: "315,800,000", vs2: "300,600,000" },
        //         { grade: "E", if: "338,000,000", vvs1: "330,000,000", vvs2: "325,200,000", vs1: "311,600,000", vs2: "292,000,000" },
        //         { grade: "F", if: "299,600,000", vvs1: "295,600,000", vvs2: "291,100,000", vs1: "284,000,000", vs2: "282,000,000" },
        //         { grade: "J", if: "140,000,000", vvs1: "138,000,000", vvs2: "136,100,000", vs1: "134,000,000", vs2: "112,600,000" },
        //     ],
        // },
        // {
        //     size: "7.2mm",
        //     prices: [
        //         { grade: "D", if: "450,000,000", vvs1: "430,000,000", vvs2: "418,800,000", vs1: "416,000,000", vs2: "415,000,000" },
        //         { grade: "E", if: "435,000,000", vvs1: "415,800,000", vvs2: "403,600,000", vs1: "401,200,000", vs2: "399,600,000" },
        //         { grade: "F", if: "420,200,000", vvs1: "400,000,000", vvs2: "383,000,000", vs1: "374,600,000", vs2: "368,000,000" },
        //         { grade: "J", if: "198,800,000", vvs1: "196,000,000", vvs2: "172,000,000", vs1: "168,000,000", vs2: "166,200,000" },
        //     ],
        // },
        // {
        //     size: "8.1mm",
        //     prices: [
        //         { grade: "D", if: "1,850,000,000", vvs1: "1,680,000,000", vvs2: "1,420,000,000", vs1: "1,100,000,000", vs2: "980,000,000" },
        //         { grade: "E", if: "1,650,000,000", vvs1: "1,480,000,000", vvs2: "1,220,000,000", vs1: "960,000,000", vs2: "910,000,000" },
        //         { grade: "F", if: "1,450,000,000", vvs1: "1,280,000,000", vvs2: "1,020,000,000", vs1: "760,000,000", vs2: "710,000,000" },
        //         { grade: "J", if: "430,000,000", vvs1: "429,000,000", vvs2: "380,000,000", vs1: "352,000,000", vs2: "330,000,000" },
        //     ],
        // },
        // {
        //     size: "9.0mm",
        //     prices: [
        //         { grade: "D", if: "4,800,000,000", vvs1: "2,800,000,000", vvs2: "2,700,000,000", vs1: "2,200,000,000", vs2: "1,900,000,000" },
        //         { grade: "E", if: "2,900,000,000", vvs1: "2,700,000,000", vvs2: "2,400,000,000", vs1: "2,000,000,000", vs2: "1,800,000,000" },
        //         { grade: "F", if: "2,700,000,000", vvs1: "2,400,000,000", vvs2: "2,200,000,000", vs1: "1,900,000,000", vs2: "1,600,000,000" },
        //         { grade: "J", if: "879,000,000", vvs1: "850,200,000", vvs2: "742,000,000", vs1: "793,300,000", vs2: "742,000,000" },
        //     ],
        // },
    ];

    return (
        <div>
            <Navbar />
            <PageContainer>
                <NavbarContainer>
                    <NavbarList>
                        <NavbarItem><NavbarLink href="#3.6mm">3.6mm</NavbarLink></NavbarItem>
                        <NavbarItem><NavbarLink href="#3.9mm">3.9mm</NavbarLink></NavbarItem>
                        <NavbarItem><NavbarLink href="#4.1mm">4.1mm</NavbarLink></NavbarItem>
                        <NavbarItem><NavbarLink href="#4.5mm">4.5mm</NavbarLink></NavbarItem>
                        <NavbarItem><NavbarLink href="#5.0mm">5.0mm</NavbarLink></NavbarItem>
                        <NavbarItem><NavbarLink href="#5.2mm">5.2mm</NavbarLink></NavbarItem>
                        <NavbarItem><NavbarLink href="#5.3mm">5.3mm</NavbarLink></NavbarItem>
                        <NavbarItem><NavbarLink href="#5.4mm">5.4mm</NavbarLink></NavbarItem>
                        <NavbarItem><NavbarLink href="#6.0mm">6.0mm</NavbarLink></NavbarItem>
                        <NavbarItem><NavbarLink href="#6.2mm">6.2mm</NavbarLink></NavbarItem>
                    </NavbarList>
                </NavbarContainer>
                <HeaderSection>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="inherit" to={routes.homePage}>
                                Home Page
                            </Link>
                            <Link underline="hover" color="inherit" to={routes.diamondPrice}>
                            Diamond Price List
                            </Link>
                        </Breadcrumbs>
                    </div>
                    <Title style={{fontWeight:'600', fontSize:'40px'}}>Natural diamond price list</Title>
                    <Subtitle>**ROUND BRILLIANT CUT – G3 EXCELLENT – FLUORESCENCE**</Subtitle>
                    <Description>
                    Diamond price list is based on glass (mm), water color (color) and cleanliness.<br/> 
                    If you want to buy diamond jewelry like rings, necklaces, earrings... but don't 
                    know the current price of diamonds, please quickly refer to the latest updated 
                    price quote below.
                    </Description>
                    <Note>(Currency unit: VNĐ)</Note>
                </HeaderSection>
                {data.map(section => (
                    <Section id={section.size} key={section.size}>
                        <SectionHeader>Diamond Price <span>{section.size}</span></SectionHeader>
                        <TableContainer>
                            <PriceTable>
                                <thead>
                                    <tr>
                                        <TableHeader>Grade</TableHeader>
                                        <TableHeader>IF</TableHeader>
                                        <TableHeader>VVS1</TableHeader>
                                        <TableHeader>VVS2</TableHeader>
                                        <TableHeader>VS1</TableHeader>
                                        <TableHeader>VS2</TableHeader>
                                    </tr>
                                </thead>
                                <tbody>
                                    {section.prices.map(price => (
                                        <tr key={price.grade}>
                                            <TableCell>{price.grade}</TableCell>
                                            <TableCell>{price.if}</TableCell>
                                            <TableCell>{price.vvs1}</TableCell>
                                            <TableCell>{price.vvs2}</TableCell>
                                            <TableCell>{price.vs1}</TableCell>
                                            <TableCell>{price.vs2}</TableCell>
                                        </tr>
                                    ))}
                                </tbody>
                            </PriceTable>
                        </TableContainer>
                    </Section>
                ))}
            </PageContainer>
            <Footer/>
        </div>
    );
};

export default DiamondPricePage;
