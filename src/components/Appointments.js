import React from 'react';

const Appointments =() =>{

        return (

            <>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Full Name</label>
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Write your full name here"
                            />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Write your Email here"
                            />
                        </div>

                    </div>

                    <div className="form-row">

                        <div className="form-group col-md-4 py-2">
                            <label htmlFor="inputState">Select Semester</label>
                            <select id="inputState" className="form-control">
                                <option selected="">Select Semester</option>
                                <option>1st</option>
                                <option>2nd</option>
                                <option>3rd</option>
                                <option>4th</option>
                                <option>5th</option>
                                <option>6th</option>
                                <option>7th</option>
                                <option>8th</option>

                            </select>
                        </div>


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



                        <div className="form-group col-md-4 py-2">
                            <label htmlFor="inputState">Are your class teacher?</label>
                            <select id="inputState" className="form-control">
                                <option selected="">Are your class teacher?</option>
                                <option>Yes</option>
                                <option>No</option>


                            </select>

                        </div>


                    </div>


                </form>

                <div>

                <form>
                    <fieldset disabled="">
                        <div className="form-group py-2">
                            <label htmlFor="disabledTextInput">Query</label>
                            <input
                                type="text"
                                id="disabledTextInput"
                                className="form-control"
                                placeholder="Write your Query here"
                            />
                        </div>

                        <div className="form-group">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="disabledFieldsetCheck"
                                    disabled=""
                                />

                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </fieldset>
                </form>






            </div>


                <div>


        {/*                <title>DateTimepicker</title>*/}
        {/*                /!* Include Bootstrap CDN *!/*/}

        {/*                /!* Include Moment.js CDN *!/*/}
        {/*                /!* Include Bootstrap DateTimePicker CDN *!/*/}
        {/*                <link*/}
        {/*                    href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/css/bootstrap-datetimepicker.min.css"*/}
        {/*                    rel="stylesheet"*/}
        {/*                />*/}
        {/*                /!* Include datetime input to display*/}
		{/*datetimepicker in container with*/}
		{/*relative position *!/*/}
        {/*                <div className="container" style={{ margin: 100 }}>*/}
        {/*                    <div style={{ position: "relative" }}>*/}
        {/*                        /!* Include input field with id so*/}
		{/*		that we can use it in JavaScript*/}
		{/*		to set attributes.*!/*/}
        {/*                        <input className="form-control" type="text" id="datetime" />*/}
        {/*                    </div>*/}
        {/*                </div>*/}




                </div>

            </>
        );

}

export default Appointments;