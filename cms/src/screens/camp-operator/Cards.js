import React from 'react';

let Cards=()=> {
    return ( 
        <React.Fragment>
            <div className='row  '>
                <div className='col'>
                    <div className='card'>
                        <div className='card-header bg-success text-center '>
                            <h4>Total users added</h4>
                        </div>
                        <div className='card-body'>
                            <h5 className='text-center'>4234</h5>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card'>
                        <div className='card-header bg-danger text-center'>
                            <h4>Users reaining</h4>
                        </div>
                        <div className='card-body'>
                            <h5 className='text-center'>300</h5>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card'>
                        <div className='card-header bg-secondary text-center'>
                            <h4>Camp days left</h4>
                        </div>
                        <div className='card-body'>
                            <h5 className='text-center'>2 days</h5>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}

export default Cards;