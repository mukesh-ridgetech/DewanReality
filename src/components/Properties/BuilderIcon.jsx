import React from "react";
import "../../style/Properties/Prop.css";
import f1 from '../../../public/images/f1.png'
import { baseUrl } from "../helper/Helper";

const BuilderIcon = ({data}) => {

  console.log("data",data);
  return (
    <>
      <div className="container1">
        <div className="Buider-icon-container">
          <div className="Buider-icon-container-left">
            <h1>{data?.builder?.name}</h1>
            <h5 style={{textTransform:"capitalize"}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.0015 11.8333C12.506 11.8333 12.9374 11.6536 13.2958 11.2943C13.6541 10.9351 13.8333 10.5032 13.8333 9.9985C13.8333 9.494 13.6536 9.06258 13.2943 8.70425C12.9351 8.34592 12.5032 8.16675 11.9985 8.16675C11.494 8.16675 11.0626 8.34642 10.7043 8.70575C10.3459 9.06492 10.1668 9.49683 10.1668 10.0015C10.1668 10.506 10.3464 10.9374 10.7058 11.2958C11.0649 11.6541 11.4968 11.8333 12.0015 11.8333ZM12 19.8C14.1555 17.8333 15.7499 16.0486 16.7833 14.4458C17.8166 12.8431 18.3333 11.4278 18.3333 10.2C18.3333 8.28567 17.7219 6.71817 16.4992 5.4975C15.2766 4.277 13.7768 3.66675 12 3.66675C10.2232 3.66675 8.72342 4.277 7.50075 5.4975C6.27808 6.71817 5.66675 8.28567 5.66675 10.2C5.66675 11.4278 6.19175 12.8431 7.24175 14.4458C8.29175 16.0486 9.87783 17.8333 12 19.8ZM12 22C9.31667 19.7167 7.3125 17.5958 5.9875 15.6375C4.6625 13.6792 4 11.8667 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8667 19.3375 13.6792 18.0125 15.6375C16.6875 17.5958 14.6833 19.7167 12 22Z"
                  fill="#0041D9"
                />
              </svg>
              {data?.location?.sector} ,{data?.location?.city}
            </h5>
          </div>
          <div className="Buider-icon-container-right">
               <img src={`${baseUrl}${data?.builder?.logo}`} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BuilderIcon;
