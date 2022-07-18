// import axios from "axios";
// import {useEffect, useState} from "react";
// const client = axios.create({
//     baseURL: 'https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc'
//   });
//   const GithubRepo = () => {
//        const [repos, setrepos] = useState([]);
 
//     useEffect(() => {
//        client.get('?_limit=10').then((response) => {
//           setRepos(response.data);
//        });
//     }, []);
 
//     return (
//          <div className="">
    
//            </div>
//     );
//  };
 
//  export default GithubRepo;

// // const githubRepo = () => {
// //   const url = 'https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc';
// //    const [repos, setrepos] = useState([]);

// //   useEffect(() => {
// //     axios.get(url).then(res => {
// //         setrepos(res.data.repository);
// //     })
// //   }, [])

// //   return <div className="">
    
// //   </div>
// // };

// // export default githubRepo;