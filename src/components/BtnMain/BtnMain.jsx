import "./btn-main.scss";

const BtnMain = ({ btnText, onClick, link, BtnType }) => {
  return (
    <>
        <a className='btn-main uppercase' href={link} target="blank"><span>{btnText}</span></a> 
    </>
    
  );
};

export default BtnMain;
