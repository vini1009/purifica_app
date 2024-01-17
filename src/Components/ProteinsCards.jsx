import React from 'react'

function ProteinsCards({title, description}) {
    return (
        <>
            <div class="col-sm-3 col-6">
                <div class="card card-stats card-round rounded-20 border border-success align-items-center">
                    <div class="card-body ">
                        <div class="row">
                            <div class="" >
                                <div class="numbers">
                                    <p class="card-category">{title}</p>
                                    <h3>{description}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProteinsCards
