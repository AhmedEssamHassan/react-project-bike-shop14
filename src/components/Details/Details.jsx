import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../Context";

class Details extends React.Component {
  state = {};

  render() {
    return (
      <DetailsContainer className="container-fluid py-5">
        <div className="row">
          <div className="col-md-5 text-light">
            <Img
              src="video-and-img/accesories.jpg"
              className="rounded"
              alt="product"
            />
            <DefrentColors className="d-flex justify-content-around border rounded mt-2 py-2">
              <ImgColor
                src="video-and-img/accesories.jpg"
                alt=""
                className="mx-1"
              />
              <ImgColor
                src="video-and-img/accesories.jpg"
                alt=""
                className="mx-1"
              />
              <ImgColor
                src="video-and-img/accesories.jpg"
                alt=""
                className="mx-1"
              />
              <ImgColor
                src="video-and-img/accesories.jpg"
                alt=""
                className="mx-1"
              />
              <ImgColor
                src="video-and-img/accesories.jpg"
                alt=""
                className="mx-1"
              />
              <ImgColor
                src="video-and-img/accesories.jpg"
                alt=""
                className="mx-1"
              />
              <ImgColor
                src="video-and-img/accesories.jpg"
                alt=""
                className="mx-1"
              />
              <ImgColor
                src="video-and-img/accesories.jpg"
                alt=""
                className="mx-1"
              />
            </DefrentColors>
          </div>
          <div className="col-md-7 text-light">
            <div className="d-flex flex-column justify-content-around h-100 border rounded px-3">
              <div className=" h-25 d-flex justify-content-center align-items-center">
                <h3 className="border-bottom text-capitalize px-2 pb-2 mb-2">
                  title
                </h3>
              </div>
              <div className="">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                  accusantium eligendi! Provident architecto, reiciendis hic
                  eveniet, sapiente quia facere, suscipit inventore animi atque
                  ex soluta tempore id. Quibusdam, aut est? Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Repellendus, tenetur
                  maiores atque porro voluptatum quisquam cupiditate quas unde,
                  doloribus facere fugit perspiciatis repellat culpa laudantium
                  inventore. Velit consectetur veniam optio!
                </p>
              </div>
              <div className=" d-flex justify-content-center align-items-center align-self-center w-75 h-25">
                <div className="d-flex justify-content-center align-items-center w-100 py-3">
                  <div className="col-md-6 text-center">
                    <h3 className="m-0 text-capitalize">price: $122</h3>
                  </div>
                  <div className="col-md-6 text-center">
                    <button className="button rounded text-capitalize d-flex justify-content-center align-items-center">
                      <p className="mr-2 mb-0">add to cart</p>
                      <i class="fa fa-cart-plus" aria-hidden="true"></i>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DetailsContainer>
    );
  }
}

export default Details;

const DetailsContainer = styled.div`
  background: #0a0a23;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const DefrentColors = styled.div`
  max-width: 100% !important;
  overflow: auto;
`;

const ImgColor = styled.img`
  width: 100px;
  height: auto;
`;
/* 
      <ProductConsumer>
        {(val) => {
          const { detailsId } = val;
          return <p>{detailsId}</p>;
        }}
      </ProductConsumer> */
