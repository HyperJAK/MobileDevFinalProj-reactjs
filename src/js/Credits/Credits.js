import styled from "styled-components";


export const Credits = () =>{


    const Copyright = styled.a`
        color: white;
    `;


    return(

        <footer className="bg-body-tertiary text-center" style={{color: 'white'}}>
            <div className="container p-4 pb-0" >

                <section className="mb-4">
                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{backgroundColor: '#3b5998'}}
                        href="#!"
                        role="button"
                    ><i className="fab fa-facebook-f"></i
                    ></a>

                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{backgroundColor: '#55acee'}}
                        href="#!"
                        role="button"
                    ><i className="fab fa-twitter"></i
                    ></a>

                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{backgroundColor: '#dd4b39'}}
                        href="#!"
                        role="button"
                    ><i className="fab fa-google"></i
                    ></a>

                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{backgroundColor: '#ac2bac'}}
                        href="#!"
                        role="button"
                    ><i className="fab fa-instagram"></i
                    ></a>

                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{backgroundColor: '#0082ca'}}
                        href="#!"
                        role="button"
                    ><i className="fab fa-linkedin-in"></i
                    ></a>
                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{backgroundColor: '#333333'}}
                        href="#!"
                        role="button"
                    ><i className="fab fa-github"></i
                    ></a>
                </section>
            </div>

            <div className="text-center p-3"  style={{backgroundColor: 'rgba(13,110,253,255)'}}>
                © 2020 Copyright:
                <Copyright href="#">   MDBootstrap.com</Copyright>
            </div>
        </footer>
    );


}