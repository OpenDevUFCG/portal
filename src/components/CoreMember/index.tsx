'use client'

import React, { useEffect, useState } from 'react';
import styles from './coremember.module.css'
import {FaGithub} from 'react-icons/fa'
import useFetchGithubUserData from '@/utils/useFetchGithubUserData';

interface MemberProps{
    name: string;
    github: string;

}

function CoreMember (props : MemberProps){
    const username = props.github;
    const name = props.name;

    const{imgUrl, loading} = useFetchGithubUserData(username);

    if (loading){
        return (
            <div className = {styles['core-member-container']} title={name}>
                <a href={`https://github.com/${username}`}>
                    <span className={styles.tooltip}><FaGithub className= {styles['tooltip-icon']}/> {name}</span>
                </a>
                <FaGithub className= {styles['core-member-img']} alt = {`Foto Perfil ${name}`}/>
            </div>)
    }

    return (
    <div className = {styles['core-member-container'] }title={name}>
        <a href={`https://github.com/${username}`}>
            <span className={styles.tooltip}><FaGithub className= {styles['tooltip-icon']}/> {name}</span>
        </a>
        <img className= {styles['core-member-img']} src = {imgUrl} alt = {`Foto Perfil ${name}`}/>
    </div>);
}

export default CoreMember;