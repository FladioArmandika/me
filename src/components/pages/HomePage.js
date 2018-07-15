import React from 'react'

class HomePage extends React.Component {


    modalStyle = {
        height: '500px',
    }

    render() {
        return(
            <div className="homecontainer">
                <div className="container">
                    <h2 className="homeName">
                        Fladio Armandika
                    </h2>
                    <span className="homeTitle">
                        Full Stack Developer
                    </span>
                    <button className='btn btn-sm btn-primary mt-2' data-toggle="modal" data-target="#sayHelloModal">
                        Say Hello!
                    </button>
                </div>
                <div style={this.modalStyle} className="modal fade" id="sayHelloModal" tabIndex="-1" role="dialog" aria-labelledby="sayHelloModal" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            {/* <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div> */}
                            {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" >&times;</span>
                            </button> */}
                            <div className="modal-body">
                                <div class="form-group">
                                    <input className="form-control" placeholder="Enter Your Email Address..." />
                                </div>
                                <div class="form-group">
                                    <textarea className="form-control" placeholder="" />
                                </div>
                                <button className="btn btn-light">Nah..</button>
                                <button className="btn btn-secondary ml-2">SEND</button>
                            </div>
                            {/* <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            
        );
    }

}

export default HomePage;