
const getLochalStorageData = () => {
    try {
        const data = localStorage.getItem("InstalledApp")
        return data ? JSON.parse(data) : [];
    } catch (err){
        console.log(err);
        return [];
}
}

const setLochalStorageData = (id) => {
    const installId = getLochalStorageData();
    try {
        const isduplicate = installId.includes(id);
        if (isduplicate) {
            alert("This app are alredy installed.")
            return;
        } else {
            const updateInstalledApp = [...installId, id];
            localStorage.setItem("InstalledApp",JSON.stringify(updateInstalledApp))
        }
    }catch (err){
        console.log(err);
}
}

export {getLochalStorageData,setLochalStorageData };