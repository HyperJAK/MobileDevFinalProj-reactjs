import styled from "styled-components";
import {DarkGrey, JeansBlue, LightBlue, LighterBlue, NormalBlue, Purple, Red} from "../../assets/colors/Colors";


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
                        style={{backgroundColor: JeansBlue}}
                        href="#!"
                        role="button"
                    ><i className="fab fa-facebook-f"></i
                    ></a>

                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{backgroundColor: LighterBlue}}
                        href="#!"
                        role="button"
                    ><i className="fab fa-twitter"></i
                    ></a>

                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{backgroundColor: Red}}
                        href="#!"
                        role="button"
                    ><i className="fab fa-google"></i
                    ></a>

                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{backgroundColor: Purple}}
                        href="#!"
                        role="button"
                    ><i className="fab fa-instagram"></i
                    ></a>

                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{backgroundColor: LightBlue}}
                        href="#!"
                        role="button"
                    ><i className="fab fa-linkedin-in"></i
                    ></a>
                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{backgroundColor: DarkGrey}}
                        href="#!"
                        role="button"
                    ><i className="fab fa-github"></i
                    ></a>
                </section>
            </div>

            <div className="text-center p-3"  style={{backgroundColor: NormalBlue}}>
                © 2020 Copyright:
                <Copyright href="#">   Test.com</Copyright>
            </div>
        </footer>
    );


}