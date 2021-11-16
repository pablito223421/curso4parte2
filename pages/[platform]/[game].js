import React from "react";
import { useRouter} from "next/router";


export default function Game() {
   const router = useRouter();
   const { platform, game } = router.query;
   console.log(router);

    return(
    <div>
    <h1> Esta es la plataforma:{platform} </h1>
    <h2> Estamos en el juego de: {game} </h2>
    </div>
    );
}