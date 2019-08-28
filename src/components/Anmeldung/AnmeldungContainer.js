import React, { Component } from 'react';
import './anmeldung.css';

class AnmeldungContainer extends Component {
  render() {
    return (
      <div className="anmeldungContainer">
        <div className="formType_details Flex">
            <div className="Flex typeLeft">
                <div className="image_anmeldung">Image</div>
                <div>
                    <div className="label1"></div>Fill your anmeldung form in english
                    <div className="label2">
                        New to germany and finding it difficult to fill the most easiest german form? <br />
                        We are here to help you get through this. 
                    </div>
                </div>
            </div>
            <div className="typeRight Flex">
                <i className="fa fa-info-circle infoIcon" aria-hidden="true"></i>
                <div className="infoQuestn">
                    WTF is Anmeldung? 
                </div>
            </div>
        </div>
        <div className="middleContainer">
            <div className="middleLeft">
                <div className="how-it-works"> How it Works? </div>
                <div className="Flex block">
                    <i class="fa fa-desktop" aria-hidden="true"></i>
                    <div>
                        <div className="questn1">Fill in your details</div>
                        <div className="questnDesc">
                            No worries, we don’t store your data.  
                        </div>
                    </div>
                </div>
                <div className="Flex block">
                    <i class="fa fa-cloud-download" aria-hidden="true"></i>
                    <div>
                        <div className="questn1">Dowload and Print</div>
                        <div className="questnDesc">
                            Click on the download button and bam. Its free.
                        </div>
                    </div>
                </div>
            </div>
            <div className="middleRight">

            </div>
        </div>
      </div>
    );
  }
}

export default AnmeldungContainer;
