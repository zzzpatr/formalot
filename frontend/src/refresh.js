const callrefresh = async (type) => {
    const data = await fetch('http://127.0.0.1:5000/refresh',{
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('refresh_token')}`,
        },
    });
    let resJson = await data.json();
    if (resJson.access_token){
        localStorage.setItem('jwt', resJson.access_token);
        console.log("Refresh Success");
        console.log(resJson.access_token);
        if(type !== "reload"){
            alert("若非頁面跳轉，請重新執行動作");
        }
        window.location.reload();   
    }else{
        localStorage.setItem('jwt', resJson.access_token);
        localStorage.setItem('refresh_token', resJson.refresh_token);
        console.log("Please Login again!");
    };
};

export default callrefresh;