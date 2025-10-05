import React from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  // const [data, setData] = React.useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/Ailiy6")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="bg-gray-600 text-white m-4 p-4 text-3xl text-center py-5">
      Github Public Repos : {data.public_repos}
      <img src={data.avatar_url} width={300} alt="" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Ailiy6");
  return response.json();
};
