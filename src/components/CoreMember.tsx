import React, { useEffect, useState } from 'react';
import './CoreMember.css'
interface MemberProps{
    name: string;
    github: string;

}

function CoreMember (props : MemberProps){

    const username = props.github;
    const name = props.name;

    const imgUrl = "https://avatars.githubusercontent.com/u/50351113?v=4"
    
    // TO DO: fetch imgUrl from github API
    
    // TO DO: show tooltip on hover

    return (
    <div>
        <img src = {imgUrl} alt = {`Foto Perfil ${name}`}/>
    </div>);
}

export default CoreMember;