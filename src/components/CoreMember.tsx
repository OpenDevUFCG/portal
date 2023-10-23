import React from 'react';

interface MemberProps{
    name: string;
    github: string;

}

function CoreMember (props : MemberProps){
    let ghUsername = props.github;
    let name = props.name;

    // fetch from Github API
    // show tooltip on hover

    return (<div>
        <img src ="" alt = {`Foto Perfil ${name}`}></img>
    </div>);
}

export default CoreMember;