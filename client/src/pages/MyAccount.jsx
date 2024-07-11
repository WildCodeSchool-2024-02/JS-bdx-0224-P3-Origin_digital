// import { useEffect, useState } from "react"


function MyAccount() {
//     const [informationUser, setInformationUser] = useState([]);

//     useEffect(() => {
//         fetch(`${import.meta.env.VITE_API_URL}/api/user`)
//         .then((result) => result.json())
//         .then((data) => {
//             setInformationUser(data);
//         });
//     }, []);
// console.log(informationUser)

  return (
    <>
        <h2 className="m-5">Mon espace</h2>
        <ul className="flex flex-col justify-start items-start bg-primary-light rounded-md mx-5 mb-8 p-5 md:mb-60 lg:mb-52">
            <h3>Information du compte</h3>
            <li>Status: Abonnée</li>
            <li>Prénom: </li>
            <li>Nom:</li>
            <li>Adresse mail:</li>
        </ul>
    </>

  )
}

export default MyAccount