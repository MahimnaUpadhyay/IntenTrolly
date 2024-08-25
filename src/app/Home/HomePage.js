import React from 'react';
import Card from '../components/Card';

import { CiGlobe } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import Table from '../components/Table';

const HomePage = () => {
  return (
    <>
      <div>
        <div className='grid grid-cols-3 min-h-80 place-items-center'>
          <Card
            Icon={<CiGlobe size={62} color='darkblue' />}  // Adjust the size as needed
            Card_Title={"Website Store"}
            Card_Content={"$1900"}
            Button_Title={"View"}
          />
          <Card
            Icon={<FaInstagram size={62} color='darkblue' />}  // Adjust the size as needed
            Card_Title={"Instagram Store"}
            Card_Content={"$800"}
            Button_Title={"View"}
          />
          <Card
            Icon={<CiLocationOn size={62} color='darkblue' />}  // Adjust the size as needed
            Card_Title={"Offline Store"}
            Card_Content={"$1200"}
            Button_Title={"View"}
          />
        </div>
      </div>

      <div className='mt-5'>
        <Table />
      </div>
      
    </>
  );
}

export default HomePage;
