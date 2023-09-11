import {useState} from "react";
import CblogList from "./CblogList";
const Category = () => {
    const [cblogs, setCblogs]= useState([
        {title:"Gears", preview: "Most active game", body:"Action to the best of the best game in the following year.",Category:"Action" , author:"Nehal",time:"10 mins ago" , id: "10" },
        {title:"BioMutant", preview: "Most active game", body:"Action to the best of the best game in the following year.",category:"Action", author:"Priya",time:"20 mins ago" , id: "11" },
        {title:"Sandbox", preview: "Most active game", body:"Action to the best of the best game in the following year.",category:"Metaverse", author:"Samson",time:"30 mins ago" , id: "12" },
        {title:"Minecraft", preview: "Most active game", body:"Action to the best of the best game in the following year.",category:"Survival", author:"Pritam",time:"30 mins ago" , id: "13" },
        {title:"FrozaHorizon", preview: "Most active game", body:"Action to the best of the best game in the following year.",category:"Racing", author:"Bob",time: "35 mins ago" , id: "14" },
        {title:"Need For Speed Worlds", preview: "Most active game", body:"Action to the best of the best game in the following year.",category:"Racing", author:"Nitin",time:"39 mins ago" , id: "15" },
        {title:"PUBG", preview: "Most active game", body:"Action to the best of the best game in the following year.",category:"PvP", author:"surya",time:"41 mins ago" , id: "16" },
        {title:"FreeFire", preview: "Most active game", body:"Action to the best of the best game in the following year.",category:"PvP", author:"Deepak",time:"45 mins ago" , id: "17" },
        {title:"Call oF Duty Hazard", preview: "Most active game", body:"Action to the best of the best game in the following year.",category:"PvP", author:"Zotovk",time:"48 mins ago" , id: "18" },
        {title:"The Division 2", preview: "Most active game", body:"Action to the best of the best game in the following year.",category:"Action", author:"Blair",time:"49 mins ago" , id: "19" },
        {title:"Saint Rows", preview: "Most active game", body:"Action to the best of the best game in the following year.",category:"OpenWorld", author:"Samson",time:"52 mins ago" , id: "20" },
        {title:"GTA V", preview: "Most active game", body:"Action to the best of the best game in the following year.",category:"OpenWorld", author:"Nehal",time:"59 mins ago" , id: "21" },
    ])
    return ( 
        <div className="home">
            {/* with props  */}
            <CblogList cblogs = {cblogs} title ="Trending now" />
            <div className="sorted">
                <h1>Sorted by</h1>
                <CblogList cblogs = {cblogs.filter((sortblog) =>sortblog.category === "Action")} m_title="Action"/>
                <CblogList cblogs = {cblogs.filter((sortblog)=>sortblog.category === "PvP")} m_title= "PvP"/>
                <CblogList cblogs = {cblogs.filter((sortblog) => sortblog.category === "Racing")} m_title="Racing" />
            </div>

        </div>
     );
}
 
export default Category;