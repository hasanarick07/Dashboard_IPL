import React from 'react';
import { useQuery } from "react-query";


const Home = () => {

    const { data: ipl } = useQuery("iplData", () =>
    fetch("https://data.mongodb-api.com/app/data-zjtym/endpoint/data/v1").then(res =>
      res.json()
    )
  );
  // if (isLoading) {
  //   return <Loading></Loading>;
  // }
  console.log(ipl?.length);

    return (
        <div>
            
        </div>
    );
};

export default Home;