import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import './List.css'
import { useLocation } from "react-router-dom";
import { useState } from "react";
import 'date-fns'
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const List = ()=>{

    const location = useLocation()
    const [destination,setDestination] = useState(location.state.destination)
    const [date,setDate] = useState(location.state.date)
    const [openDate,setOpenDate] = useState(false);
    const [options,setOptions] = useState(location.state.options);

    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="listTitle">
                            Search
                        </h1>
                        <div className="lsItem">
                            <label htmlFor="">Destination</label>
                            <input type="text" placeholder={destination}/>
                        </div>
                        <div className="lsItem">
                            <label htmlFor="">Check-in Date</label>
                            <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
                            {openDate && <DateRange onChange={item=>setDate([item.selection])} minDate={new Date()} ranges={date}/>}
                            {/* <input type="text" /> */}
                        </div>
                        <div className="lsItem">
                            <label htmlFor="">Options</label>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Min price <small>per night</small>
                                </span>
                                <input type="text" className="lsOptionInput" />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Adult                               </span>
                                <input type="text" className="lsOptionInput" />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Min price <small>per night</small>
                                </span>
                                <input type="text" className="lsOptionInput" />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Min price <small>per night</small>
                                </span>
                                <input type="text" className="lsOptionInput" />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Min price <small>per night</small>
                                </span>
                                <input type="text" className="lsOptionInput" />
                            </div>
                        </div>

                    </div>
                    <div className="listResult">
                        results
                    </div>
                </div>
            </div>
            </div>
    )
}

export default List;

