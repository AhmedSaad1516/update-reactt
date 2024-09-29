import './Btn-audit.css'
interface PersonalInfoProps {
    childrenTitle?: React.ReactNode;
    className: string;
    childrenIcon?: React.ReactNode;
}

function BtnAudit({ childrenTitle, className , childrenIcon }: PersonalInfoProps){
    return (
        <>
          <button className={`btn ${className}`} type="button">
          
          {childrenIcon}
          {childrenTitle}
      
        </button>
     
                     
                   
        </>
    )
}
export default BtnAudit