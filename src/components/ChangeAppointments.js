import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const ChangeAppointments = () => {

    const [startDate, setStartDate] = useState(new Date());

    return (

        <>
            <h1>Change Appointment</h1>

            <div className="form-group col-md-4 py-1">
                <label htmlFor="inputState">Select Teacher</label>
                <select id="inputState" className="form-control">
                    <option selected="">Select Teacher</option>
                    <option>Dr. Farzeel Anwar</option>
                    <option>Dr. Saif Hassan</option>
                    <option>Mr. Khalid Detho</option>
                    <option>Engr. Fayyazuddin</option>
                    <option>Dr. Muhammad Hussain Mughal</option>
                    <option>Mr. Sohail Khan</option>
                </select>
            </div>



            <div>

                <form>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1"><h5>Write a reason for re-scheduled your meeting.</h5></label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            defaultValue={""}
                        />
                    </div>
                </form>

            </div>



                <div className="form-group col-md-4">
                    <label htmlFor="inputState"><h5>Select Expected Date</h5></label>
                    <DatePicker
                        showIcon
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                    />

                </div>












        </>
    );


}

export default ChangeAppointments;