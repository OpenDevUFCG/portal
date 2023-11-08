import { useEffect, useState } from "react";

function useFetchGithubUserData(username: string) {
    const [imgUrl, setImgUrl] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchGithubData = async (username: string, setImgUrl : (url: string) => void, setLoading: (state : boolean) => void) => {
        try{
            const url = `https://api.github.com/users/${username}`
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `token ${process.env.NEXT_PUBLIC_GH_TOKEN}`
                }
            });
            if (response.ok){
                const data = await response.json();
                setImgUrl(data.avatar_url);
            } else {
                throw new Error("Error fetching Github API: Response Not OK");
            }
            setLoading(false)
        } catch(err) {
            console.error("Error loading Member Avatar:", err);
            setImgUrl("/assets/icons/github.svg");
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchGithubData(username, setImgUrl, setLoading);
    }, [username]);

    return {imgUrl, loading};
}

export default useFetchGithubUserData;