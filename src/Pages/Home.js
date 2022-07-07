import React from 'react';
import { useQuery } from "react-query";


const Home = () => {

    const { data: ipl } = useQuery("iplData", () =>
    fetch("https://sheetlabs.com/ARIC/dashboard_ipl").then(res =>
      res.json()
    )
  );
  // if (isLoading) {
  //   return <Loading></Loading>;
  // }
  console.log(ipl.length);

    return (
        <div>
            
        </div>
    );
};

export default Home;