export const mutationLogin = async () => {
    const res =await fetch( "https://api.themoviedb.org/3/authentication/guest_session/new",
    {
        headers : {
            Authorization: `Bearer ${APITOKEN}`,
        }
        
    }
    )
    console.log(res.json())
    return res.json()
}