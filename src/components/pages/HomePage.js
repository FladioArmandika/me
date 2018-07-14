import React from 'react'

class HomePage extends React.Component {

    render() {
        return(
            <div className="homecontainer">
                <div className="container">
                    <h2>
                        Fladio Armandika
                    </h2>
                    <span className="">
                        Full Stack Developer
                    </span>
                    <button className='btn btn-sm btn-primary mt-2'>
                        Say Hello!
                    </button>
                </div>
            </div>
        );
    }

}

export default HomePage;