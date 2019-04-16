import React from 'react'

function projectInfo() {
    return(
        <div>
            <div className="row justify-content-center">
                <h1 className="display-1" style={{color: "white"}}>The Project</h1>
            </div>
            <div className="container mt-3" id="custom-container-1">
                <h5 className="m-2">Overview:</h5>
                <div className="ml-3">
                    <p>ABC Corp has grown from a small office, in a single location, to 1000 employees spread across multiple locations, including a few satellite offices throughout the U.S. During this period of growth, the number of IT equipment leased or purchased by the company has become increasingly difficult to track.</p>
                    <p>Presently the company tracks this information on an Excel spreadsheet that is shared amongst different IT staff across multiple office locations. This has become very difficult to maintain as multiple copies of the spreadsheet have been made, which has resulted in fragmented, redundant, and sometimes inconsistent information. There is no single source of truth that accurately reflects the number of equipment in the company’s possession. This is affecting the company’s purchasing decisions as they have ordered too many or not ordered enough equipment, which has resulted in low inventory some items, and in addition resulted in assigning the same device to multiple meetings at the same time</p>
                </div>
                <div className="mt-4">
                    <h5 className="m-2">Goal:</h5>
                    <div className="ml-3">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget sem quis felis vehicula condimentum eu commodo orci. Ut tincidunt dictum egestas. Mauris et ante sit amet ex fermentum iaculis. Fusce leo justo, luctus vel suscipit eu, gravida sed lacus. Vestibulum sem metus, scelerisque et tincidunt at, accumsan non sapien. Nullam non nibh eget ipsum laoreet convallis sed vitae enim.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default projectInfo